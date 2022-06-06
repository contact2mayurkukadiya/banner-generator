import { Injectable } from '@angular/core';
import 'fabric';
import { canvasConfig, isObjectSelectable, defaultFontFamily, canvasBorderOffset } from './app.constants';
import './fabric_text_button';
import './fabric_icon_button';
import $ from "jquery";
declare const fabric: any;
declare let FontFace: any;

// Animation is worked but due to this animation, text not get scaled while add in canvas, so in comment
/* fabric.Canvas.prototype.add = (function (originalFn) {
  return function (...args) {
    var origninalTop = args[0]['top'];
    args[0]['top'] = args[0]['top'] - 100;
    originalFn.call(this, ...args);
    args[0].animate('top', origninalTop, {
      onChange: this.renderAll.bind(this),
      duration: 1000,
      easing: fabric.util.ease.easeOutElastic,
      onComplete: (function () {
        this.renderAll.bind(this);
      }).bind(this)
    });
    return this
  };
})(fabric.Canvas.prototype.add); */

// Fabric JS dpi
fabric.DPI = 300
// for get objects by it s attribute value
fabric.Canvas.prototype.getItemByName = function (attr, value) {
  var object = null,
    objects = this.getObjects();

  for (var i = 0, len = this.size(); i < len; i++) {
    if (objects[i][attr] && objects[i][attr] === value) {
      object = objects[i];
      break;
    }
  }
  return object;
};

// for set custom corner style
fabric.Object.prototype.set({
  borderColor: "#00c3f9",
  cornerColor: "#00c3f9",
  cornerStrokeColor: "#ffffff",
  cornerStyle: "circle",
  minScaleLimit: 0,
  lockScalingFlip: true,
  selectionDashArray: [5, 0],
  borderDashArray: [5, 5],
  cornerDashArray: [2, 0],
  borderScaleFactor: 1,
  cornerSize: 15,
  transparentCorners: false,
  centeredRotation: true,
  // selectable: false
});

@Injectable({
  providedIn: 'root'
})
export class FabricService {

  isCanvasLoacked: any = isObjectSelectable;
  singleEditMode: any = false;
  singleCanvas: any;
  // pixelRatio = window.devicePixelRatio || 1;
  constructor() {
    // fabric.devicePixelRatio = this.pixelRatio;
  }

  generateRandomNumber() {
    return Math.round(Math.random() * 1000000)
  }

  getAllLayer(canvasArr): Promise<any> {
    return new Promise(resolve => {
      var canvasWithMaxObjects = 0, maxObjectCanvasId;
      canvasArr.forEach(async (element, index) => {
        if (canvasWithMaxObjects <= element.toJSON().objects.length) {
          maxObjectCanvasId = index;
          canvasWithMaxObjects = element.toJSON().objects.length
        }
      });
      resolve(maxObjectCanvasId);
    })
  }

  getObjectByAttr(canvas, attr, value): Promise<any> {
    return new Promise(resolve => {
      resolve(canvas.getItemByName(attr, value));
    })
  }

  isCanvasPortrait(canvas) {
    let canvasHeight = canvas.getHeight(), canvasWidth = canvas.getWidth();
    return canvasHeight > canvasWidth + (canvasHeight / 6);
  }

  isCanvasLandscape(canvas) {
    let canvasHeight = canvas.getHeight(), canvasWidth = canvas.getWidth();
    return canvasWidth > canvasHeight + (canvasWidth / 6);
  }

  isCanvasSquare(canvas) {
    let canvasHeight = canvas.getHeight(), canvasWidth = canvas.getWidth();
    return (canvasWidth <= canvasHeight + (canvasWidth / 6)) && (canvasHeight <= canvasWidth + (canvasHeight / 6));
  }

  // Add Elements Functions

  addDefaultButton(canvas, props): Promise<any> {
    return new Promise((resolve) => {
      if (props.type == 'textButton') {
        this._loadFont(props.fontName, props.fontSrc).then(async (result) => {
          props.fontName = result.fontName;
          props.fontSrc = result.fontSrc;
          this._addButton(canvas, props).then(result => {
            resolve(canvas);
          })
        }, err => {
          console.log("font can't load", err);
        }).catch(err => {
          console.log("font can't load", err);
        })
      }
      else if (props.type == 'iconButton') {
        this._addIconButton(canvas, props).then(result => {
          resolve(canvas);
        })
      }
    });
  }

