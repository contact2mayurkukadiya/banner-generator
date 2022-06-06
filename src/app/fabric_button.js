(function(fabric) {
  "use strict";

  // var fabric = global.fabric || (global.fabric = {});

  fabric.Button = fabric.util.createClass(fabric.Textbox, {
    type: "button",
    stateProperties: fabric.Object.prototype.stateProperties.concat(
      "buttonRx",
      "buttonRy",
      "buttonFill",
      "buttonPadding",
      "buttonStrokeColor",
      "buttonStrokeWidth"
    ),
    buttonRx: 0,
    buttonRy: 0,
    buttonFill: "#ffffff00",
    buttonPadding: 0,
    buttonHeight: 0,
    buttonWidth: 0,
    textAlign: "center",
    buttonStrokeColor: "#000000",
    buttonStrokeWidth: 0,
    _dimensionAffectingProps: fabric.Text.prototype._dimensionAffectingProps.concat(
      "width",
      "fontSize"
    ),
    cacheProperties: fabric.Object.prototype.cacheProperties.concat(
      "buttonRx",
      "buttonRy",
      "buttonFill",
      "buttonPadding",
      "buttonStrokeColor",
      "buttonStrokeWidth"
    ),
    initialize: function(text, options) {
      this.text = text;
      this.callSuper("initialize", text, options);
      this._initRxRy();
    },

    _initRxRy: function() {
      if (this.buttonRx && !this.buttonRy) {
        this.buttonRy = this.buttonRx;
      } else if (this.buttonRy && !this.buttonRx) {
        this.buttonRx = this.buttonRy;
      }
    },
    _render: function(ctx) {
      // 1x1 case (used in spray brush) optimization was removed because
      // with caching and higher zoom level this makes more damage than help
      // this.width = this.width * this.scaleX;
      // this.height = this.height * this.scaleY;
      // (this.scaleX = 1), (this.scaleY = 1);
      var rx = this.buttonRx ? Math.min(this.buttonRx, this.width / 2) : 0,
        ry = this.buttonRy ? Math.min(this.buttonRy, this.height / 2) : 0,
        w = this.width + this.buttonPadding,
        h = this.height + this.buttonPadding,
        x = -this.width / 2 - this.buttonPadding / 2,
        y = -this.height / 2 - this.buttonPadding / 2,
        isRounded = rx !== 0 || ry !== 0,
        /* "magic number" for bezier approximations of arcs (http://itc.ktu.lt/itc354/Riskus354.pdf) */
        k = 1 - 0.5522847498;
      ctx.beginPath();

      ctx.moveTo(x + rx, y);

      ctx.lineTo(x + w - rx, y);
      isRounded &&
        ctx.bezierCurveTo(x + w - k * rx, y, x + w, y + k * ry, x + w, y + ry);

      ctx.lineTo(x + w, y + h - ry);
      isRounded &&
        ctx.bezierCurveTo(
          x + w,
          y + h - k * ry,
          x + w - k * rx,
          y + h,
          x + w - rx,
          y + h
        );

      ctx.lineTo(x + rx, y + h);
      isRounded &&
        ctx.bezierCurveTo(x + k * rx, y + h, x, y + h - k * ry, x, y + h - ry);

      ctx.lineTo(x, y + ry);
      isRounded && ctx.bezierCurveTo(x, y + k * ry, x + k * rx, y, x + rx, y);

      ctx.closePath();
      ctx.save();
      if (this.buttonFill) {
        ctx.fillStyle = this.buttonFill;
        if (this.fillRule === "evenodd") {
          ctx.fill("evenodd");
        } else {
          ctx.fill();
        }
      }
      if (this.buttonStrokeWidth > 0) {
        if (this.strokeUniform) {
          ctx.scale(1 / this.scaleX, 1 / this.scaleY);
        }
        if (this.shadow && !this.shadow.affectStroke) {
          this._removeShadow(ctx);
        }
        if (this.buttonStrokeColor) {
          ctx.lineWidth = this.buttonStrokeWidth;
          ctx.strokeStyle = this.buttonStrokeColor;
          ctx.stroke();
        } else {
          ctx.lineWidth = this.buttonStrokeWidth;
          ctx.stroke();
        }
      }
      ctx.restore();

      this.clearContextTop();
      this._clearCache();
      this.height = this.calcTextHeight();
      this.saveState({ propertySet: "_dimensionAffectingProps" });
      //   this._renderPaintInOrder(ctx);

      this._setTextStyles(ctx);
      this._renderTextLinesBackground(ctx);
      this._renderTextDecoration(ctx, "underline");
      this._renderText(ctx);
      this._renderTextDecoration(ctx, "overline");
      this._renderTextDecoration(ctx, "linethrough");
      this.initDimensions();
      // this.callSuper('render', ctx);
    },
    toObject: function(propertiesToInclude) {
      return this.callSuper(
        "toObject",
        [
          "buttonRx",
          "buttonRy",
          "buttonFill",
          "buttonPadding",
          "buttonStrokeColor",
          "buttonStrokeWidth",
          "objectCaching"
        ].concat(propertiesToInclude)
      );
    }
  });

  fabric.Button.fromObject = function(object, callback) {
    return fabric.Object._fromObject("Button", object, callback, "text");
  };
})(fabric);
