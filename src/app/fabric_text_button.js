(function (fabric) {
  "use strict";

  fabric.Button = fabric.util.createClass(fabric.Group, {
    type: "button",
    stateProperties: fabric.Textbox.prototype.stateProperties.concat(
      "text",
      "buttonRx",
      "buttonRy",
      "buttonFill",
      "paddingOffset",
      "buttonStrokeWidth",
      "buttonStrokeColor",
      "buttonShadow"
    ),
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    textObj: null,
    rectObj: null,
    originX: "left",
    originY: "top",
    angle: 0,
    shadow: null,
    lockScalingFlip: true,

    text: "Sample Text",
    color: "#000",
    fontName: "calibri",
    fontSrc: "",
    textOpacity: 1,
    charSpacing: 1,
    lineHeight: 1,
    fontSize: 18,
    textAlign: "center",
    stroke: "#000",
    strokeWidth: 0,
    backgroundColor: "",
    textShadow: null,
    paddingOffset: 5,
    underline: false,
    linethrough: false,
    overline: false,
    fontStyle: "normal",
    fontWeight: "normal",

    buttonRx: 0,
    buttonRy: 0,
    buttonFill: "",
    buttonStrokeColor: "#000000",
    buttonStrokeWidth: 0,
    buttonShadow: null,

    _textTop: 0,
    _textLeft: 0,
    _textAngle: 0,
    _width: 1,
    _flag: 0,
    _fontSize: 18,
    _lastGoodLeft: 0,
    _lastGoodTop: 0,
    _initialWidth: null,
    _initialHeight: null,
    _textLength: null,
    _objectSelectable: true,
    noScaleCache: true,
    objectCaching: false,
    lockScalingFlip: true,
    cacheProperties: fabric.Text.prototype.cacheProperties.concat(
      "buttonRx",
      "buttonRy",
      "buttonFill",
      "paddingOffset",
      "buttonStrokeColor",
      "buttonStrokeWidth",
      "textShadow",
      "buttonShadow"
    ),
    initialize: function (text, options) {
      options.top ? (options.top = Math.round(options.top)) : null;
      options.left ? (options.left = Math.round(options.left)) : null;
      options.width ? (options.width = Math.round(options.width)) : null;
      options.height ? (options.height = Math.round(options.height)) : null;
      options.fontSize
        ? (options.fontSize = Math.round(options.fontSize))
        : null;
      this.set(options);
      this.set({ text: text });
      this.rectObj = new fabric.Rect({
        top: 0,
        left: 0,
        width: this.width,
        height: this.height,
        fill: this.buttonFill,
        rx: this.buttonRx,
        ry: this.buttonRy,
        stroke: this.buttonStrokeColor,
        strokeWidth: this.buttonStrokeWidth,
        shadow: this.buttonShadow,
        originX: "center",
        originY: "center",
      });
      this.textObj = new fabric.IText(this.text, {
        top: 0,
        left: 0,
        fill: this.color,
        fontSize: Math.round(this.fontSize),
        width: Math.round(this.width),
        stroke: this.stroke,
        strokeWidth: this.strokeWidth,
        shadow: this.textShadow,
        textAlign: this.textAlign,
        backgroundColor: this.backgroundColor,
        fontFamily: this.fontName,
        fontName: this.fontName,
        fontSrc: this.fontSrc,
        opacity: this.textOpacity,
        charSpacing: this.charSpacing,
        lineHeight: this.lineHeight,
        underline: this.underline,
        linethrough: this.linethrough,
        overline: this.overline,
        fontStyle: this.fontStyle,
        fontWeight: this.fontWeight,
        originX: "center",
        originY: "center",
        objectCaching: false,
        clipTo: function (ctx) {
          ctx.rect(
            -this.rectObj.width / 2,
            -this.rectObj.height / 2,
            this.rectObj.width,
            this.rectObj.height
          );
        }.bind(this),
      });
      this.on("rotating", (e) => {
        this._recalcTextPosition();
      });
      this.on("added", function () {
        this.textObj.set({
          height: Math.round(this.textObj.height),
          width: Math.round(this.textObj.width),
        });
        this._objects = [this.rectObj, this.textObj];
        this._recalcTextPosition();
        this.setCoords();
      });
      this.on("mousedblclick", (e) => {
        if (this.selectable) {
          var mGroup = this.calcTransformMatrix(true);
          var mObject = this.textObj.calcTransformMatrix(true);
          var mTotal = fabric.util.multiplyTransformMatrices(mGroup, mObject);
          var matrix = fabric.util.transformPoint({ x: 0, y: 0 }, mTotal);
          this._textTop = this.textObj.top;
          this._textLeft = this.textObj.left;
          this._textAngle = this.angle;
          this._initialWidth = this.getScaledWidth();
          this._initialHeight = this.getScaledHeight();
          this._textLength = this.textObj.text.length;
          this._objects.pop();
          this.textObj.set({
            top: Math.round(matrix.y),
            left: Math.round(matrix.x),
            angle: this._textAngle,
          });
          this.canvas.add(this.textObj);
          this.textObj.selectable = true;
          this.textObj.evented = true;
          this.canvas.setActiveObject(this.textObj);
          this.textObj.enterEditing();
          this._objectSelectable = this.selectable;
          this.selectable = false;
        }
      });
      this.textObj.on("changed", async (e) => {
        await this._textChange();
        let buttonBounds = await this.getBoundingRect();
        let x = buttonBounds.left + buttonBounds.width / 2,
          y = buttonBounds.top + buttonBounds.height / 2;
        this.textObj.set({
          left: Math.round(x),
          top: Math.round(y),
        });
        this.set({ text: this.textObj.text });
        this.textObj.setCoords();
      });
      this.textObj.on("editing:exited", () => {
        this.textObj.top = Math.round(this._textTop);
        this.textObj.left = Math.round(this._textLeft);
        this.textObj.angle = 0;
        this._objects.push(this.textObj);
        this.canvas.remove(this.textObj);
        this.textObj.selectable = false;
        this.textObj.evented = false;
        this.selectable = this._objectSelectable;
        this._textLength = null;
        this._initialWidth = null;
        this._initialHeight = null;
        this._recalcTextPosition();
      });
      this.on("scaled", (e) => {
        this._flag = 0;
      });
      this.on("scaling", (e) => {
        if (e.transform.action == "scale") {
          if (this._flag == 0) {
            // store width of object once while scaling start
            this._width = this.getScaledWidth();
            this._fontSize = Math.round(this.textObj.fontSize);
            this._flag = 1;
          }
          // calculate original scale from current width and width that we store at first time.
          let originalScaleX = this.getScaledWidth() / this._width;
          var newFontSize = parseInt("" + this._fontSize * originalScaleX, 10);
          this.textObj.set({
            fontSize: newFontSize,
          });
          this.fontSize = newFontSize;
        }
        this._recalcTextPosition(true);
      });
      this.on("_TextEditingEnter", (e) => {
        this._initialWidth = this.getScaledWidth();
        this._initialHeight = this.getScaledHeight();
        this._textLength = this.textObj.text.length;
      });
      this.on("_TextChange", (e) => {
        this._textChange();
      });
      this.on("_TextEditingExit", (e) => {
        this._textLength = null;
        this._initialWidth = null;
        this._initialHeight = null;
      });
    },
    setButtonProp: async function (object) {
      if (typeof object === "object") {
        this.set(object);
        var props = this.transformProperty(object);
        this._setObject(props.objectProperty);
        this.rectObj._setObject(props.rectProperty);
        this.textObj._setObject(props.textProperty);
        this.canvas.renderAll();
        this._recalcTextPosition();
      }
      this.setCoords();
      return this;
    },
    _recalcTextPosition: async function (isFromScaling = false) {
      // for textbox Object
      // var minwidth =
      //   this.textObj.dynamicMinWidth +
      //   this.buttonStrokeWidth * 2 +
      //   this.paddingOffset * 2;

      // for IText Object
      var minwidth =
        this.textObj.getScaledWidth() +
        this.buttonStrokeWidth * 2 +
        this.paddingOffset * 2;
      var minheight =
        this.textObj.getScaledHeight() +
        this.buttonStrokeWidth * 2 +
        this.paddingOffset * 2;
      var objectHeight = await this.getScaledHeight();
      var objectWidth = await this.getScaledWidth();

      if (objectWidth <= minwidth) {
        this.width = minwidth + 1;
        this.scaleX = 1;
        if (isFromScaling) {
          this.left = this._lastGoodLeft;
          this.top = this._lastGoodTop;
        }
      }

      if (objectHeight <= minheight) {
        this.height = minheight + 1;
        this.scaleY = 1;
        if (isFromScaling) {
          this.left = this._lastGoodLeft;
          this.top = this._lastGoodTop;
        }
      }

      this.width = Math.round(this.width * this.scaleX);
      this.height = Math.round(this.height * this.scaleY);
      this.scaleY = 1;
      this.scaleX = 1;
      if (isFromScaling) {
        this._lastGoodTop = Math.round(this.top);
        this._lastGoodLeft = Math.round(this.left);
      }

      this.rectObj.set({
        width: this.width,
        height: this.height,
        angle: 0,
      });
      // uncomment for use TextBox object
      // var objScaledWidth = this.getScaledWidth();
      // this.textObj.width =
      //   objScaledWidth - this.buttonStrokeWidth * 2 - this.paddingOffset * 2;

      this.setCoords();
    },
    _recalcButton: function () {
      var textWidth =
        this.textObj.getScaledWidth() +
        this.buttonStrokeWidth * 2 +
        this.paddingOffset * 2;
      var textHeight =
        this.textObj.getScaledHeight() +
        this.buttonStrokeWidth * 2 +
        this.paddingOffset * 2;
      var buttonWidth = this.getScaledWidth();
      var buttonHeight = this.getScaledHeight();
      if (textWidth < buttonWidth && buttonWidth > this._initialWidth) {
        this.width = textWidth + this.paddingOffset * 2;
        this._scaleX = this.scaleX;
        this.scaleX = 1;
        this.rectObj.set({
          width: this.width,
          height: this.height,
          angle: 0,
        });
        this.setCoords();
      }
      if (textHeight < buttonHeight) {
        // if (textHeight < buttonHeight && buttonHeight > this._initialHeight) {
        this.height = textHeight + 1;
        this._scaleY = this.scaleY;
        this.scaleY = 1;
        this.rectObj.set({
          width: this.width,
          height: this.height,
          angle: 0,
        });
        this.setCoords();
      }
    },
    _textChange: async function () {
      if (this.textObj.text.length > this._textLength) {
        this._textLength = this.textObj.text.length;
        await this._recalcTextPosition();
      } else {
        this._textLength = this.textObj.text.length;
        this._recalcButton();
        this._recalcTextPosition();
      }
      await this.set({ text: this.textObj.text });
      await this.textObj.setCoords();
    },
    transformProperty: function (object) {
      var textPropsList = "text color textOpacity fontName fontSrc opacity charSpacing lineHeight fontSize textAlign stroke strokeWidth backgroundColor textShadow paddingOffset underline linethrough overline fontStyle fontWeight".split(
        " "
      );
      var rectPropsList = "width height buttonRx  buttonRy buttonFill  buttonStrokeColor buttonStrokeWidth buttonShadow".split(
        " "
      );

      var objPropsList = "top left width height originX originY angle shadow lockScalingFlip".split(
        " "
      );

      var textReplaceProps = [
        { prop: "textOpacity", replaceProp: "opacity" },
        { prop: "color", replaceProp: "fill" },
        { prop: "textShadow", replaceProp: "shadow" },
        { prop: "fontName", replaceProp: "fontFamily" },
      ];

      var rectReplaceProps = [
        { prop: "buttonFill", replaceProp: "fill" },
        { prop: "buttonRx", replaceProp: "rx" },
        { prop: "buttonRy", replaceProp: "ry" },
        { prop: "buttonStrokeColor", replaceProp: "stroke" },
        { prop: "buttonStrokeWidth", replaceProp: "strokeWidth" },
        { prop: "buttonShadow", replaceProp: "shadow" },
      ];

      var objectProperty = {},
        textProperty = {},
        rectProperty = {};

      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          if (textPropsList.indexOf(key) != -1) {
            var replacement = textReplaceProps.filter((element) => {
              return element.prop == key;
            });
            if (replacement.length > 0) {
              textProperty[replacement[0].replaceProp] = object[key];
            } else {
              textProperty[key] = object[key];
            }
          }
          if (rectPropsList.indexOf(key) != -1) {
            var replacement = rectReplaceProps.filter((element) => {
              return element.prop == key;
            });
            if (replacement.length > 0) {
              rectProperty[replacement[0].replaceProp] = object[key];
            } else {
              rectProperty[key] = object[key];
            }
          }
          if (objPropsList.indexOf(key) != -1) {
            objectProperty[key] = object[key];
          }
        }
      }
      return {
        textProperty: textProperty,
        rectProperty: rectProperty,
        objectProperty: objectProperty,
      };
    },
    toObject: function (propertiesToInclude) {
      // This function is used for serialize this object. (used for create json)
      // not inlclude this.textObj and this.rectObj into json because when object will load from json, init fucntion of this class is called and it will assign this two object textObj and rectObj again.
      var obj = this.callSuper(
        "toObject",
        [
          "objectCaching",
          // "textObj",
          // "rectObj",

          "text",
          "color",
          "fontName",
          "fontSrc",
          "textOpacity",
          "charSpacing",
          "lineHeight",
          "fontSize",
          "textAlign",
          "stroke",
          "strokeWidth",
          "backgroundColor",
          "textShadow",
          "paddingOffset",
          "underline",
          "linethrough",
          "overline",
          "fontStyle",
          "fontWeight",

          "buttonRx",
          "buttonRy",
          "buttonFill",
          "buttonStrokeColor",
          "buttonStrokeWidth",
          "buttonShadow",
        ].concat(propertiesToInclude)
      );
      // delete objects array from json because then object load from json, Init function will call. which will automatically re-assign object and assign _object array.
      delete obj.objects;
      return obj;
    },
  });

  fabric.Button.fromObject = function (object, callback) {
    // This function is used for deserialize json and convert object json into button object again. (called when we call loadFromJson() fucntion on canvas)
    return fabric.Object._fromObject("Button", object, callback, "text");
  };

  fabric.Button.async = true;
})(fabric);