  _addButton(element, props): Promise<any> {
    return new Promise(async (resolve) => {
      var positionOffset = canvasBorderOffset - 5;
      var excludedProperty = ['type', 'previewImage'];
      var obj = {
        top: positionOffset,
        left: positionOffset,
        fontName: props.fontName,
      };
      for (let key in props) {
        if (props.hasOwnProperty(key)) {
          excludedProperty.indexOf(key) == -1 ? obj[key] = props[key] : null
        }
      }
      var button = new fabric.Button(props.text, obj);
      element.add(button);
      element.renderAll();
      resolve();
    });
  }

  _addIconButton(element, props): Promise<any> {
    return new Promise(async (resolve) => {
      var positionOffset = canvasBorderOffset - 5;
      var excludedProperty = ['src', 'type', 'previewImage'];
      var obj = {
        top: positionOffset,
        left: positionOffset,
        fontName: props.fontName,
      };
      for (let key in props) {
        if (props.hasOwnProperty(key)) {
          excludedProperty.indexOf(key) == -1 ? obj[key] = props[key] : null
        }
      }

      var button = new fabric.IconButton(props.src, obj);
      element.add(button);
      element.renderAll();
      resolve();
    });
  }

  addDefaultText(canvas, props): Promise<any> {
    return new Promise((resolve) => {
      // var newId = this.generateRandomNumber();
      // var promises = [];
      this._loadFont(props.fontName, props.fontSrc).then(async (result) => {
        /* for (let i = 0; i < canvas.length; i++) {
          var pro = this._addText(canvas[i], newId, fontSize);
          await pro.then(result => {
            canvas[i].renderAll();
          })
          promises.push(pro)
        }
        await Promise.all(promises).then(result => {
          resolve(canvas);
        }) */
        this._addText(canvas, props).then(result => {
          resolve(canvas);
        })
      }, err => {
        console.log("font can't load", err);
      }).catch(err => {
        console.log("font can't load", err);
      })
    })
  }

  _addText(element, props): Promise<any> {
    return new Promise(async (resolve) => {
      var positionOffset = canvasBorderOffset - 5;
      var canvasWidth = element.width - positionOffset;
      var canvasHeight = element.height - positionOffset;
      var excludedProperty = ['text'];
      var obj = {
        top: positionOffset,
        left: positionOffset,
        objectCaching: false
      };
      for (let key in props) {
        if (props.hasOwnProperty(key)) {
          excludedProperty.indexOf(key) == -1 ? obj[key] = props[key] : null
        }
      }
      var text = new fabric.Textbox(props.text, obj);

      if (text.height >= canvasHeight) {
        text.scaleToHeight(canvasHeight - positionOffset);
      }
      if (text.width >= canvasWidth) {
        text.set({ width: canvasWidth - positionOffset });
        if (text.getScaledWidth() >= canvasWidth - positionOffset)
          text.scaleToWidth(canvasWidth - positionOffset);
        if (text.getScaledHeight() >= canvasHeight - positionOffset)
          text.scaleToHeight(canvasHeight - positionOffset);
      }
      element.add(text);
      element.renderAll();
      resolve();
    })
  }

  _loadFont(fontFamily, fontPath): Promise<any> {
    return new Promise((resolve, reject) => {
      if (fontFamily && fontPath) {
        var junction_font = new FontFace(fontFamily, 'url(' + JSON.stringify(fontPath) + ')');
      } else {
        fontPath = defaultFontFamily.fontSrc;
        fontFamily = defaultFontFamily.fontName;
        var junction_font = new FontFace(fontFamily, 'url(' + JSON.stringify(fontPath) + ')');
      }
      junction_font.load().then(function (loaded_face) {
        document['fonts'].add(loaded_face);
        resolve({ fontName: fontFamily, fontSrc: fontPath });
      }).catch(err => {
        console.log(err);
        fontPath = defaultFontFamily.fontSrc;
        fontFamily = defaultFontFamily.fontName;
        var default_junction_font = new FontFace(fontFamily, 'url(' + JSON.stringify(fontPath) + ')');
        default_junction_font.load().then(function (loaded_face) {
          document['fonts'].add(loaded_face);
          resolve({ fontName: fontFamily, fontSrc: fontPath });
        }).catch(err => {
          reject(err);
        })
      })
    })
  }

