import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import $ from "jquery";
import { FabricService } from '../fabric.service';
import { canvasConfig, custom_attribute, fontList, textButtonList, iconButtonList, defaultFontFamily, colorList, gradientList, canvasBorderOffset, defaultBannerSet, defaultGradientArray, isObjectSelectable, designer } from '../app.constants';
import { Router } from '@angular/router';
import { changeDpiDataUrl } from 'changedpi';
import { HelperService } from '../helper.service';
import JSZip from 'jszip';
import FileSaver from 'file-saver'
import { trigger, transition, animate, style } from '@angular/animations';
import 'fabric';
import '../fabric_text_button';
import '../fabric_icon_button';
declare const fabric: any;

fabric.Object.prototype.toObject = (function (toObject) {
  return function (propertiesToInclude) {
    propertiesToInclude = (propertiesToInclude || []).concat(custom_attribute);
    return toObject.apply(this, [propertiesToInclude]);
  };
})(fabric.Object.prototype.toObject);

@Component({
  selector: 'app-generator-experiment',
  templateUrl: './generator-experiment.component.html',
  styleUrls: ['./generator-experiment.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ left: '100%' }),
        animate('500ms cubic-bezier(0.16, 1, 0.3, 1)', style({ left: '0px' })),
      ]),
      transition(':leave', [
        animate('500ms cubic-bezier(0.16, 1, 0.3, 1)', style({ left: '100%' }))
      ])
    ]),
    /* trigger('easeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(100px)' }),
        animate('500ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 1, transform: 'translateY(0px)' })),
      ]),
      transition(':leave', [
        animate('300ms cubic-bezier(0.16, 1, 0.3, 1)', style({ opacity: 0, transform: 'translateY(100px)' }))
      ])
    ]), */
  ]
})
export class GeneratorExperimentComponent implements AfterViewInit {

  @ViewChild('userUploadImage', { static: false }) stickerImageControl: ElementRef;

  loader: any = false;
  isErrorShow: any = false;
  isActionButton: any = false;
  errorTimeOut: any;
  error: any = "";
  isLeftShown: any = true;
  isRightShown: any = true;
  processKeys: any;
  processKeysRef: any;
  selected: any;
  isInputFocus: any = false;

  backdropClick: any = false;
  canvas: any = [];
  isSingleMode: any = false;
  unlockedCanvasIndex: any = null;
  sizes: any;
  bannerSet: any = [];
  layers: any = [];
  maxObjectCanvasId: any = 0;
  activatedLayer: any = {};
  applyFor: any = 'all';
  objPosition: any = 'tl';

  imageList: any = [
    'assets/images/1.jpeg',
    'assets/images/2.jpeg',
    'assets/images/3.jpeg',
    'assets/images/4.jpeg',
    'assets/images/5.jpeg',
    'assets/images/6.jpeg',
    'assets/images/7.jpeg',
    'assets/images/8.jpeg',
    'assets/images/9.jpeg',
    'assets/images/10.jpeg',
    'assets/images/default_background.jpg',
    'assets/images/default_logo.png',
  ];
  textButtonList: any = textButtonList;
  iconButtonList: any = iconButtonList;
  bgImageList: any = this.imageList;
  bgColorList: any = colorList;
  gradientList: any = gradientList
  scaleOption: any = [{
    value: "exactFit",
    display_value: "Exact Fit"
  }, {
    value: "maintainAspect",
    display_value: "Maintain Aspect"
  }, {
    value: "noScale",
    display_value: "No Scale"
  }, {
    value: "scaleCrop",
    display_value: "Scale Crop"
  }];
  isBackgorundImage: any = false;
  isReplaceMode: any = false;


