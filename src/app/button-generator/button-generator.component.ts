import { Component, OnInit } from '@angular/core';
import { FabricService } from '../fabric.service';
import { HelperService } from '../helper.service';
import 'fabric';
import '../fabric_text_button';
import '../fabric_icon_button';
import { defaultFontFamily, fontList, defaultGradientArray } from '../app.constants';
declare const fabric: any;

@Component({
  selector: 'app-button-generator',
  templateUrl: './button-generator.component.html',
  styleUrls: ['./button-generator.component.css']
})
export class ButtonGeneratorComponent implements OnInit {

  isLeftShown: any = true;
  isRightShown: any = true;
  activeButtonBackgroundTab: any = 'tab_1';
  error: any = '';

  canvas: any;
  fontList: any = fontList;
  selected: any;
  props: any = {
    width: 0,
    height: 0,
    activeGradientColor: '#000',
    activeGradientColorIndex: 0,
    gradientPositionIsCenter: true,
    buttonGradientArray: [],
    buttonGradientAngle: 0,
    gradientType: 'linear',
    buttonIconSize: 20,
    buttonIconColors: [],
    buttonStrokeColor: '#000000',
    buttonStrokeWidth: 5,
    buttonFill: '#ffffff',
    buttonRadius: 0,
    font: {},
    fontFamily: defaultFontFamily.fontName,
    fontSize: 18,
    fill: '#000000',
    lineHeight: 1.25,
    charSpacing: 0,
    textAlign: 'left',
    opacity: 1,
    textOpacity: 1,
    shadow: {
      color: '#000000',
      blur: 0,
      offsetX: 0,
      offsetY: 0
    },
    TShadow: {
      color: '#000000',
      blur: 0,
      offsetX: 0,
      offsetY: 0
    },
    text: '',
    isBold: false,
    isItalic: false,
    isUnderLine: false,
    isOverLine: false,
    isStrikeThrough: false
  }
  constructor(public fabricService: FabricService, public helperService: HelperService) { }

  ngOnInit() {
    let that = this;
    this.props.buttonGradientArray = JSON.parse(JSON.stringify(defaultGradientArray));

    this.canvas = new fabric.Canvas('canvas');
    this.canvas.setWidth(1050);
    this.canvas.setHeight(600);
    this.canvas.on({
      'selection:created': (e) => {
        this.selected = e.target;
        this.error = '';
        if (e.target.type == 'button') {
          console.log('e.target', e.target);
          this.getAllTextProps();
          this.getAllButtonProps();
        }
      },
      'selection:cleared': (e) => {
        this.selected = null;
      },
      /* "after:render": () => {
        that.canvas.contextContainer.strokeStyle = "#555";
        that.canvas.forEachObject(function (obj) {
          var bound = obj.getBoundingRect();
          that.canvas.contextContainer.strokeStyle = "red";
          that.canvas.contextContainer.strokeRect(
            bound.left + 0.5,
            bound.top + 0.5,
            bound.width,
            bound.height
          );
        });
      } */
    })

    this.fabricService._loadFont('roboto-regular', '').then(async (result) => {
      let props: any = {
        top: 100,
        left: 100,
        buttonFill: "#0ABCFF",
        width: 110,
        color: '#ffffff',
        fontSize: 20,
        hasRotatingPoint: false
      }
      props.fontName = result.fontName;
      props.fontSrc = result.fontSrc;
      var button = new fabric.Button("Click Me", props)
      this.canvas.add(button);
      this.canvas.setActiveObject(button);
      this.canvas.renderAll.bind(this);

    }, err => {
      console.log("font can't load", err);
    }).catch(err => {
      console.log("font can't load", err);
    })
  }

  openButtonBackgroundTab(tabName) {
    this.activeButtonBackgroundTab = tabName;
  }