  addDefaultImage(canvas, props): Promise<any> {
    return new Promise(async (resolve) => {
      this._loadImage(canvas, props).then(result => {
        resolve(canvas);
      });
    });
  }

  _loadImage(element, props): Promise<any> {
    return new Promise(resolve => {
      var positionOffset = canvasBorderOffset - 5;
      var canvasWidth = element.width - positionOffset;
      var canvasHeight = element.height - positionOffset;
      var excludedProperty = ['src'];
      var obj = {
        top: positionOffset,
        left: positionOffset,
        objectCaching: false
      };
      for (let key in props) {
        if (props.hasOwnProperty(key)) {
          excludedProperty.indexOf(key) == -1 ? obj[key] = props[key] : null
        }
      }

      fabric.Image.fromURL(props.src, function (myImg) {
        var img = myImg.set(obj);
        // scale responsive to canvas
        if (img.getScaledHeight() >= canvasHeight) {
          img.scaleToHeight(canvasHeight - positionOffset);
        }
        if (img.getScaledWidth() >= canvasWidth) {
          img.scaleToWidth(canvasWidth - positionOffset);
        }
        element.add(img);
        element.renderAll();
        resolve(img);
      });
    })
  }

  getScaleRatio(canvasWidth, canvasHeight, imageWidth, imageHeight, scaleMode): Promise<any> {
    return new Promise(resolve => {
      if (scaleMode) {
        var scaleX = 1, scaleY = 1, offsetX = 0, offsetY = 0;
        switch (scaleMode) {
          case 'scaleCrop':
            if (canvasWidth / canvasHeight >= imageWidth / imageHeight) {
              scaleX = canvasWidth / imageWidth;
              scaleY = scaleX;
              offsetY = -(imageHeight * scaleX - canvasHeight) / 2;
              offsetX = 0;
            }
            else {
              scaleY = canvasHeight / imageHeight;
              scaleX = scaleY;
              offsetX = -((imageWidth * scaleY) - canvasWidth) / 2;
              offsetY = 0;
            }
            resolve({
              scaleX: scaleX,
              scaleY: scaleY,
              offsetX: offsetX,
              offsetY: offsetY,
              scaleMode: scaleMode,
              canvasWidth: canvasWidth,
              canvasHeight: canvasHeight,
              imageWidth: imageWidth,
              imageHeight: imageHeight
            });
            break;
          case 'maintainAspect':
            if (imageWidth <= imageHeight) {
              scaleY = canvasHeight / imageHeight;
              scaleX = scaleY;
              offsetY = 0;
              offsetX = -(imageWidth * scaleY - canvasWidth) / 2
            }
            else {
              scaleX = canvasWidth / imageWidth;
              scaleY = scaleX;
              offsetX = 0;
              offsetY = -(imageHeight * scaleX - canvasHeight) / 2
            }
            resolve({
              scaleX: scaleX,
              scaleY: scaleY,
              offsetX: offsetX,
              offsetY: offsetY,
              scaleMode: scaleMode,
              canvasWidth: canvasWidth,
              canvasHeight: canvasHeight,
              imageWidth: imageWidth,
              imageHeight: imageHeight
            });
            break;
          case 'exactFit':
            scaleX = canvasWidth / imageWidth;
            scaleY = canvasHeight / imageHeight;
            resolve({
              scaleX: scaleX,
              scaleY: scaleY,
              offsetX: offsetX,
              offsetY: offsetY,
              scaleMode: scaleMode,
              canvasWidth: canvasWidth,
              canvasHeight: canvasHeight,
              imageWidth: imageWidth,
              imageHeight: imageHeight
            });
            break;
          case 'noScale':
            scaleX = 1;
            scaleY = 1;
            resolve({
              scaleX: scaleX,
              scaleY: scaleY,
              offsetX: offsetX,
              offsetY: offsetY,
              scaleMode: scaleMode,
              canvasWidth: canvasWidth,
              canvasHeight: canvasHeight,
              imageWidth: imageWidth,
              imageHeight: imageHeight
            });
            break;
          default:
            if (canvasWidth / canvasHeight >= imageWidth / imageHeight) {
              scaleX = canvasWidth / imageWidth;
              scaleY = scaleX;
              offsetY = -(imageHeight * scaleX - canvasHeight) / 2;
              offsetX = 0;
            }
            else {
              scaleY = canvasHeight / imageHeight;
              scaleX = scaleY;
              offsetX = -((imageWidth * scaleY) - canvasWidth) / 2;
              offsetY = 0;
            }
            resolve({
              scaleX: scaleX,
              scaleY: scaleY,
              offsetX: offsetX,
              offsetY: offsetY,
              scaleMode: 'scaleCrop',
              canvasWidth: canvasWidth,
              canvasHeight: canvasHeight,
              imageWidth: imageWidth,
              imageHeight: imageHeight
            });
            break;
        }
      }
      else {
        resolve({})
      }
    })
  }