  fontList: any = fontList;
  props: any = {
    canvasGradientArray: [],
    gradientAngle: 0,
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
    flipX: false,
    flipY: false,
    font: {},
    fontFamily: defaultFontFamily.fontName,
    fontSize: 18,
    fill: '#000000',
    canvasFill: '#ffffff',
    canvasBackgroundImage: '',
    // backgroundMode = ['scaleCrop', 'exactFit', 'maintainAspect', 'noScale']
    scaleMode: 'scaleCrop',
    backgroundColor: '#000000',
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

  // panel show hide variables
  activeTab: any = 'tab_1';
  activeBackgroundTab: any = 'tab_1';
  activeButtonTab: any = 'tab_1';
  activeButtonBackgroundTab: any = 'tab_1';
  propertyPanel: any = false;

  textEditor: any = false;
  buttonEditor: any = false;
  iconButtonEditor: any = false;
  imageEditor: any = false;
  // imageView: any = false;
  // buttonView: any = false;
  // bgColorView: any = false;
  // bgImageView: any = false;
  // bgScaleModeView: any = false;


  constructor(public fabricService: FabricService, public helperService: HelperService, public router: Router) {
    this.showLoader();
    // Initialize readymade gradient for canvas background
    /* var arr = [];
    this.tmpgdArr.forEach(element => {
      var obj = {};
      if (element.TYPE == 'linear') {
        var tmpArr = [];
        element.COLORARRAY.forEach(colorElem => {
          tmpArr.push({ color: colorElem.color, stop: colorElem.offset })
        });
        obj['cssColor'] = element.CSSCOLOR;
        obj['colorArray'] = tmpArr;
        obj['angle'] = this.getDegree(element.COORDS);
        obj['type'] = element.TYPE
        arr.push(obj);
      }
      else if (element.TYPE == 'radial') {
        var tmpArr = [];
        element.COLORARRAY.forEach(colorElem => {
          tmpArr.push({ color: colorElem.color, stop: colorElem.offset })
        });
        obj['cssColor'] = element.CSSCOLOR;
        obj['colorArray'] = tmpArr;
        let degree = this.getDegree(element.COORDS)
        obj['angle'] = degree != null ? degree : 0;
        degree == null ? obj['gradientPositionIsCenter'] = true : obj['gradientPositionIsCenter'] = false
        obj['type'] = element.TYPE
 
        arr.push(obj);
      }
    });
 
    console.log(JSON.stringify(arr)); */

    var list = localStorage.getItem('sizelist');
    if (list) {
      var bannerSetArray = [];
      defaultBannerSet.forEach((json, index) => {
        bannerSetArray.push(json.sizeType);
      });
      this.sizes = JSON.parse(list);
      this.sizes.forEach(element => {
        if (bannerSetArray.indexOf(element.sizeType) != -1) {
          var elem = defaultBannerSet[bannerSetArray.indexOf(element.sizeType)];
          elem['locked'] = true;
          this.bannerSet.push(elem);
        }
        else {
          element['locked'] = true;
          this.bannerSet.push(element);
        }
      });
    }
    else {
      this.router.navigate(['']);
    }

    this.processKeys = function (e) {
      let movementDelta = 5;
      console.log('process key');
      this.checkForInputFocus().then(isInputFocus => {
        if (this.selected) {
          if ((e.keyCode === 8 || e.keyCode === 46) && isInputFocus != true && !(this.selected.type == 'textbox' && this.selected.isEditing)) {
            // delete || backspace;
            e.preventDefault();
            this.removeSelected();
          }
          else if (e.keyCode === 27) {
            // esc
            e.preventDefault();
            this.cleanSelect();
          }
          else if (e.keyCode === 38 && isInputFocus != true && !(this.selected.type == 'textbox' && this.selected.isEditing)) {
            // Up Arrow
            e.preventDefault();
            this.selected.top -= movementDelta
            this.selected.setCoords();
            this.canvas[this.unlockedCanvasIndex].renderAll();
          }
          else if (e.keyCode === 40 && isInputFocus != true && !(this.selected.type == 'textbox' && this.selected.isEditing)) {
            // down arrow
            e.preventDefault();
            this.selected.top += movementDelta
            this.selected.setCoords();
            this.canvas[this.unlockedCanvasIndex].renderAll();
          }
          else if (e.keyCode === 37 && isInputFocus != true && !(this.selected.type == 'textbox' && this.selected.isEditing)) {
            // Left arrow
            e.preventDefault();
            this.selected.left -= movementDelta
            this.selected.setCoords();
            this.canvas[this.unlockedCanvasIndex].renderAll();
          }
          else if (e.keyCode === 39 && isInputFocus != true && !(this.selected.type == 'textbox' && this.selected.isEditing)) {
            // Right Arrow
            e.preventDefault();
            this.selected.left += movementDelta
            this.selected.setCoords();
            this.canvas[this.unlockedCanvasIndex].renderAll();
          }
        }
      })
    }
  }

  /*  getDegree(point) {
     var degree = 0;
     switch (point) {
       case 'tl':
         degree = 315;
         break;
       case 'tm':
         degree = 270;
         break;
       case 'tr':
         degree = 225; break;
       case 'ml':
         degree = 0;
         break;
       case 'mm':
         degree = null;
         break;
       case 'mr':
         degree = 180;
         break;
       case 'bl':
         degree = 45;
         break;
       case 'bm':
         degree = 90;
         break;
       case 'br':
         degree = 135;
         break;
     }
     return degree;
   } */

  ngAfterViewInit() {
    // this.createCanvas().then(canvasResult => {
    //   this.renderStackObjects()
    // });
    this.fabricService.generateIdList(this.bannerSet).then(idList => {
      this.bannerSet.forEach((element, index) => {
        if (designer == true) {
          this.fabricService.generateCanvas({ width: element.width, height: element.height, sizeType: element.sizeType, index: index }).then(newCanvas => {
            this.addCanvasListener(newCanvas);
            this.canvas.push(newCanvas);
            this.hideLoader();
          })
        } else {
          if (element.hasOwnProperty('sample_image')) {
            this.fabricService.generateCanvas({ width: element.width, height: element.height, sizeType: element.sizeType, index: index }).then(newCanvas => {
              this.addCanvasListener(newCanvas);
              this.canvas.push(newCanvas);
              this.fabricService.renderBackground(newCanvas, element.background_json).then(result => {
                this.getBackgroundType().then(result => {
                  this.fabricService.renderStickers(newCanvas, element.sticker_json, idList).then(result => {
                    this.fabricService.renderText(newCanvas, element.text_json, idList).then(result => {
                      this.fabricService.renderButton(newCanvas, element.button_json, idList).then(result => {
                        this.renderStackObjects();
                        this.hideLoader();
                      })
                    });
                  })
                });
              })
            })
          }
          else {
            this.fabricService.generateCanvas({ width: element.width, height: element.height, sizeType: element.sizeType, index: index }).then(newCanvas => {
              this.addCanvasListener(newCanvas);
              this.canvas.push(newCanvas);
              this.hideLoader();
            })
          }
        }
      });
    })
  }

  // Utility Functions

  checkForInputFocus(): Promise<any> {
    return new Promise(resolve => {
      let isInputFocus = false;
      $("textarea,input[type='text']").each(function () {
        var element = $(this);
        if (element.is(':focus')) {
          isInputFocus = true;
        }
      });
      resolve(isInputFocus);
    })
  }

  toggleBar(type) {
    switch (type) {
      case 'left':
        this.isLeftShown = !this.isLeftShown;
        break;
      case 'right':
        this.isRightShown = !this.isRightShown;
        break;
    }
  }

  activeLeftTab(tabName) {
    this.activeTab = tabName
    if (!this.isLeftShown) {
      this.toggleBar('left');
    }
  }

  openBackgroundTab(tabName) {
    this.activeBackgroundTab = tabName;
  }

  openButtonTab(tabName) {
    this.activeButtonTab = tabName;
  }

  openButtonBackgroundTab(tabName) {
    this.activeButtonBackgroundTab = tabName;
  }

  enterReplaceMode() {
    this.isReplaceMode = true;
    this.propertyPanel = false;
    this.activeLeftTab('tab_2');
  }

  exitFromReplaceMode() {
    this.isReplaceMode = false;
    this.imageEditor = true;
    this.propertyPanel = true;
  }

  showError(message, timeout: any = 3000, isActionButton: any = false) {
    this.isErrorShow = false;
    this.error = message;
    this.isActionButton = isActionButton;
    this.isErrorShow = true;
    if (this.errorTimeOut) clearTimeout(this.errorTimeOut);
    this.errorTimeOut = setTimeout(() => {
      this.isErrorShow = false;
      setTimeout(() => {
        this.error = "";
      }, 500);
    }, timeout);
  }

  hideError() {
    if (this.errorTimeOut) clearTimeout(this.errorTimeOut);
    this.isErrorShow = false;
    this.isActionButton = false;
    setTimeout(() => {
      this.error = "";
    }, 500);
  }

  dismissLoader() {
    this.loader = false;
    this.backdropClick = false;
  }

  showLoader(backdropClick = false) {
    this.loader = true;
    this.backdropClick = backdropClick;
  }

  hideLoader(backdropClick = false) {
    this.loader = false;
    this.backdropClick = backdropClick;
  }

  copyValue(value) {
    const el = document.createElement('textarea');
    el.value = value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Copied...');
  }

  unlockSingleCanvas(clickedIndex) {
    this.canvas.forEach((element, index) => {
      if (element.locked == false && clickedIndex != index) {
        this.bannerSet[index].locked = true
        element.set({
          locked: true
        })
        element.forEachObject(object => {
          object.set({
            selectable: false
          })
        })
      }
    });
    this.canvas[clickedIndex].set({
      locked: false
    })
    this.canvas[clickedIndex].forEachObject(object => {
      object.set({
        selectable: true
      })
    })
    this.isSingleMode = true;
    this.isRightShown = false;
    this.processKeysRef = this.processKeys.bind(this)
    document.addEventListener("keydown", this.processKeysRef, false);
    this.unlockedCanvasIndex = clickedIndex;
    this.bannerSet[clickedIndex].locked = false;
    this.deselectObject();
    this.getBackgroundType();
  }

  exitSingleMode(clickedIndex) {
    var activeObject = this.canvas[clickedIndex].getActiveObject();
    activeObject && (activeObject.type != "iconButton" || activeObject.toObject().type != "iconButton") && activeObject.exitEditing ? this.canvas[clickedIndex].getActiveObject().exitEditing() : null;
    this.canvas[clickedIndex].set({
      locked: true
    })
    this.canvas[clickedIndex].forEachObject(object => {
      object.set({
        selectable: false,
      })
    })
    this.canvas[clickedIndex].discardActiveObject().renderAll();
    document.removeEventListener("keydown", this.processKeysRef, false);
    this.renderStackObjects();
    this.isSingleMode = false;
    this.isRightShown = true;
    this.unlockedCanvasIndex = null;
    this.bannerSet[clickedIndex].locked = true;
    this.deselectObject();
    this.getBackgroundType();
  }

  addCanvasListener(canvas) {
    canvas.on({
      "selection:created": (e) => {
        this.selected = e.target;
        this.getPropertyPanelValue({ contentType: this.selected.contentType, id: this.selected.id });
      },
      'selection:updated': (e) => {
        this.selected = e.target;
        this.getPropertyPanelValue({ contentType: this.selected.contentType, id: this.selected.id });
      },
      'selection:cleared': (e) => {
        this.selected = null;
        this.deselectObject();
      }
    })
  }

  renderStackObjects() {
    this.fabricService.getAllLayer(this.canvas).then(result => {
      this.maxObjectCanvasId = result;
      var objects = this.canvas[this.maxObjectCanvasId].toJSON().objects;
      this.layers = [];
      objects.forEach(element => {
        switch (element.type) {
          case 'textbox':
            this.layers.push({ type: 'Text', contentType: element.contentType, text: element.text, id: element.id })
            break;
          case 'image':
            this.layers.push({ type: 'Image', src: element.src, contentType: element.contentType, id: element.id })
            break;
          case 'button':
            this.layers.push({ type: 'Button', contentType: element.contentType, text: element.text, id: element.id })
            break;
          case 'iconButton':
            this.layers.push({ type: 'IconButton', contentType: element.contentType, src: element.iconSrc, id: element.id })
            break;
        }
      });
    });
  }

  selectLayer(layer: any = {}) {
    this.activatedLayer = layer
    this.getPropertyPanelValue(layer);
  }

  getPropertyPanelValue(layer) {
    this.resetAllEditor();
    switch (layer.contentType) {
      case 1:
        // textbox
        this.propertyPanel = true;
        this.textEditor = true;
        this.getAllTextProperties(layer.id)
        break;
      case 2:
        // image
        this.propertyPanel = true;
        this.imageEditor = true;
        this.getAllImageProperties(layer.id)
        break;
      case 5:
        // Button
        this.propertyPanel = true;
        this.buttonEditor = true;
        this.getAllTextProperties(layer.id, true);
        this.getAllButtonProperties(layer.id);
        this.getAllButtonTextProperties(layer.id);
        break;
      case 6:
        // Button
        this.propertyPanel = true;
        this.iconButtonEditor = true;
        this.getAllButtonProperties(layer.id);
        this.getAllButtonIconProperties(layer.id);
        break;
    }
  }

  getFinalValue(arr) {
    var counts = {};
    var compare = 0;
    var mostFrequent;
    for (var i = 0, len = arr.length; i < len; i++) {
      var word = arr[i];

      if (counts[word] === undefined) {
        counts[word] = 1;
      } else {
        counts[word] = counts[word] + 1;
      }
      if (counts[word] > compare) {
        compare = counts[word];
        mostFrequent = arr[i];
      }
    }
    return mostFrequent;
  }

  deselectObject() {
    this.activatedLayer = {};
    this.resetAllEditor();
    this.getCanvasFill();
  }

  deleteLayer(layer) {
    if (layer.id == this.activatedLayer.id) {
      // reset panels if selected layer is delete.
      this.deselectObject();
    }
    if (this.isSingleMode == true) {
      let canvas = this.canvas[this.unlockedCanvasIndex]
      let object = canvas.getActiveObject() || this.canvas[this.unlockedCanvasIndex].getItemByName('id', layer.id);
      canvas.remove(object).renderAll();
    }
    else {
      this.canvas.forEach(element => {
        element.remove(element.getItemByName('id', layer.id)).renderAll();
      });
    }

    this.renderStackObjects();
  }

  removeSelected() {
    let canvas = this.canvas[this.unlockedCanvasIndex];
    let object = canvas.getActiveObject();
    if (object) {
      canvas.remove(canvas.getActiveObject());
    }
  }

  cleanSelect() {
    let canvas = this.canvas[this.unlockedCanvasIndex];
    let activeObject = canvas.getActiveObject();
    activeObject && (activeObject.type != "iconButton" || activeObject.toObject().type != "iconButton") && activeObject.exitEditing ? canvas.getActiveObject().exitEditing() : null;
    canvas.discardActiveObject().renderAll()
  }

  closePropertyPanel() {
    this.propertyPanel = false;
    this.deselectObject();
  }

  resetAllEditor() {

    this.propertyPanel = false;
    this.textEditor = false;
    this.buttonEditor = false;
    this.iconButtonEditor = false;
    this.imageEditor = false;
    this.isReplaceMode = false;
  }

  getLayer(id): Promise<any> {
    return new Promise(resolve => {
      var layer = null;
      for (let i = 0, length = this.layers.length; i < length; i++) {
        if (this.layers[i].id == id) {
          layer = this.layers[i]
          i = length;
        }
      }
      resolve(layer);
    })
  }
  // Get Element's Properties

  async getAllTextProperties(id, isButton = false) {
    let defaultShadow = { color: '#000000', blur: 0, offsetX: 0, offsetY: 0, opacity: 0 }
    if (this.isSingleMode == true) {
      let object = this.canvas[this.unlockedCanvasIndex].getActiveObject().toJSON();
      let newFontStyle = object.fontStyle;
      newFontStyle == 'italic' ? this.props.isItalic = true : this.props.isItalic = false;
      var newFontWeight = object.fontWeight;
      newFontWeight == 'bold' ? this.props.isBold = true : this.props.isBold = false;

      this.props.isUnderLine = object.underline;
      this.props.isOverLine = object.overline;
      this.props.isStrikeThrough = object.linethrough;
      this.props.fontSize = object.fontSize;
      this.props.lineHeight = object.lineHeight;
      this.props.opacity = object.opacity;
      this.props.text = object.text;
      this.props.charSpacing = object.charSpacing;
      this.props.textAlign = object.textAlign;
      isButton ? this.props.fontFamily = object.fontName : this.props.fontFamily = object.fontFamily
      isButton ? this.props.fill = object.color : this.props.fill = object.fill;
      isButton ? this.props.backgroundColor = object.backgroundColor || '#ffffff' : this.props.backgroundColor = object.textBackgroundColor || '#ffffff';
      isButton ? object.buttonShadow || defaultShadow : this.props.shadow = object.shadow || defaultShadow;
      isButton ? this.props.textOpacity = object.textOpacity : null;
    }
    else {
      var textOpacity = [], backgroundColor = [], fontSize = [], fontStyle = [], fontFamily = [], fill = [], lineHeight = [], opacity = [], shadow = [], text = [], textAlign = [], charSpacing = [], fontWeight = [], underline = [], overline = [], strikeThrough = [];
      for (let i = 0; i < this.canvas.length; i++) {
        const element = this.canvas[i], object = element.getItemByName('id', id);
        if (object) {
          fontSize.push(object.fontSize);
          fontStyle.push(object.fontStyle);
          fontWeight.push(object.fontWeight);
          underline.push(object.underline);
          overline.push(object.overline);
          strikeThrough.push(object.linethrough);
          if (isButton) {
            textOpacity.push(object.textOpacity);
            fontFamily.push(object.fontName);
            backgroundColor.push(object.backgroundColor);
            shadow.push(object.buttonShadow || defaultShadow);
            fill.push(object.color);
          }
          else {
            fontFamily.push(object.fontFamily);
            backgroundColor.push(object.textBackgroundColor);
            shadow.push(object.shadow || defaultShadow);
            fill.push(object.fill);
          }
          this._getFontFromFamily(fontFamily).then(result => {
            this.props.font = result;
          });
          lineHeight.push(object.lineHeight);
          opacity.push(object.opacity);
          text.push(object.text);
          textAlign.push(object.textAlign);
          charSpacing.push(object.charSpacing);
        }
      }
      var newFontStyle = this.getFinalValue(fontStyle)
      newFontStyle == 'italic' ? this.props.isItalic = true : this.props.isItalic = false;
      var newFontWeight = this.getFinalValue(fontWeight);
      newFontWeight == 'bold' ? this.props.isBold = true : this.props.isBold = false;

      this.props.isUnderLine = this.getFinalValue(underline);
      this.props.isOverLine = this.getFinalValue(overline);
      this.props.isStrikeThrough = this.getFinalValue(strikeThrough);
      this.props.fontFamily = this.getFinalValue(fontFamily)
      this.props.fontSize = this.getFinalValue(fontSize)
      this.props.fill = this.getFinalValue(fill)
      this.props.backgroundColor = this.getFinalValue(backgroundColor) || '#ffffff';
      this.props.lineHeight = this.getFinalValue(lineHeight)
      this.props.opacity = this.getFinalValue(opacity)
      this.props.shadow = this.getFinalValue(shadow);
      this.props.text = this.getFinalValue(text);
      this.props.charSpacing = this.getFinalValue(charSpacing);
      this.props.textAlign = this.getFinalValue(textAlign);
      isButton ? this.props.textOpacity = this.getFinalValue(textOpacity) : null;
    }
  }

  async getAllImageProperties(id) {
    if (this.isSingleMode == true) {
      const canvas = this.canvas[this.unlockedCanvasIndex], object = canvas.getActiveObject().toJSON();
      this.props.opacity = object.opacity;
    }
    else {
      var opacity = [];
      for (let i = 0; i < this.canvas.length; i++) {
        const element = this.canvas[i];
        const object = element.getItemByName('id', id);
        if (object) {
          opacity.push(object.opacity);
        }
      }
      this.props.opacity = this.getFinalValue(opacity)
    }
  }

  async getAllButtonProperties(id) {
    let finalButtonFill;
    if (this.isSingleMode == true) {
      const canvas = this.canvas[this.unlockedCanvasIndex], object = canvas.getActiveObject().toJSON();
      this.props.buttonStrokeColor = object.buttonStrokeColor;
      this.props.buttonStrokeWidth = object.buttonStrokeWidth;
      this.props.buttonRadius = object.buttonRx;
      finalButtonFill = object.buttonFill || '#ffffff';
    }
    else {
      var borderColor = [], borderSize = [], buttonFill = [], borderRadius = [];
      for (let i = 0; i < this.canvas.length; i++) {
        const element = this.canvas[i], object = element.getItemByName('id', id);
        if (object) {
          borderColor.push(object.buttonStrokeColor);
          borderSize.push(object.buttonStrokeWidth);
          buttonFill.push(object.buttonFill);
          borderRadius.push(object.buttonRx);
        }
      }
      this.props.buttonStrokeColor = this.getFinalValue(borderColor);
      this.props.buttonStrokeWidth = this.getFinalValue(borderSize);
      this.props.buttonRadius = this.getFinalValue(borderRadius);
      finalButtonFill = this.getFinalValue(buttonFill) || '#ffffff';
    }
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

  async getAllButtonTextProperties(id) {
    let defaultShadow = { color: '#000000', blur: 0, offsetX: 0, offsetY: 0, opacity: 0 };
    if (this.isSingleMode == true) {
      const canvas = this.canvas[this.unlockedCanvasIndex], object = canvas.getActiveObject().toJSON();
      this.props.TShadow = object.textShadow || defaultShadow;
    }
    else {
      var textShadow = [];
      for (let i = 0; i < this.canvas.length; i++) {
        const element = this.canvas[i], object = element.getItemByName('id', id);
        if (object) {
          textShadow.push(object.textShadow || defaultShadow);
        }
      }
      this.props.TShadow = this.getFinalValue(textShadow);
    }
  }

  async getAllButtonIconProperties(id) {
    if (this.isSingleMode == true) {
      const element = this.canvas[this.unlockedCanvasIndex], object = element.getActiveObject().toJSON();
      this.props.buttonIconSize = object.iconSize;
      this.props.buttonIconColors = object.iconColorArray;
    }
    else {
      var iconSize = [], iconColors = [];
      for (let i = 0; i < this.canvas.length; i++) {
        const element = this.canvas[i], object = element.getItemByName('id', id);
        if (object) {
          iconSize.push(object.iconSize);
          iconColors.push(object.iconColorArray);
        }
      }
      this.props.buttonIconSize = this.getFinalValue(iconSize);
      this.props.buttonIconColors = this.getFinalValue(iconColors);
    }
  }

  async getBackgroundType(): Promise<any> {
    return new Promise(resolve => {
      if (this.isSingleMode == true) {
        const element = this.canvas[this.unlockedCanvasIndex];
        element.backgroundImage ? this.isBackgorundImage = true : this.isBackgorundImage = false;
        resolve();
      }
      else {
        var background = [];
        for (let i = 0; i < this.canvas.length; i++) {
          const element = this.canvas[i];
          element.backgroundImage ? background.push(true) : background.push(false);
        }
        this.isBackgorundImage = this.getFinalValue(background);
        resolve();
      }
    })
  }

  async getCanvasFill(): Promise<any> {
    let finalCanvasFill;
    if (this.isSingleMode == true) {
      console.log(this.canvas[this.unlockedCanvasIndex]);
      finalCanvasFill = this.canvas[this.unlockedCanvasIndex].backgroundColor || '#ffffff';
    }
    else {
      var canvasFill = [];
      for (let i = 0; i < this.canvas.length; i++) {
        const element = this.canvas[i];
        canvasFill.push(element.backgroundColor);
      }
      finalCanvasFill = this.getFinalValue(canvasFill) || '#ffffff';
    }
    if (typeof finalCanvasFill == 'string') {
      this.props.canvasFill = finalCanvasFill;
      this.props.canvasGradientArray = [];
      this.props.gradientAngle = 0;
      this.props.gradientType = 'linear';
      this.props.gradientPositionIsCenter = true;
    }
    else {
      this.props.canvasFill = '#ffffff';
      this.props.canvasGradientArray = this.helperService._convertOffsetIntoStopColorArray(finalCanvasFill.colorStops);
      this.props.gradientAngle = finalCanvasFill.gradientAngle || 0;
      this.props.gradientType = finalCanvasFill.type || 'linear';
      typeof finalCanvasFill.isGradientInCenter != "undefined" ? this.props.gradientPositionIsCenter = finalCanvasFill.isGradientInCenter : this.props.gradientPositionIsCenter = true;
    }
  }

  // Add Elements

  async addButton(props) {
    props.selectable = this.isSingleMode;
    props.id = this.fabricService.generateRandomNumber();
    if (props.type == 'textButton')
      props.contentType = 5;
    else if (props.type == 'iconButton')
      props.contentType = 6;

    if (this.isSingleMode == true) {
      this.fabricService.addDefaultButton(this.canvas[this.unlockedCanvasIndex], props).then(result => {
        this.renderStackObjects();
      })
    }
    else {
      var promiseList = [];
      this.canvas.forEach(element => {
        promiseList.push(this.fabricService.addDefaultButton(element, props))
      });

      await Promise.all(promiseList).then(result => {
        this.renderStackObjects();
      });
    }
  }

  async addHeading(fontSize) {
    var props = {
      text: "Your headline goes here.",
      fontSize: fontSize,
      width: 150,
      top: 5,
      left: 5,
      fill: '#000000',
      textAlign: "center",
      fontFamily: defaultFontFamily.fontName,
      fontName: defaultFontFamily.fontName,
      fontSrc: defaultFontFamily.fontSrc,
      shadow: {
        color: '#ff0000',
        blur: 0,
        offsetX: 0,
        offsetY: 0,
        opacity: 0
      },
      selectable: this.isSingleMode ? this.isSingleMode : isObjectSelectable,
      contentType: 1,
      id: this.fabricService.generateRandomNumber()
    }
    if (this.isSingleMode == true) {
      this.fabricService.addDefaultText(this.canvas[this.unlockedCanvasIndex], props).then(result => {
        this.renderStackObjects();
      })
    }
    else {
      var promiseList = [];
      this.canvas.forEach(element => {
        promiseList.push(this.fabricService.addDefaultText(element, props))
      });

      await Promise.all(promiseList).then(result => {
        this.renderStackObjects();
      });
    }
  }

  addImage(image): Promise<any> {
    return new Promise(async (resolve) => {
      var props = {
        src: image,
        id: this.fabricService.generateRandomNumber(),
        contentType: 2,
        // selectable: this.isSingleMode
        selectable: this.isSingleMode ? this.isSingleMode : isObjectSelectable,
      };
      if (this.isSingleMode == true) {
        if (this.canvas[this.unlockedCanvasIndex].getObjects('image').length >= 1) {
          this.showError('You are eligible for add only one image in card. You can replace It.', 6000, true);
          resolve();
        }
        else {
          this.fabricService.addDefaultImage(this.canvas[this.unlockedCanvasIndex], props).then(result => {
            this.renderStackObjects();
            resolve();
          });
        }
      }
      else {
        let promiseList = [];
        this.canvas.forEach(element => {
          if (element.getObjects('image').length >= 1) {
            this.showError('You are eligible for add only one image in card. You can replace It.', 6000, true);
          }
          else {
            promiseList.push(this.fabricService.addDefaultImage(element, props));
          }
        });
        await Promise.all(promiseList).then(result => {
          this.renderStackObjects();
          resolve();
        })
      }
    })
  }

  addImgFromUser(e) {
    var file = e.target.files[0];
    var that = this;
    var reader = new FileReader();
    reader.onload = async function (f: any) {
      var data = f.target.result;
      that.addImage(data).then(result => {
        that.stickerImageControl.nativeElement.value = null;
      });
    };
    reader.readAsDataURL(file);
  }

  // Set Element's Properties

  setProperty(canvasArray, objectId, property, isButtonProperty: any = false): Promise<any> {
    return new Promise((resolve, reject) => {
      var promises = [];
      if (this.isSingleMode == true && this.unlockedCanvasIndex != null) {
        // objectId is  always null or undefined when single mode activated, so we assign it
        objectId = canvasArray[this.unlockedCanvasIndex].getActiveObject().toJSON().id;
        var objectPromise = this.fabricService.setPropertyToObject(canvasArray[this.unlockedCanvasIndex], objectId, property, isButtonProperty);
        promises.push(objectPromise);
      }
      else {
        canvasArray.forEach((canvas, index) => {
          var objectPromise = this.fabricService.setPropertyToObject(canvas, objectId, property, isButtonProperty);
          promises.push(objectPromise);
        });
      }

      Promise.all(promises).then(result => {
        resolve(canvasArray);
      });
    })
  }

  async replaceImage(image) {
    if (this.isReplaceMode) {
      if (this.isSingleMode == true) {
        this.replaceImageSrc(this.canvas[this.unlockedCanvasIndex], image).then(result => {
          this.renderStackObjects();
        })
      }
      else {
        var promises = [];
        this.canvas.forEach(element => {
          var pro = this.replaceImageSrc(element, image);
          promises.push(pro);
        });
        await Promise.all(promises).then(result => {
          this.renderStackObjects();
        })
      }
    }
  }

  replaceImageFromUser(e) {
    var file = e.target.files[0];
    var that = this;
    var reader = new FileReader();
    reader.onload = async function (f: any) {
      var data = f.target.result;
      if (that.isSingleMode == true) {
        that.replaceImageSrc(that.canvas[that.unlockedCanvasIndex], data).then(result => {
          that.renderStackObjects();
        })
      }
      else {
        var promises = [];
        that.canvas.forEach(element => {
          var pro = that.replaceImageSrc(element, data);
          promises.push(pro);
        });
        await Promise.all(promises).then(result => {
          that.renderStackObjects();
        })
      }

    };
    reader.readAsDataURL(file);
  }

  replaceImageSrc(element, imageSrc): Promise<any> {
    return new Promise(resolve => {
      let object = element.getActiveObject() || element.getItemByName('id', this.activatedLayer.id);
      var scaledWidth = object.getScaledWidth();
      var scaledHeight = object.getScaledHeight();
      object.setSrc(imageSrc, function (img) {
        object.setCoords();
        object.scaleToHeight(scaledHeight);
        object.scaleToWidth(scaledWidth);
        element.renderAll();
        resolve();
      });
    })
  }

  changeFontFamily(fontFamily, isButton = false) {
    this._getFontFromFamily(fontFamily).then(result => {
      this.props.font = result;
      if (result != {}) {
        this.fabricService._loadFont(this.props.font.fontName, this.props.font.fontSrc).then(result => {
          this.props.fontFamily = this.props.font.fontName;
          this.setProperty(this.canvas, this.activatedLayer.id, { fontFamily: this.props.fontFamily, fontName: this.props.font.fontName, fontSrc: this.props.font.fontSrc }, isButton);
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

  setText(text, isButton = false) {
    this.setProperty(this.canvas, this.activatedLayer.id, { text: text }, isButton);
    this.renderStackObjects();
  }

  setFontSize(fontSize, isButton = false) {
    // math.sign represent that numer is positive or negetive
    if (fontSize && (Math.sign(fontSize) == 1 || Math.sign(fontSize) == 0))
      this.setProperty(this.canvas, this.activatedLayer.id, { fontSize: fontSize }, isButton);
  }

  // Button Text Change Evencts  for resize button Automatic

  focusButtonTextArea() {
    if (this.isSingleMode == true) {
      let singleCanvas = this.canvas[this.unlockedCanvasIndex]
      let id = typeof singleCanvas.getActiveObject() != 'undefined' && singleCanvas.getActiveObject() != null ? singleCanvas.getActiveObject().id : this.activatedLayer.id
      singleCanvas.getItemByName('id', id).fire('_TextEditingEnter');
    }
    else {
      this.canvas.forEach(element => {
        element.getItemByName('id', this.activatedLayer.id).fire('_TextEditingEnter');
      });
    }
  }

  blurButtonTextArea() {
    if (this.isSingleMode == true) {
      let singleCanvas = this.canvas[this.unlockedCanvasIndex]
      let id = typeof singleCanvas.getActiveObject() != 'undefined' && singleCanvas.getActiveObject() != null ? singleCanvas.getActiveObject().id : this.activatedLayer.id
      singleCanvas.getItemByName('id', id).fire('_TextEditingExit');
    }
    else {
      this.canvas.forEach(element => {
        element.getItemByName('id', this.activatedLayer.id).fire('_TextEditingExit');
      });
    }
  }

  setButtonText(text, buttonEditor) {
    this.setProperty(this.canvas, this.activatedLayer.id, { text: text }, buttonEditor);
    this.renderStackObjects();
    if (this.isSingleMode == true) {
      let singleCanvas = this.canvas[this.unlockedCanvasIndex]
      let id = typeof singleCanvas.getActiveObject() != 'undefined' && singleCanvas.getActiveObject() != null ? singleCanvas.getActiveObject().id : this.activatedLayer.id
      let object = singleCanvas.getItemByName('id', id);
      object.fire('_TextChange');
      singleCanvas.renderAll();
    }
    else {
      this.canvas.forEach(element => {
        let object = element.getItemByName('id', this.activatedLayer.id);
        object.fire('_TextChange');
        element.renderAll();
      });
    }
  }

  // Button Text Change Events Finish Here

  setButtonStrokeColor(color) {
    this.props.buttonStrokeColor = color;
    this.setProperty(this.canvas, this.activatedLayer.id, { buttonStrokeColor: color }, true);
    this.renderStackObjects();
  }

  setButtonStrokeSize(size) {
    this.setProperty(this.canvas, this.activatedLayer.id, { buttonStrokeWidth: size }, true);
    this.renderStackObjects();
  }

  setButtonFill(color) {
    this.props.buttonFill = color;
    this.setProperty(this.canvas, this.activatedLayer.id, { buttonFill: color }, true);
    this.renderStackObjects();
  }

  setButtonGradient(colorArray) {
    colorArray.length <= 0 ? this.props.buttonGradientArray = JSON.parse(JSON.stringify(defaultGradientArray)) : this.props.buttonGradientArray = colorArray;
    var colorStop = this.helperService._convertStopIntoOffsetColorArray(this.props.buttonGradientArray);
    if (this.isSingleMode == false) {
      this.canvas.forEach(canvas => {
        let obj = canvas.getItemByName('id', this.activatedLayer.id)
        if (obj)
          this._setGradientToButton(canvas, JSON.parse(JSON.stringify(colorStop)), obj)
      });
    }
    else {
      var canvas = this.canvas[this.unlockedCanvasIndex];
      this._setGradientToButton(canvas, JSON.parse(JSON.stringify(colorStop)), canvas.getActiveObject());
    }
  }

  _setGradientToButton(canvas, colorStop, object) {
    // let object = canvas.getItemByName('id', this.activatedLayer.id);
    let invertangle = (this.props.buttonGradientAngle + 180) > 360 ? (this.props.buttonGradientAngle + 180) - 360 : (this.props.buttonGradientAngle + 180)
    let angle = this.props.buttonGradientAngle;
    let x1, y1, x2, y2;
    let button = { top: object.top, left: object.left, width: object.width, height: object.height };
    let p1 = this.helperService.edgeOfView(button, invertangle)
    let p2 = this.helperService.edgeOfView(button, angle)
    x1 = p1.x; y1 = p1.y
    x2 = p2.x; y2 = p2.y

    var grad;
    if (this.props.gradientType == 'radial') {
      if (this.props.gradientPositionIsCenter == true) {
        x2 = object.width / 2;
        y2 = object.height / 2;
      }
      grad = new fabric.Gradient({
        type: "radial",
        coords: {
          r1: 0,
          r2: object.height,
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
      this.fabricService.setPropertyToObject(canvas, object.id, { buttonFill: grad, gradientAngle: this.props.buttonGradientAngle || 0 }, true);
      canvas.renderAll();
    }
  }

  setButtonRadius(radius) {
    this.setProperty(this.canvas, this.activatedLayer.id, { buttonRx: radius, buttonRy: radius }, true);
    this.renderStackObjects();
  }

  toggleStyle(style, isButton = false) {
    switch (style) {
      case 'bold':
        this.props.isBold = !this.props.isBold;
        this.setProperty(this.canvas, this.activatedLayer.id, { fontWeight: this.props.isBold ? 'bold' : 'normal' }, isButton);
        break;
      case 'italic':
        this.props.isItalic = !this.props.isItalic;
        this.setProperty(this.canvas, this.activatedLayer.id, { fontStyle: this.props.isItalic ? 'italic' : 'normal' }, isButton);
        break;
      case 'underline':
        this.props.isUnderLine = !this.props.isUnderLine;
        this.setProperty(this.canvas, this.activatedLayer.id, { underline: this.props.isUnderLine }, isButton);
        break;
      case 'strikethrough':
        this.props.isStrikeThrough = !this.props.isStrikeThrough;
        this.setProperty(this.canvas, this.activatedLayer.id, { linethrough: this.props.isStrikeThrough }, isButton);
        break;
      case 'overline':
        this.props.isOverLine = !this.props.isOverLine;
        this.setProperty(this.canvas, this.activatedLayer.id, { overline: this.props.isOverLine }, isButton);
        break;
    }
  }

  toggleAlignment(align, isButton = false) {
    this.props.textAlign = align;
    this.setProperty(this.canvas, this.activatedLayer.id, { textAlign: align }, isButton);
  }

  setOpacity(opacity, isButton = false) {
    var peroperty = isButton == true ? { textOpacity: opacity } : { opacity: opacity };
    this.setProperty(this.canvas, this.activatedLayer.id, peroperty, isButton);
  }

  setSpacing(charSpacing, isButton = false) {
    this.setProperty(this.canvas, this.activatedLayer.id, { charSpacing: charSpacing }, isButton);
  }

  setLineHeight(lineHeight, isButton = false) {
    this.setProperty(this.canvas, this.activatedLayer.id, { lineHeight: lineHeight }, isButton);
  }

  setFill(fill, isButton = false) {
    var property = isButton == true ? { color: fill } : { fill: fill };
    this.setProperty(this.canvas, this.activatedLayer.id, property, isButton);
  }

  setButtonIconFill(colorArray) {
    this.setProperty(this.canvas, this.activatedLayer.id, {
      iconColorArray: colorArray
    }, true);
  }

  setButtonIconSize(buttonIconSize) {
    this.setProperty(this.canvas, this.activatedLayer.id, {
      iconSize: buttonIconSize
    }, true);
  }

  setPreGradient(color) {
    this.props.canvasGradientArray = color.colorArray;
    this.props.gradientAngle = color.angle;
    this.props.gradientPositionIsCenter = color.gradientPositionIsCenter;
    this.props.gradientType = color.type
    this.setCanvasGradient(this.props.canvasGradientArray);
  }

  setCanvasFill(color) {
    if (this.isSingleMode == true) {
      this.removeBackgroundImage().then(result => {
        let canvas = this.canvas[this.unlockedCanvasIndex];
        canvas.setBackgroundColor(color, canvas.renderAll.bind(canvas));
        this.getBackgroundType();
      });
    }
    else {
      this.removeBackgroundImage().then(result => {
        this.canvas.forEach(element => {
          element.setBackgroundColor(color, element.renderAll.bind(element));
        });
        this.getBackgroundType();
      });
    }
  }

  setCanvasGradient(colorArray) {
    colorArray.length <= 0 ? this.props.canvasGradientArray = defaultGradientArray : this.props.canvasGradientArray = colorArray;
    var colorStop = this.helperService._convertStopIntoOffsetColorArray(this.props.canvasGradientArray);
    if (this.isSingleMode == false) {
      this.canvas.forEach(canvas => {
        this._setGradientToCanvas(canvas, colorStop)
      });
      this.getBackgroundType();
    }
    else {
      this._setGradientToCanvas(this.canvas[this.unlockedCanvasIndex], colorStop);
      this.getBackgroundType();
    }
  }

  _setGradientToCanvas(canvas, colorStop) {
    let invertangle = (this.props.gradientAngle + 180) > 360 ? (this.props.gradientAngle + 180) - 360 : (this.props.gradientAngle + 180)
    let angle = this.props.gradientAngle;
    let x1, y1, x2, y2;
    let c = { width: canvas.width, height: canvas.height };
    let p1 = this.helperService.edgeOfView(c, invertangle)
    let p2 = this.helperService.edgeOfView(c, angle)
    x1 = p1.x; y1 = p1.y
    x2 = p2.x; y2 = p2.y
    var grad;
    if (this.props.gradientType == 'radial') {
      if (this.props.gradientPositionIsCenter == true) {
        x2 = canvas.width / 2;
        y2 = canvas.height / 2;
      }
      grad = new fabric.Gradient({
        type: "radial",
        coords: {
          r1: 0,
          r2: canvas.height,
          x1: x2,
          y1: y2,
          x2: x2,
          y2: y2,
        },
        colorStops: colorStop,
        gradientAngle: this.props.gradientAngle || 0,
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
        gradientAngle: this.props.gradientAngle || 0
      });
    }
    if (grad) {
      canvas.backgroundColor = grad
      canvas.backgroundImage = null;
      canvas.renderAll();
    }
  }

  setCanvasImage(image) {
    let that = this;
    // add background image
    if (that.isSingleMode == true) {
      fabric.Image.fromURL(image, async (img) => {
        let element = that.canvas[that.unlockedCanvasIndex];
        that.fabricService.getScaleRatio(element.width, element.height, img.width, img.height, that.props.scaleMode).then(result => {
          if (result && result.scaleMode) {
            element.setBackgroundImage(img, () => {
              element.renderAll();
              that.getBackgroundType();
            }, {
              scaleX: result.scaleX,
              scaleY: result.scaleY,
              top: result.offsetY,
              left: result.offsetX,
              scaleMode: result.scaleMode
            });
          }
          else {
            console.log('background not scaled Properly');
          }
        })
      });
    }
    else {
      for (let i = 0, length = this.canvas.length; i < length; i++) {
        fabric.Image.fromURL(image, async (img) => {
          const element = this.canvas[i];
          await that.fabricService.getScaleRatio(element.width, element.height, img.width, img.height, that.props.scaleMode).then(async (result) => {
            await that._setBackgroundImage(result, element, img);
          });
        })
      }
    }
  }

  _setBackgroundImage(result, element, img) {
    if (result && result.scaleMode) {
      element.setBackgroundImage(img, () => {
        element.renderAll();
        // this.getBackgroundType();
      }, {
        scaleX: result.scaleX,
        scaleY: result.scaleY,
        top: result.offsetY,
        left: result.offsetX,
        scaleMode: result.scaleMode
      });
    }
    else {
      console.log('background not scaled Properly');
    }
  }

  setImgAsBgFromUser(e) {
    var file = e.target.files[0];
    var that = this;
    var reader = new FileReader();
    reader.onload = async function (f: any) {
      var data = f.target.result;
      that.setCanvasImage(data);
    };
    reader.readAsDataURL(file);
  }

  removeBackgroundImage(): Promise<any> {
    return new Promise(resolve => {
      this.getBackgroundType();
      if (this.isBackgorundImage) {
        if (this.isSingleMode == true) {
          this.canvas[this.unlockedCanvasIndex].backgroundImage = null;
          this.canvas[this.unlockedCanvasIndex].renderAll();
          resolve();
        }
        else {
          this.canvas.forEach(element => {
            element.backgroundImage = null;
            element.renderAll();
          });
          resolve();
        }
      }
      else {
        resolve();
      }
    })
  }

  changeScaleMode(scaleMode) {
    var srcList = [];
    this.canvas.forEach(element => {
      if (element.backgroundImage)
        srcList.push(element.backgroundImage.getElement().src);
    });
    var finalSrc = this.getFinalValue(srcList);
    var imageHeight = 0, imageWidth = 0;
    if (finalSrc) {
      this.helperService.getMeta(finalSrc).then(imgdata => {
        imageHeight = imgdata.height;
        imageWidth = imgdata.width;
        this.canvas.forEach(element => {
          this.fabricService.getScaleRatio(element.width, element.height, imageWidth, imageHeight, scaleMode).then((result) => {
            if (result && result.scaleMode && element.backgroundImage) {
              element.backgroundImage.set({
                scaleX: result.scaleX,
                scaleY: result.scaleY,
                left: result.offsetX,
                top: result.offsetY
              });
              element.renderAll();
            }
          })
        });
      });
    }
  }

  setBackground(backgroundColor, isButton = false) {
    var property = isButton == true ? { backgroundColor: backgroundColor } : { textBackgroundColor: backgroundColor };
    this.setProperty(this.canvas, this.activatedLayer.id, property, isButton);
  }

  setShadow(shadow, isButton = false) {
    var property = isButton == true ? { buttonShadow: shadow } : { shadow: shadow };
    this.setProperty(this.canvas, this.activatedLayer.id, property, isButton);
  }

  setBTextShadow(shadow) {
    this.setProperty(this.canvas, this.activatedLayer.id, { textShadow: shadow }, true);
  }

  flipImage(value) {
    if (value == 'horizontal') {
      this.props.flipX = !this.props.flipX;
      this.setProperty(this.canvas, this.activatedLayer.id, { flipX: this.props.flipX });
    }
    else if (value == 'vertical') {
      this.props.flipY = !this.props.flipY;
      this.setProperty(this.canvas, this.activatedLayer.id, { flipY: this.props.flipY });
    }
  }

  changePosition(position) {
    this.objPosition = position;
    this.setPosition(this.objPosition);
  }

  setPosition(position) {
    // position offset used for keep object little-bit far from edge of canvas
    if (this.isSingleMode == true) {
      let canvas = this.canvas[this.unlockedCanvasIndex];
      let object = canvas.getActiveObject() || canvas.getItemByName('id', this.activatedLayer.id);
      this._getNewPosition(position, object, canvas).then(result => {
        if (typeof result != "undefined") {
          this._setNewPosition(canvas, object, result);
        }
      })
    }
    else {
      this.canvas.forEach(element => {
        let object = element.getItemByName('id', this.activatedLayer.id);
        if (object) {
          this._getNewPosition(position, object, element).then(result => {
            if (typeof result != "undefined") {
              if (this.applyFor == 'all') {
                this._setNewPosition(element, object, result);
              }
              else if (this.applyFor == 'square' && this.fabricService.isCanvasSquare(element)) {
                this._setNewPosition(element, object, result);
              }
              else if (this.applyFor == 'portrait' && this.fabricService.isCanvasPortrait(element)) {
                this._setNewPosition(element, object, result);
              }
              else if (this.applyFor == 'landscape' && this.fabricService.isCanvasLandscape(element)) {
                this._setNewPosition(element, object, result);
              }
            }
          })
        }
      });
    }
  }

  _getNewPosition(position, object, canvas): Promise<any> {
    let bounds = object.getBoundingRect(),
      objectCenterTop = bounds.height / 2,
      objectCenterLeft = bounds.width / 2,
      objectWidth = bounds.width,
      objectHeight = bounds.height,
      positionOffset = canvasBorderOffset,
      canvasHeight = canvas.getHeight(),
      canvasWidth = canvas.getWidth(),
      top, left, alignment = 'left';

    return new Promise((resolve, reject) => {
      switch (position) {
        case 'tl':
          top = 0 + positionOffset + objectCenterTop;
          left = 0 + positionOffset + objectCenterLeft
          alignment = 'left';
          resolve({ alignment: alignment, top: top, left: left })
          break;
        case 'tm':
          left = (canvasWidth / 2);
          top = 0 + positionOffset + objectCenterTop;
          alignment = 'center';
          resolve({ alignment: alignment, top: top, left: left })
          break;
        case 'tr':
          left = canvasWidth - (objectWidth / 2) - positionOffset;
          top = 0 + positionOffset + objectCenterTop;
          alignment = 'right';
          resolve({ alignment: alignment, top: top, left: left })
          break;
        case 'ml':
          left = 0 + positionOffset + objectCenterLeft;
          top = (canvasHeight / 2);
          alignment = 'left';
          resolve({ alignment: alignment, top: top, left: left })
          break;
        case 'mm':
          left = (canvasWidth / 2);
          top = (canvasHeight / 2);
          alignment = 'center';
          resolve({ alignment: alignment, top: top, left: left })
          break;
        case 'mr':
          left = canvasWidth - (objectWidth / 2) - positionOffset;
          top = (canvasHeight / 2);
          alignment = 'right';
          resolve({ alignment: alignment, top: top, left: left })
          break;
        case 'bl':
          left = 0 + positionOffset + objectCenterLeft;
          top = canvasHeight - (objectHeight / 2) - positionOffset;
          alignment = 'left';
          resolve({ alignment: alignment, top: top, left: left })
          break;
        case 'bm':
          left = (canvasWidth / 2);
          top = canvasHeight - (objectHeight / 2) - positionOffset;
          alignment = 'center';
          resolve({ alignment: alignment, top: top, left: left })
          break;
        case 'br':
          left = canvasWidth - (objectWidth / 2) - positionOffset;
          top = canvasHeight - (objectHeight / 2) - positionOffset;
          alignment = 'right';
          resolve({ alignment: alignment, top: top, left: left })
          break;
        default:
          top = 0 + positionOffset + objectCenterTop;
          left = 0 + positionOffset + objectCenterLeft
          alignment = 'left';
          resolve({ alignment: alignment, top: top, left: left })
          break;
      }
    });
  }

  _setNewPosition(element, object, result) {
    if (this.activatedLayer.type == 'Text') {
      this.props.textAlign = result.alignment;
      object.set({
        textAlign: result.alignment
      })
    }
    object.setPositionByOrigin({
      y: result.top,
      x: result.left
    }, 'center', 'center')
    object.setCoords();
    element.renderAll();
  }

  // Export Canvases into JSON

  exportJSON() {
    this.showLoader();
    var jsonSet = [];
    this.canvas.forEach(element => {
      var json = this.generateJSON(element);
      jsonSet.push(json);
    });
    console.log('json set', JSON.stringify(jsonSet));
    this.hideLoader();
  }

  generateJSON(element) {
    var json: any = {
      "text_json": [],
      "sticker_json": [],
      "button_json": [],
      "image_sticker_json": [],
      "frame_json": {
        "frame_image": "",
        "frame_color": ""
      },
      "background_json": {
        "scaleMode": element.backgroundImage ? element.backgroundImage.toJSON().scaleMode : '',
        "background_image": element.backgroundImage ? element.backgroundImage.toJSON().src : '',
        "background_color": element.backgroundColor ? element.backgroundColor : ''
      },
      "sample_image": "",
      "sizeType": element.sizeType || '',
      "height": element.height,
      "width": element.width,
    }
    element.forEachObject(object => {
      switch (object.contentType) {
        case 1:
          json.text_json.push({
            "xPos": Number((object.left).toFixed(2)),
            "yPos": Number((object.top).toFixed(2)),
            "width": Number((object.width).toFixed(2)),
            "color": object.fill,
            "text": object.text,
            "size": object.fontSize,
            "fontName": object.fontFamily,
            "fontPath": object.fontSrc,
            "alignment": object.textAlign == 'left' ? 1 : object.textAlign == 'center' ? 2 : object.textAlign == 'right' ? 3 : object.textAlign == 'justify' ? 4 : 1,
            "bg_image": "",
            "texture_image": "",
            "opacity": object.opacity * 100,
            "angle": object.angle,
            "scaleX": object.scaleX,
            "scaleY": object.scaleY,
            "shadowColor": object.shadow.color,
            "shadowRadius": object.shadow.blur,
            "shadowDistance": (object.shadow.offsetX + object.shadow.offsetY) / 2
          });
          break;
        case 2:
          json.sticker_json.push({
            "xPos": Math.round(object.left),
            "yPos": Math.round(object.top),
            "width": object.width,
            "height": object.height,
            "scaleX": Number((object.scaleX).toFixed(2)),
            "scaleY": Number((object.scaleY).toFixed(2)),
            "sticker_image": object.src || object.toJSON().src,
            "angle": object.angle,
            "is_round": 0
          });
          break;
        case 5:
          /*  json.button_json.push({
             "text": object.text,
             "xPos": Math.round(object.left),
             "yPos": Math.round(object.top),
             "angle": object.angle,
             "width": object.width,
             "scaleX": Number((object.scaleX).toFixed(2)),
             "scaleY": Number((object.scaleY).toFixed(2)),
             "buttonFill": object.buttonFill,
             "buttonStrokeColor": object.buttonStrokeColor ? object.buttonStrokeColor : '',
             "buttonStrokeWidth": object.buttonStrokeWidth ? object.buttonStrokeWidth : 0,
             "buttonRx": object.buttonRx ? object.buttonRx : 0,
             "buttonRy": object.buttonRy ? object.buttonRy : 0,
             "stroke": object.stroke ? object.stroke : '',
             "strokeWidth": object.strokeWidth ? object.strokeWidth : 0,
             "fontName": object.fontName || '',
             "fontPath": object.fontSrc || '',
             "alignment": object.textAlign == 'left' ? 1 : object.textAlign == 'center' ? 2 : object.textAlign == 'right' ? 3 : object.textAlign == 'justify' ? 4 : 1,
             "isBold": object.isBold,
             "isItalic": object.isItalic,
             "isUnderLine": object.isUnderLine,
             "isStrikeThrough": object.isStrikeThrough,
             "isOverLine": object.isOverLine,
             "opacity": object.opacity * 100,
             "charSpacing": object.charSpacing,
             "lineHeight": object.lineHeight,
             "shadowColor": object.shadow ? object.shadow.color : '',
             "shadowRadius": object.shadow ? object.shadow.blur : 0,
             "shadowDistance": object.shadow ? (object.shadow.offsetX + object.shadow.offsetY) / 2 : 0,
             "fill": object.fill,
             "size": object.fontSize
           }); */

          json.button_json.push({
            "text": object.text,
            "xPos": Math.round(object.left),
            "yPos": Math.round(object.top),
            "angle": object.angle,
            "width": object.width,
            "height": object.height,
            "scaleX": Number((object.scaleX).toFixed(2)),
            "scaleY": Number((object.scaleY).toFixed(2)),
            "buttonFill": object.buttonFill,
            "buttonStrokeColor": object.buttonStrokeColor ? object.buttonStrokeColor : '',
            "buttonStrokeWidth": object.buttonStrokeWidth ? object.buttonStrokeWidth : 0,
            "buttonRx": object.buttonRx ? object.buttonRx : 0,
            "buttonRy": object.buttonRy ? object.buttonRy : 0,

            "stroke": object.stroke ? object.stroke : '',
            "strokeWidth": object.strokeWidth ? object.strokeWidth : 0,
            "fontName": object.fontName || '',
            "fontPath": object.fontSrc || '',
            "alignment": object.textAlign == 'left' ? 1 : object.textAlign == 'center' ? 2 : object.textAlign == 'right' ? 3 : object.textAlign == 'justify' ? 4 : 1,
            "fontWeight": object.fontWeight,
            "fontStyle": object.fontStyle,
            "underline": object.underline,
            "linethrough": object.linethrough,
            "overline": object.overline,
            "textOpacity": object.textOpacity * 100,
            "charSpacing": object.charSpacing,
            "lineHeight": object.lineHeight,
            "textShadow": object.textShadow,
            "buttonShadow": object.buttonShadow,
            // "shadowColor": object.shadow ? object.shadow.color : '',
            // "shadowRadius": object.shadow ? object.shadow.blur : 0,
            // "shadowDistance": object.shadow ? (object.shadow.offsetX + object.shadow.offsetY) / 2 : 0,
            "color": object.color,
            "fontSize": object.fontSize,
            "paddingOffset": object.paddingOffset,
            "backgroundColor": object.backgroundColor,
          });
          break;
      }
    })
    return json;
  }

  download() {
    this.showLoader();
    setTimeout(() => {
      let zip = new JSZip(), that = this;
      this.canvas.forEach(element => {
        // let w = window.open('')
        // w.document.write(element.toSVG())
        // return 'data:image/svg+xml;utf8,' + encodeURIComponent(element.toSVG());

        var daurl300dpi = changeDpiDataUrl(element.toDataURL({ format: 'jpeg', quality: 1 }), 300);
        zip.file(element.sizeType + ".jpeg", daurl300dpi.split(',')[1], { base64: true })
      });
      zip.generateAsync({ type: "blob" }).then(function (content) {
        FileSaver.saveAs(content, "Banners.zip");
        that.hideLoader();
      });
    }, 100);
  }

  downloadSingleCanvas(index) {
    // multiplier:  1 / (this.zoom * this.canvas.getRetinaScaling()) * scale_value_for_get_large_image)

    var multiplier = 1 / (1 * this.canvas[index].getRetinaScaling()) * 1;
    console.log('multiplier', multiplier, this.canvas[index].getRetinaScaling());

    this.helperService._download(this.canvas[index].sizeType + ".png", this.canvas[index].toDataURL({ format: 'png', quality: 1, enableRetinaScaling: true, multiplier: multiplier, scaleShadow: true }));
  }
}