  getAllTextProps() {
    let activeObject = this.canvas.getActiveObject().toObject();

    var newFontStyle = activeObject.fontStyle
    newFontStyle == 'italic' ? this.props.isItalic = true : this.props.isItalic = false;
    var newFontWeight = activeObject.fontWeight;
    newFontWeight == 'bold' ? this.props.isBold = true : this.props.isBold = false;

    this.props.isUnderLine = activeObject.underline;
    this.props.isOverLine = activeObject.overline;
    this.props.isStrikeThrough = activeObject.linethrough;
    this.props.fontFamily = activeObject.fontName;
    this._getFontFromFamily(this.props.fontFamily).then(result => {
      this.props.font = result;
    });
    this.props.fontSize = activeObject.fontSize;
    this.props.fill = activeObject.color;
    this.props.backgroundColor = activeObject.backgroundColor || '#ffffff';
    this.props.lineHeight = activeObject.lineHeight;
    this.props.opacity = activeObject.opacity;
    this.props.shadow = activeObject.buttonShadow || {
      color: '#000000',
      blur: 0,
      offsetX: 0,
      offsetY: 0,
      opacity: 0
    };
    this.props.TShadow = this.selected.textShadow || {
      color: '#000000',
      blur: 0,
      offsetX: 0,
      offsetY: 0,
      opacity: 0
    };
    this.props.text = activeObject.text;
    this.props.charSpacing = activeObject.charSpacing;
    this.props.textAlign = activeObject.textAlign;
    this.props.textOpacity = activeObject.textOpacity
  }

  getAllButtonProps() {
    let activeObject = this.canvas.getActiveObject().toObject();

    this.props.buttonStrokeColor = activeObject.buttonStrokeColor;
    this.props.buttonStrokeWidth = activeObject.buttonStrokeWidth;
    this.props.buttonRadius = activeObject.buttonRx;
    this.props.width = activeObject.width;
    this.props.height = activeObject.height;
    let finalButtonFill = activeObject.buttonFill || '#ffffff';
    if (typeof finalButtonFill == 'string') {
      console.log(finalButtonFill);

      this.props.buttonFill = finalButtonFill;
      this.props.buttonGradientArray = [];
      this.props.buttonGradientAngle = 0;
      this.props.gradientType = 'linear';
      this.props.gradientPositionIsCenter = true;
    }
    else {
      this.props.buttonFill = '#ffffff';
      this.props.buttonGradientArray = this.helperService._convertOffsetIntoStopColorArray(finalButtonFill.colorStops);
      this.props.buttonGradientAngle = finalButtonFill.gradientAngle || 0;
      this.props.gradientType = finalButtonFill.type || 'linear';
      typeof finalButtonFill.isGradientInCenter != "undefined" ? this.props.gradientPositionIsCenter = finalButtonFill.isGradientInCenter : this.props.gradientPositionIsCenter = true;
    }

  }

  setActiveColor(data) {
    this.props.activeGradientColor = data.colorObject.color;
    this.props.activeGradientColorIndex = data.index;
  }

  // setProeprties

  changeFontFamily(fontFamily) {
    this._getFontFromFamily(fontFamily).then(result => {
      this.props.font = result;
      if (result != {}) {
        this.fabricService._loadFont(this.props.font.fontName, this.props.font.fontSrc).then(result => {
          this.props.fontFamily = this.props.font.fontName;
          this.selected.setButtonProp({ fontFamily: this.props.fontFamily, fontName: this.props.font.fontName, fontSrc: this.props.font.fontSrc });
        }, err => {
          console.log("font Can't load", err);

        }).catch(err => {
          console.log("font Can't load", err);
        });
      }
    });
  }

  _getFontFromFamily(family): Promise<any> {
    return new Promise(resolve => {
      var font = {};
      this.fontList.forEach(element => {
        if (element.fontName == family) {
          font = element;
        }
      });
      resolve(font || {});
    })
  }

  setButtonSize(prop) {
    this.selected.setButtonProp(prop);
    this.canvas.renderAll();
  }

  setFontSize(fontSize) {
    // math.sign represent that numer is positive or negetive
    if (fontSize && (Math.sign(fontSize) == 1 || Math.sign(fontSize) == 0))
      this.selected.setButtonProp({ fontSize: fontSize });
  }