  // render json in canvas

  generateIdList(bannerset): Promise<any> {
    return new Promise(resolve => {
      let objectLayers = [];
      bannerset.forEach(json => {
        if (json.hasOwnProperty('sample_image')) {
          for (var key in json) {
            if (json.hasOwnProperty(key)) {
              switch (key) {
                case 'text_json':
                  json[key].forEach(object => {
                    var tmp = objectLayers.filter(layer => {
                      return layer.text == object.text && layer.type == 'textbox'
                    })
                    if (tmp.length <= 0) {
                      objectLayers.push({
                        type: 'textbox',
                        contentType: 1,
                        text: object.text,
                        id: this.generateRandomNumber()
                      })
                    }
                  });
                  break;
                case 'button_json':
                  json[key].forEach(object => {
                    var tmp = objectLayers.filter(layer => {
                      return layer.text == object.text && layer.type == 'button'
                    })
                    if (tmp.length <= 0) {
                      objectLayers.push({
                        type: 'button',
                        contentType: 5,
                        text: object.text,
                        id: this.generateRandomNumber()
                      })
                    }
                  });
                  break;
                case 'sticker_json':
                  json[key].forEach(object => {
                    var tmp = objectLayers.filter(layer => {
                      return layer.src == object.sticker_image && layer.type == 'image'
                    })
                    if (tmp.length <= 0) {
                      objectLayers.push({
                        type: 'image',
                        contentType: 2,
                        src: object.sticker_image,
                        id: this.generateRandomNumber()
                      })
                    }
                  });
                  break;
              }
            }
          }
        }
      });
      // console.log('objectLayers', objectLayers);
      resolve(objectLayers);
    });
  }

  generateCanvas(canvas): Promise<any> {
    return new Promise(resolve => {
      var fabCanvas = new fabric.Canvas('canvas-' + canvas.index, canvasConfig);
      fabCanvas.setHeight(canvas.height);
      fabCanvas.setWidth(canvas.width);
      fabCanvas.set({
        sizeType: canvas.sizeType,
        id: 'canvas-' + canvas.index,
        locked: true
      })
      //this.scaleCanvas(fabCanvas.lowerCanvasEl, fabCanvas.contextContainer, canvas.width, canvas.height);
      resolve(fabCanvas);
    })
  }

  renderBackground(canvas, backgroundJSON): Promise<any> {
    return new Promise(resolve => {
      let that = this;
      if (backgroundJSON.background_image) {
        fabric.Image.fromURL(backgroundJSON.background_image, function (img) {
          that.getScaleRatio(canvas.width, canvas.height, img.width, img.height, backgroundJSON.scaleMode || 'scaleCrop').then(result => {
            canvas.setBackgroundImage(img, () => {
              canvas.renderAll();
              resolve(canvas);
            }, {
              scaleX: result.scaleX,
              scaleY: result.scaleY,
              top: result.offsetY,
              left: result.offsetX,
              scaleMode: result.scaleMode
            })
          });
        });
      }
      else if (backgroundJSON.background_color) {
        canvas.backgroundImage = null;
        canvas.setBackgroundColor(backgroundJSON.background_color, canvas.renderAll.bind(canvas))
        resolve(canvas);
      }
    })
  }

