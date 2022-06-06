import { Component, OnInit } from '@angular/core';
import { FabricService } from '../fabric.service';
import { HelperService } from '../helper.service';
import 'fabric';
import '../fabric_text_button';
import '../fabric_icon_button';
import JSZip from 'jszip';
import FileSaver from 'file-saver'
import { defaultFontFamily, fontList, defaultGradientArray } from '../app.constants';
declare const fabric: any;

const custom_attribute: any = ['previewName'];

fabric.Object.prototype.toObject = (function (toObject) {
  return function (propertiesToInclude) {
    propertiesToInclude = (propertiesToInclude || []).concat(custom_attribute);
    return toObject.apply(this, [propertiesToInclude]);
  };
})(fabric.Object.prototype.toObject);

@Component({
  selector: 'app-icon-button-generator',
  templateUrl: './icon-button-generator.component.html',
  styleUrls: ['./icon-button-generator.component.css']
})
export class IconButtonGeneratorComponent implements OnInit {
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
    buttonIconColor: '#000',
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

  selectedIconsIndex = [1, 2, 4, 5, 6, 7, 8, 10, 12, 19, 20, 21, 22, 23, 24, 25, 28, 37, 41, 43, 51, 53, 55, 57, 60, 71, 81, 86, 89, 98, 99, 108, 109, 120, 132, 138, 139, 141, 144, 151, 164, 174, 177, 178, 186, 191, 193, 197, 199, 204, 211];

  constructor(public fabricService: FabricService, public helperService: HelperService) { }

  ngOnInit() {
    let that = this;
    this.props.buttonGradientArray = JSON.parse(JSON.stringify(defaultGradientArray));
    console.log(this.props.buttonGradientArray);

    this.canvas = new fabric.Canvas('canvas');
    this.canvas.setWidth(1520);
    this.canvas.setHeight(1520);
    this.canvas.on({
      'selection:created': (e) => {
        console.log('e.target', e.target.toJSON());
        this.selected = e.target;
        this.error = '';
        if (e.target.type == 'iconButton') {
          this.getAllButtonProps();
        }
      },
      'selection:updated': (e) => {
        this.selected = e.target;
        this.error = '';
        if (e.target.type == 'iconButton') {
          this.getAllButtonProps();
        }
      },
      'selection:cleared': (e) => {
        this.selected = null;
      },
    })
    var containerWidth = 1500;
    var buttonMargin = 50;
    var itemWidth = 60 + buttonMargin / 2;
    var itemHeight = 60 + buttonMargin / 2
    var numberOfItemFitIntoRow = Math.floor(containerWidth / itemWidth);

    for (let i = 1; i <= 228; i++) {
      var row = Math.floor(i / numberOfItemFitIntoRow)
      var column = Math.floor(i % numberOfItemFitIntoRow);
      this.generateProps(i, row, column, itemWidth, itemHeight, buttonMargin).then(props => {
        var button = new fabric.IconButton(props.source, props.property);
        this.canvas.add(button);
        this.canvas.renderAll();
      })
    }


  }

  generateProps(i, row, column, itemWidth, itemHeight, buttonMargin): Promise<any> {
    return new Promise(resolve => {
      resolve(
        {
          source: 'assets/ButtonIcons/' + i + '.svg',
          property: {
            top: row * itemHeight + buttonMargin / 2,
            left: column * itemWidth + buttonMargin / 2,
            buttonFill: "#536270",
            buttonRx: 5,
            buttonRy: 5,
            width: 60,
            height: 50,
            iconSize: 20,
            paddingOffset: 5,
            previewName: i,
            /*  iconColorArray: [
               { color: '#fff', indices: [0] }
             ] */
          }
        })
    })
  }

  openButtonBackgroundTab(tabName) {
    this.activeButtonBackgroundTab = tabName;
  }

