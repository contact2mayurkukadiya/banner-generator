(function (fabric) {
  "use strict";

  fabric.IconButton = fabric.util.createClass(fabric.Group, {
    type: "iconButton",
    stateProperties: fabric.Textbox.prototype.stateProperties.concat(
      "buttonRx",
      "buttonRy",
      "buttonFill",
      "paddingOffset",
      "buttonStrokeWidth",
      "buttonStrokeColor",
      "buttonShadow",
      "iconSrc",
      "iconSize",
      "iconShadow",
      "iconColorArray"
    ),
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    iconObj: null,
    rectObj: null,
    originX: "left",
    originY: "top",
    angle: 0,
    shadow: null,
    lockScalingFlip: true,

    buttonRx: 0,
    buttonRy: 0,
    buttonFill: "#000",
    buttonStrokeColor: "#000000",
    buttonStrokeWidth: 0,
    buttonShadow: null,
    iconData: "",
    iconSrc: "",
    iconSize: 0,
    iconShadow: null,
    iconColorArray: [],
    paddingOffset: 15,

    _flag: 0,
    _width: 0,
    _iconSize: 0,
    _lastGoodLeft: 0,
    _lastGoodTop: 0,
    noScaleCache: true,
    objectCaching: false,
    lockScalingFlip: true,
    cacheProperties: fabric.Text.prototype.cacheProperties.concat(
      "buttonRx",
      "buttonRy",
      "buttonFill",
      "paddingOffset",
      "buttonStrokeWidth",
      "buttonStrokeColor",
      "buttonShadow",
      "iconSrc",
      "iconSize",
      "iconShadow",
      "iconColorArray"
    ),
    initialize: function (src, options) {
      this.set(options);
      this.set({ iconSrc: src });
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

      if (
        typeof this.iconSrc !== "undefined" &&
        this.iconSrc != "" &&
        this.iconSrc.split(".").pop() == "svg"
      ) {
        fabric.loadSVGFromURL(
          this.iconSrc,
          function (objects, options) {
            var icon = fabric.util.groupSVGElements(objects, options);
            icon.set({
              left: 0,
              top: 0,
              shadow: this.iconShadow,
              originX: "center",
              originY: "center",
              objectCaching: false,
              clipTo: function (ctx) {
                try {
                  ctx.rect(
                    -(this.rectObj.width / 2) / icon.scaleX,
                    -(this.rectObj.height / 2) / icon.scaleY,
                    this.rectObj.width / icon.scaleX,
                    this.rectObj.height / icon.scaleY
                  );
                } catch (error) {
                  console.log("error", error);
                }
              }.bind(this),
            });

            // icon.scaleToWidth(Number(this.iconSize));
            if (this._isPortrait(icon.width, icon.height)) {
              icon.scaleToHeight(Number(this.iconSize));
            } else {
              icon.scaleToWidth(Number(this.iconSize));
            }

            this.iconObj = icon;
            this._objects = [this.rectObj, this.iconObj];
            if (this.iconColorArray.length <= 0) {
              this._getAllColorsFromIcon(icon);
            } else {
              this._setAllColorsToIcon(this.iconColorArray);
            }
            this.canvas.renderAll();
          }.bind(this)
        );
      } else {
      }

      this.on("scaled", (e) => {
        this._flag = 0;
      });
      this.on("scaling", (e) => {
        if (e.transform.action == "scale") {
          if (this._flag == 0) {
            // store width of object once while scaling start
            this._width = this.getScaledWidth();
            this._iconSize = this.iconObj.getScaledWidth();
            this._flag = 1;
          }
          // calculate original scale from current width and width that we store at first time.
          let originalScaleX = this.getScaledWidth() / this._width;
          var newWidth = parseInt("" + this._iconSize * originalScaleX, 10);

          // this.iconObj.scaleToHeight(newWidth);
          this.iconObj.scaleToWidth(newWidth);
          /* this.iconObj.set({
            scaleX: (this.iconObj.scaleX).toFixed(2),
            scaleY: (this.iconObj.scaleY).toFixed(2)
          }) */
          this.iconSize = newWidth;
        }

        this._recalcIconPosition(true);
      });
    },
    _isPortrait: function (width, height) {
      return height > width + height / 6;
    },
    _isLandscape: function (width, height) {
      width > height + width / 6;
    },
    _isSquare: function (width, height) {
      return width <= height + width / 6 && height <= width + height / 6;
    },
    _recalcIconPosition: function (isFromScaling = false) {
      var minwidth =
        this.iconObj.getScaledWidth() +
        this.buttonStrokeWidth * 2 +
        this.paddingOffset * 2;
      var minheight =
        this.iconObj.getScaledHeight() +
        this.buttonStrokeWidth * 2 +
        this.paddingOffset * 2;
      var objectHeight = this.getScaledHeight();
      var objectWidth = this.getScaledWidth();

      if (objectWidth <= minwidth) {
        this.width = minwidth + 1;
        this._scaleX = this.scaleX;
        this.scaleX = 1;
        if (isFromScaling) {
          this.left = this._lastGoodLeft;
          this.top = this._lastGoodTop;
        }
      }

      if (objectHeight <= minheight) {
        this.height = minheight + 1;
        this._scaleY = this.scaleY;
        this.scaleY = 1;
        if (isFromScaling) {
          this.left = this._lastGoodLeft;
          this.top = this._lastGoodTop;
        }
      }

      this.width = this.width * this.scaleX;
      this.height = this.height * this.scaleY;
      this._scaleX = this.scaleX;
      this._scaleY = this.scaleY;
      this.scaleY = 1;
      this.scaleX = 1;
      if (isFromScaling) {
        this._lastGoodTop = this.top;
        this._lastGoodLeft = this.left;
      }

      this.rectObj.set({
        width: this.width,
        height: this.height,
        angle: 0,
      });
      this.setCoords();
    },
    transformProperty: function (object) {
      var iconPropsList = "iconSize iconColorArray iconShadow".split(" ");
      var rectPropsList = "width height buttonRx  buttonRy buttonFill  buttonStrokeColor buttonStrokeWidth buttonShadow".split(
        " "
      );

      var objPropsList = "top left width height originX originY angle shadow lockScalingFlip".split(
        " "
      );

      var iconReplaceProps = [{ prop: "iconShadow", replaceProp: "shadow" }];

      var rectReplaceProps = [
        { prop: "buttonFill", replaceProp: "fill" },
        { prop: "buttonRx", replaceProp: "rx" },
        { prop: "buttonRy", replaceProp: "ry" },
        { prop: "buttonStrokeColor", replaceProp: "stroke" },
        { prop: "buttonStrokeWidth", replaceProp: "strokeWidth" },
        { prop: "buttonShadow", replaceProp: "shadow" },
      ];

      var objectProperty = {},
        iconProperty = {},
        rectProperty = {};

      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          if (iconPropsList.indexOf(key) != -1) {
            var replacement = iconReplaceProps.filter((element) => {
              return element.prop == key;
            });
            if (replacement.length > 0) {
              iconProperty[replacement[0].replaceProp] = object[key];
            } else {
              iconProperty[key] = object[key];
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
        iconProperty: iconProperty,
        rectProperty: rectProperty,
        objectProperty: objectProperty,
      };
    },
    setButtonProp: async function (object) {
      if (typeof object === "object") {
        this.set(object);
        var props = this.transformProperty(object);
        this._setObject(props.objectProperty);
        this.rectObj._setObject(props.rectProperty);
        this._setIconProperties(props.iconProperty);
        this.canvas.renderAll();
        this._recalcIconPosition();
      }
      this.setCoords();
      return this;
    },
    _setIconProperties(properties) {
      for (let key in properties) {
        if (properties.hasOwnProperty(key)) {
          switch (key) {
            case "iconSize":
              // this.iconObj.scaleToWidth(properties[key]);
              if (this._isPortrait(this.iconObj.width, this.iconObj.height)) {
                this.iconObj.scaleToHeight(properties[key]);
              } else {
                this.iconObj.scaleToWidth(properties[key]);
              }
              /* this.iconObj.set({
                scaleX: this.iconObj.scaleX.toFixed(2),
                scaleY: this.iconObj.scaleY.toFixed(2),
              }); */
              this.iconSize = properties[key];
              this._recalcIconPosition();
              break;
            case "iconColorArray":
              this._setAllColorsToIcon(properties[key]);
              break;
            case "shadow":
              console.log("icon shadow set");
              this.iconObj.set({
                [key]: properties[key],
              });
              break;
          }
        }
      }
    },
    _getAllColorsFromIcon(icon) {
      if (icon.type == "group") {
        var colorArray = [];
        var tmparray = [];
        var stringConstructor = "test".constructor; // (check if condition of path.fill) string contructor is used for prevent crash of color picker when gradient color detected.
        icon._objects.forEach((path, pathIndex) => {
          colorArray.forEach((elem, i) => {
            tmparray.push(elem.color);
          });
          if (
            path.fill != "" &&
            path.fill != null &&
            tmparray.indexOf(path.fill) == -1 &&
            path.fill.constructor === stringConstructor
          ) {
            colorArray.push({
              color: path.fill,
              indices: [pathIndex],
            });
          } else if (
            tmparray.indexOf(path.fill) != -1 &&
            path.fill.constructor === stringConstructor
          ) {
            colorArray.forEach((colorElem, index) => {
              if (colorElem.color == path.fill) {
                colorElem.indices.push(pathIndex);
              }
            });
          }
        });
        this.iconColorArray = [];
        this.iconColorArray = colorArray;
      } else if (icon.type == "path") {
        this.iconColorArray = [];
        this.iconColorArray.push({
          color: icon.fill,
          indices: [0],
        });
      }
    },
    _setAllColorsToIcon(colorArray) {
      let icon = this.iconObj;
      if (icon.type == "group") {
        colorArray.forEach((color) => {
          color.indices.forEach((pathIndex) => {
            icon._objects[pathIndex].set({ fill: color.color });
          });
        });
        this.iconColorArray = [];
        this.iconColorArray = colorArray;
      } else if (icon.type == "path") {
        icon.fill = colorArray[0].color;
        this.iconColorArray = [];
        this.iconColorArray = colorArray;
        this.canvas.renderAll();
      }
    },
    toObject: function (propertiesToInclude) {
      // This function is used for serialize this object. (used for create json)
      // not inlclude this.iconObj and this.rectObj into json because when object will load from json, init fucntion of this class is called and it will assign this two object textObj and rectObj again.
      var obj = this.callSuper(
        "toObject",
        [
          "objectCaching",

          "buttonRx",
          "buttonRy",
          "buttonFill",
          "buttonStrokeColor",
          "buttonStrokeWidth",
          "buttonShadow",
          "iconSrc",
          "iconSize",
          "iconShadow",
          "iconData",
          "iconColorArray",
        ].concat(propertiesToInclude)
      );
      // delete objects array from json because then object load from json, Init function will call. which will automatically re-assign object and assign _object array.
      delete obj.objects;
      return obj;
    },
  });

  fabric.IconButton.fromObject = function (object, callback) {
    // This function is used for deserialize json and convert object json into button object again. (called when we call loadFromJson() fucntion on canvas)
    return fabric.Object._fromObject("IconButton", object, callback, "iconSrc");
  };

  fabric.IconButton.async = true;
})(fabric);