  renderStickers(canvas, stickerJSON, idList): Promise<any> {
    return new Promise(resolve => {
      var Promises = [];
      stickerJSON.forEach(object => {
        let newId;
        var layer = idList.filter(layer => {
          return layer.type == "image" && layer.src == object.sticker_image
        })
        if (layer.length > 0) {
          newId = layer[0].id;
          var props = {
            id: newId,
            src: object.sticker_image,
            contentType: 2
          }
          var promis = this._loadImage(canvas, props);
          promis.then(imgObject => {
            imgObject.set({
              top: object.yPos,
              left: object.xPos,
              width: object.width,
              height: object.height,
              scaleX: object.scaleX,
              scaleY: object.scaleY,
              angle: object.angle,
              objectCaching: false,
              selectable: this.isCanvasLoacked,
            })
            canvas.renderAll();
          })
          Promises.push(promis);
        }
      });
      Promise.all(Promises).then(result => {
        resolve(canvas);
      });
    });
  }

  renderText(canvas, textJSON, idList): Promise<any> {
    return new Promise(resolve => {
      textJSON.forEach(object => {
        let newId;
        var layer = idList.filter(layer => {
          return layer.type == "textbox" && layer.text == object.text
        })
        if (layer.length > 0) {
          newId = layer[0].id;
          this._loadFont(object.fontName, object.fontPath).then(font => {
            var text = new fabric.Textbox(object.text, {
              top: Math.round(object.yPos),
              left: Math.round(object.xPos),
              width: Math.round(object.width),
              fill: object.color,
              fontSize: Math.round(object.size),
              fontName: font.fontName,
              fontSrc: font.fontSrc,
              textAlign: object.alignment == 1 ? 'left' : object.alignment == 2 ? 'center' : object.alignment == 3 ? 'right' : object.alignment == 4 ? 'justify' : 'left',
              fontFamily: font.fontName,
              opacity: Number(object.opacity) / 100,
              angle: object.angle,
              scaleX: Number(object.scaleX).toFixed(2),
              scaleY: Number(object.scaleY).toFixed(2),
              shadow: {
                color: object.shadowColor,
                blur: object.shadowRadius,
                offsetX: object.shadowDistance,
                offsetY: object.shadowDistance,
                opacity: 1
              },
              selectable: this.isCanvasLoacked,
              objectCaching: false,
              contentType: 1,
              id: newId,
            })
            text.set({
              height: Math.round(text.height)
            })
            canvas.add(text);
            canvas.renderAll();
            resolve(true);
          }, err => {
            console.log('font loading error');
            resolve(false);
          })
        }
      })
    })
  }