  toggleStyle(style) {
    switch (style) {
      case 'bold':
        this.props.isBold = !this.props.isBold;
        this.selected.setButtonProp({ fontWeight: this.props.isBold ? 'bold' : 'normal' });
        break;
      case 'italic':
        this.props.isItalic = !this.props.isItalic;
        this.selected.setButtonProp({ fontStyle: this.props.isItalic ? 'italic' : 'normal' });
        break;
      case 'underline':
        this.props.isUnderLine = !this.props.isUnderLine;
        this.selected.setButtonProp({ underline: this.props.isUnderLine });
        break;
      case 'strikethrough':
        this.props.isStrikeThrough = !this.props.isStrikeThrough;
        this.selected.setButtonProp({ linethrough: this.props.isStrikeThrough });
        break;
      case 'overline':
        this.props.isOverLine = !this.props.isOverLine;
        this.selected.setButtonProp({ overline: this.props.isOverLine });
        break;
    }
  }

  toggleAlignment(align) {
    this.props.textAlign = align;
    this.selected.setButtonProp({ textAlign: align });
  }

  setOpacity(opacity, isButtonProperty = false) {
    let property = isButtonProperty == true ? { opacity: opacity } : { textOpacity: opacity }
    this.selected.setButtonProp(property);
  }

  setSpacing(charSpacing) {
    this.selected.setButtonProp({ charSpacing: charSpacing });
  }

  setLineHeight(lineHeight) {
    this.selected.setButtonProp({ lineHeight: lineHeight });
  }

  setFill(fill) {
    this.selected.setButtonProp({ color: fill });
  }

  setBackground(backgroundColor) {
    this.selected.setButtonProp({ backgroundColor: backgroundColor });
  }

  setButtonStrokeColor(color) {
    this.props.buttonStrokeColor = color;
    this.selected.setButtonProp({ buttonStrokeColor: color });
  }

  setButtonStrokeSize(size) {
    this.selected.setButtonProp({ buttonStrokeWidth: size });
  }

  setButtonFill(color) {
    this.props.buttonFill = color;
    this.selected.setButtonProp({ buttonFill: color });
  }

  setButtonGradient(colorArray) {
    colorArray.length <= 0 ? this.props.buttonGradientArray = JSON.parse(JSON.stringify(defaultGradientArray)) : this.props.buttonGradientArray = colorArray;
    var colorStop = this.helperService._convertStopIntoOffsetColorArray(this.props.buttonGradientArray);
    this._setGradientToButton(JSON.parse(JSON.stringify(colorStop)));
  }

  _setGradientToButton(colorStop) {
    let invertangle = (this.props.buttonGradientAngle + 180) > 360 ? (this.props.buttonGradientAngle + 180) - 360 : (this.props.buttonGradientAngle + 180)
    let angle = this.props.buttonGradientAngle;
    let x1, y1, x2, y2;
    let button = { top: this.selected.top, left: this.selected.left, width: this.selected.width, height: this.selected.height };
    let p1 = this.helperService.edgeOfView(button, invertangle)
    let p2 = this.helperService.edgeOfView(button, angle)
    x1 = p1.x; y1 = p1.y
    x2 = p2.x; y2 = p2.y

    var grad;
    if (this.props.gradientType == 'radial') {
      if (this.props.gradientPositionIsCenter == true) {
        x2 = this.selected.width / 2;
        y2 = this.selected.height / 2;
      }
      grad = new fabric.Gradient({
        type: "radial",
        coords: {
          r1: 0,
          r2: this.selected.height,
          x1: x2,
          y1: y2,
          x2: x2,
          y2: y2,
        },
        colorStops: colorStop,
        gradientAngle: this.props.buttonGradientAngle || 0,
        isGradientInCenter: this.props.gradientPositionIsCenter
      });
    }
    else {
      grad = new fabric.Gradient({
        type: "linear",
        coords: {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
        },
        colorStops: colorStop,
        gradientAngle: this.props.buttonGradientAngle || 0
      });
    }
    if (grad) {
      this.selected.setButtonProp({ buttonFill: grad, gradientAngle: this.props.buttonGradientAngle || 0 });
      this.canvas.renderAll();
    }
  }