  getAllButtonProps() {
    let activeObject = this.canvas.getActiveObject().toObject();

    this.props.buttonStrokeColor = activeObject.buttonStrokeColor;
    this.props.buttonStrokeWidth = activeObject.buttonStrokeWidth;
    this.props.buttonRadius = activeObject.buttonRx;
    this.props.width = activeObject.width;
    this.props.height = activeObject.height;
    this.props.opacity = activeObject.opacity;
    this.props.buttonIconSize = activeObject.iconSize;
    this.props.buttonIconColors = activeObject.iconColorArray;
    this.props.shadow = activeObject.buttonShadow || {
      color: '#000000',
      blur: 0,
      offsetX: 0,
      offsetY: 0,
      opacity: 0
    };
    let finalButtonFill = activeObject.buttonFill || '#ffffff';
    if (typeof finalButtonFill == 'string') {
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

  setButtonSize(prop) {
    this.setProperty(prop);
  }


  setOpacity(opacity, isButtonProperty = false) {
    let property = isButtonProperty == true ? { opacity: opacity } : { textOpacity: opacity }
    // this.selected.setButtonProp(property);
    this.setProperty(property);
  }

  setButtonStrokeColor(color) {
    this.props.buttonStrokeColor = color;
    // this.selected.setButtonProp({ buttonStrokeColor: color });
    this.setProperty({ buttonStrokeColor: color });
  }

  setButtonStrokeSize(size) {
    // this.selected.setButtonProp({ buttonStrokeWidth: size });
    this.setProperty({ buttonStrokeWidth: size });
  }

  setButtonFill(color) {
    this.props.buttonFill = color;
    // this.selected.setButtonProp({ buttonFill: color });
    this.setProperty({ buttonFill: color });
  }

  setButtonGradient(colorArray) {
    colorArray.length <= 0 ? this.props.buttonGradientArray = JSON.parse(JSON.stringify(defaultGradientArray)) : this.props.buttonGradientArray = colorArray;
    var colorStop = this.helperService._convertStopIntoOffsetColorArray(this.props.buttonGradientArray);
    this._setGradientToButton(JSON.parse(JSON.stringify(colorStop)));
  }

  _setGradientToButton(colorStop) {
    let invertangle = (this.props.buttonGradientAngle + 180) > 360 ? (this.props.buttonGradientAngle + 180) - 360 : (this.props.buttonGradientAngle + 180)
    let angle = this.props.buttonGradientAngle;
    let x1, y1, x2, y2, button;
    if (this.selected.type == "activeSelection") {
      button = { top: this.selected._objects[0].top, left: this.selected._objects[0].left, width: this.selected._objects[0].width, height: this.selected._objects[0].height };
    } else {
      button = { top: this.selected.top, left: this.selected.left, width: this.selected.width, height: this.selected.height };
    }
    let p1 = this.helperService.edgeOfView(button, invertangle)
    let p2 = this.helperService.edgeOfView(button, angle)
    x1 = p1.x; y1 = p1.y
    x2 = p2.x; y2 = p2.y

    var grad;
    if (this.props.gradientType == 'radial') {
      if (this.props.gradientPositionIsCenter == true) {
        if (this.selected.type == "activeSelection") {
          x2 = this.selected._objects[0].width / 2;
          y2 = this.selected._objects[0].height / 2;
        }
        else {
          x2 = this.selected.width / 2;
          y2 = this.selected.height / 2;
        }
      }
      grad = new fabric.Gradient({
        type: "radial",
        coords: {
          r1: 0,
          r2: this.selected.type == 'activeSelection' ? this.selected._objects[0].height : this.selected.height,
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
      // this.selected.setButtonProp({ buttonFill: grad, gradientAngle: this.props.buttonGradientAngle || 0 });
      this.setProperty({ buttonFill: grad, gradientAngle: this.props.buttonGradientAngle || 0 });
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
    // this.selected.setButtonProp({ buttonRx: radius, buttonRy: radius });
    this.setProperty({ buttonRx: radius, buttonRy: radius });
  }

  setShadow(shadow) {
    // this.selected.setButtonProp({ buttonShadow: shadow });
    this.setProperty({ buttonShadow: shadow });
  }

  setButtonIconFill(colorArray) {
    // this.selected.setButtonProp({ iconColorArray: colorArray });
    this.setProperty({ iconColorArray: colorArray });
  }

  setButtonIconSize(buttonIconSize) {
    // this.selected.setButtonProp({ iconSize: buttonIconSize });
    this.setProperty({ iconSize: buttonIconSize });
  }

  setButtonIconFillForAll() {
    this.canvas.forEachObject(element => {
      if (element.type == 'iconButton') {
        // console.log(element.iconColorArray);
        var arr = element.iconColorArray;
        arr[0].color = this.props.buttonIconColor;
        element.setButtonProp({
          iconColorArray: arr
        })
      }
    })
    this.canvas.renderAll();
  }

  setProperty(prop) {
    if (this.selected.type == 'activeSelection') {
      this.selected._objects.forEach(element => {
        element.setButtonProp(prop);
      });
    }
    else {
      this.selected.setButtonProp(prop);
    }
    this.canvas.renderAll();
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

  makeImage(element): Promise<any> {
    return new Promise(resolve => {
      let width = element.width * element.scaleX,
        height = element.height * element.scaleY,
        top = 0,
        left = 0,
        that = this,
        offset = 10;

      if (element.buttonShadow) {
        width += Math.abs(element.buttonShadow.offsetX) + (element.buttonShadow.blur)
        height += Math.abs(element.buttonShadow.offsetY) + (element.buttonShadow.blur)

        if (Math.sign(element.buttonShadow.offsetY) == -1) {
          top = element.buttonShadow.offsetY - element.buttonShadow.blur;
        }
        else if (element.buttonShadow.offsetY < element.buttonShadow.blur / 2) {
          top = -element.buttonShadow.blur;
          height += element.buttonShadow.blur
        }
        if (Math.sign(element.buttonShadow.offsetX) == -1) {
          left = element.buttonShadow.offsetX - element.buttonShadow.blur;
        }
        else if (element.buttonShadow.offsetX < element.buttonShadow.blur / 2) {
          left = -element.buttonShadow.blur;
          width += element.buttonShadow.blur
        }
      }

      element.cloneAsImage(function (obj) {
        resolve(obj.toDataURL());
      }, {
        format: 'png',
        top: top - element.buttonStrokeWidth - offset,
        left: left - element.buttonStrokeWidth - offset,
        width: width + element.buttonStrokeWidth * 2 + offset * 2,
        height: height + element.buttonStrokeWidth * 2 + offset * 2,
        withoutShadow: false
      })
    })
  }

  async downloadJson() {
    let zip = new JSZip();
    var selectedIconFolder = zip.folder('selected Icons');
    let arr = [], selectedArr = [];
    for (let i = 0, length = this.canvas.toJSON().objects.length; i < length; i++) {
      const object = this.canvas.item(i);
      var obj = {}, json = object.toJSON();
      var propertyToInclude = "buttonFill buttonRx buttonRy buttonShadow buttonStrokeColor buttonStrokeWidth height iconColorArray iconShadow iconSize opacity scaleX scaleY stroke width".split(' ');
      obj['type'] = "iconButton";
      obj['src'] = json['iconSrc'];
      obj['previewImage'] = 'assets/Buttons/iconButton_' + Number(Number(i) + 1) + '.png';
      for (let key in json) {
        if (json.hasOwnProperty(key) && propertyToInclude.indexOf(key) != -1) {
          obj[key] = json[key];
        }
      }
      var folder = zip.folder(json.previewName);
      var jsonObject = new Blob([JSON.stringify(obj, null, 2)], { type: 'text/plain' });
      arr.push(obj);
      folder.file(json.previewName + '.txt', jsonObject);
      await this.makeImage(object).then(async (result) => {
        await folder.file('iconButton_' + json.previewName + ".png", result.split(',')[1], { base64: true })
        if (this.selectedIconsIndex.indexOf(i + 1) != -1) {
          await selectedIconFolder.file('iconButton_' + json.previewName + ".png", result.split(',')[1], { base64: true })
        }
      });
      if (this.selectedIconsIndex.indexOf(i + 1) != -1) {
        selectedArr.push(obj);
      }
    }
    var mainJson = new Blob([JSON.stringify(arr, null, 2)], { type: 'text/plain' });
    var seelctedJSON = new Blob([JSON.stringify(selectedArr, null, 2)], { type: 'text/plain' });
    zip.file('main.txt', mainJson);
    selectedIconFolder.file('selected.txt', seelctedJSON);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      FileSaver.saveAs(content, "Icon Buttons.zip");
    });
  }

}