  renderButton(canvas, buttonJSON, idList): Promise<any> {
    return new Promise(resolve => {
      buttonJSON.forEach(object => {
        let newId;
        var layer = idList.filter(layer => {
          return layer.type == "button" && layer.text == object.text
        })
        if (layer.length > 0) {
          newId = layer[0].id;
          this._loadFont(object.fontName, object.fontPath).then(font => {
            // fanric button js

            // var button = new fabric.Button(object.text, {
            //   top: object.yPos,
            //   left: object.xPos,
            //   width: object.width,
            //   fill: object.fill,
            //   buttonFill: object.buttonFill,
            //   buttonStrokeColor: object.buttonStrokeColor,
            //   buttonStrokeWidth: object.buttonStrokeWidth,
            //   buttonRx: object.buttonRx,
            //   buttonRy: object.buttonRy,
            //   stroke: object.stroke,
            //   strokeWidth: object.strokeWidth,
            //   fontSize: object.size,
            //   fontName: font.fontName,
            //   fontSrc: font.fontSrc,
            //   textAlign: object.alignment == 1 ? 'left' : object.alignment == 2 ? 'center' : object.alignment == 3 ? 'right' : object.alignment == 4 ? 'justify' : 'left',
            //   fontFamily: font.fontName,
            //   opacity: Number(object.opacity) / 100,
            //   charSpacing: object.charSpacing,
            //   lineHeight: object.lineHeight,
            //   angle: object.angle,
            //   scaleX: object.scaleX,
            //   scaleY: object.scaleY,
            //   shadow: {
            //     color: object.shadowColor,
            //     blur: object.shadowRadius,
            //     offsetX: object.shadowDistance,
            //     offsetY: object.shadowDistance,
            //     opacity: 1
            //   },
            //   selectable: true,
            //   contentType: 5,
            //   id: newId,
            // })

            // fabric Group Button js
            var button = new fabric.Button(object.text, {
              top: Math.round(object.yPos),
              left: Math.round(object.xPos),
              width: Math.round(object.width),
              height: Math.round(object.height),
              angle: object.angle,
              buttonShadow: object.buttonShadow,

              buttonFill: object.buttonFill,
              buttonStrokeColor: object.buttonStrokeColor,
              buttonStrokeWidth: object.buttonStrokeWidth,
              buttonRx: object.buttonRx,
              buttonRy: object.buttonRy,

              fontSize: Math.round(object.fontSize),
              fontName: font.fontName,
              fontSrc: font.fontSrc,
              color: object.color,
              stroke: object.stroke,
              strokeWidth: object.strokeWidth,
              textAlign: object.alignment == 1 ? 'left' : object.alignment == 2 ? 'center' : object.alignment == 3 ? 'right' : object.alignment == 4 ? 'justify' : 'left',
              textOpacity: Number(object.textOpacity) / 100,
              charSpacing: object.charSpacing,
              lineHeight: object.lineHeight,
              textShadow: object.textShadow,
              backgroundColor: object.backgroundColor,
              paddingOffset: object.paddingOffset,
              underline: object.underline,
              linethrough: object.linethrough,
              overline: object.overline,
              fontStyle: object.fontStyle,
              fontWeight: object.fontWeight,

              selectable: this.isCanvasLoacked,
              objectCaching: false,
              contentType: 5,
              id: newId,
            })
            canvas.add(button);
            canvas.renderAll();
            resolve();
          }, err => {
            console.log('font loading error');
            resolve();
          })
        }
      })
    });
  }

  // Not In use
  scaleCanvas(canvas, context, width, height) {
    const devicePixelRatio = window.devicePixelRatio || 1;

    // determine the 'backing store ratio' of the canvas context
    const backingStoreRatio = (
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio || 1
    );

    // determine the actual ratio we want to draw at
    const ratio = devicePixelRatio / backingStoreRatio;

    if (devicePixelRatio !== backingStoreRatio) {
      // set the 'real' canvas size to the higher width/height
      canvas.width = width * ratio;
      canvas.height = height * ratio;

      // ...then scale it back down with CSS
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
    }
    else {
      // this is a normal 1:1 device; just scale it simply
      canvas.width = width;
      canvas.height = height;
      canvas.style.width = '';
      canvas.style.height = '';
    }

    // scale the drawing context so everything will work at the higher ratio
    context.scale(ratio, ratio);
  }

  // Set Object Properties

  setPropertyToObject(canvas, objectId, property, isButtonProperty: any = false): Promise<any> {
    return new Promise((resolve, reject) => {
      let activeObject = canvas.getActiveObject();
      if (activeObject && activeObject.id == objectId) {
        if (isButtonProperty == true) {
          canvas.getActiveObject().setButtonProp(property);
          resolve()
        }
        else {
          canvas.getActiveObject().set(property)
          resolve()
        }
        canvas.renderAll();
      }
      else {
        if (isButtonProperty == true) {
          canvas.getItemByName('id', objectId) ? canvas.getItemByName('id', objectId).setButtonProp(property) : null;
          resolve()
        }
        else {
          canvas.getItemByName('id', objectId) ? canvas.getItemByName('id', objectId).set(property) : null;
          resolve()
        }
        canvas.renderAll();
      }
    })
  }
}