  changeGradientIndexColor(index, color) {
    this.props.buttonGradientArray.length <= 0 ? this.props.buttonGradientArray = JSON.parse(JSON.stringify(defaultGradientArray)) : null;
    let obj: any = [...this.props.buttonGradientArray];
    // console.log(index, color, obj, this.props.buttonGradientArray);
    obj[index].color = color;
    this.props.buttonGradientArray = obj;
    this.setButtonGradient(this.props.buttonGradientArray);
  }

  setButtonRadius(radius) {
    this.selected.setButtonProp({ buttonRx: radius, buttonRy: radius });
  }

  setShadow(shadow) {
    this.selected.setButtonProp({ buttonShadow: shadow });
  }

  setBTextShadow(shadow) {
    this.selected.setButtonProp({ textShadow: shadow });
  }

  // Download

  downloadImage() {
    if (this.selected) {
      let width = this.selected.width * this.selected.scaleX,
        height = this.selected.height * this.selected.scaleY,
        top = 0,
        left = 0,
        that = this,
        offset = 10;

      if (that.selected.buttonShadow) {
        width += Math.abs(that.selected.buttonShadow.offsetX) + (that.selected.buttonShadow.blur)
        height += Math.abs(that.selected.buttonShadow.offsetY) + (that.selected.buttonShadow.blur)

        if (Math.sign(that.selected.buttonShadow.offsetY) == -1) {
          top = that.selected.buttonShadow.offsetY - that.selected.buttonShadow.blur;
        }
        else if (that.selected.buttonShadow.offsetY < that.selected.buttonShadow.blur / 2) {
          top = -that.selected.buttonShadow.blur;
          height += that.selected.buttonShadow.blur
        }
        if (Math.sign(that.selected.buttonShadow.offsetX) == -1) {
          left = that.selected.buttonShadow.offsetX - that.selected.buttonShadow.blur;
        }
        else if (that.selected.buttonShadow.offsetX < that.selected.buttonShadow.blur / 2) {
          left = -that.selected.buttonShadow.blur;
          width += that.selected.buttonShadow.blur
        }
      }

      this.selected.cloneAsImage(function (obj) {
        that.helperService._download("Button.png", obj.toDataURL());
      }, {
        format: 'png',
        top: top - this.selected.buttonStrokeWidth - offset,
        left: left - this.selected.buttonStrokeWidth - offset,
        width: width + this.selected.buttonStrokeWidth * 2 + offset * 2,
        height: height + this.selected.buttonStrokeWidth * 2 + offset * 2,
        withoutShadow: false
      })
    }
    else {
      this.error = "Please Select Object";
    }
  }

  downloadJson() {
    // console.log(this.selected.toJSON());
    if (this.selected) {
      var obj = {}, json = this.selected.toJSON();
      var propertyToInclude = "text buttonFill buttonRx buttonRy buttonShadow buttonStrokeColor buttonStrokeWidth charSpacing color fill fontName fontSize  fontSrc fontStyle fontWeight height lineHeight linethrough opacity scaleX scaleY stroke textAlign textOpacity textShadow underline width".split(' ');
      obj['type'] = 'textButton';
      for (let key in json) {
        if (json.hasOwnProperty(key) && propertyToInclude.indexOf(key) != -1) {
          obj[key] = json[key];
        }
      }
      var myFile = new Blob([JSON.stringify(obj, null, 2)], { type: 'text/plain' });
      let element = document.createElement('a');
      element.setAttribute('href', URL.createObjectURL(myFile));
      element.setAttribute('download', 'buttonJSON.txt');
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
    else {
      this.error = 'Please Select Object'
    }
  }


}
