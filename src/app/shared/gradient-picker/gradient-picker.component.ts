import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit, EventEmitter, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'gradient-picker',
  templateUrl: './gradient-picker.component.html',
  styleUrls: ['./gradient-picker.component.css']
})
export class GradientPickerComponent implements OnInit, AfterViewInit {

  _posX1: any;
  _posX2: any;
  _posY1: any;
  _posY2: any;
  _activeItem: any;
  _oldPosition: any;
  _oldPositionVertical: any;
  _dragControl: any = false;
  _activeDragControl: any;
  _touchEndRef: any;
  _touchMoveRef: any;
  cssBackground: string;
  cssColorArray: any[];
  activeColorObject: any;

  @ViewChild('addArea', { static: false }) addArea: ElementRef
  @ViewChild('removeArea', { static: false }) removeArea: ElementRef

  @Input() type: any = (Math.floor(Math.random() * 1000000000)).toString();
  @Input() minimumColors: any = 2;
  @Input() maximumColors: any = 4;
  @Input() minColorStop: number = 0;
  @Input() maxColorStop: number = 1;
  @Input() removeAreaBackgroundColor: any = "rgba(255, 0, 0, 0.424)";
  @Input() backgroundColor: any = "var(--light-black)";
  @Input() removeColorDragAreaTooltip: any = "Drag color pin here for remove color"
  @Input() controlTooltip: any = "Double click to open color picker"
  @Input() addTooltip: any = "Double click to add new color"
  @Input() containerClass: any = "";
  @Input() colorArray: any = [
    { color: '#000', stop: 0, id: 0 },
    { color: '#fff', stop: 1, id: 1 }
  ];

  @Output() onPickerChange: EventEmitter<any> = new EventEmitter();
  @Output() onColorAdd: EventEmitter<any> = new EventEmitter();
  @Output() onColorRemove: EventEmitter<any> = new EventEmitter();
  @Output() onColorSlideStart: EventEmitter<any> = new EventEmitter();
  @Output() onColorControlActivate: EventEmitter<any> = new EventEmitter();
  @Output() onColorSliding: EventEmitter<any> = new EventEmitter();
  @Output() onColorSlideEnd: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.colorArray.forEach((element, index) => {
      element['stopInPercent'] = '0'
      element['id'] = index;
    });
    this.activeColorObject = this.colorArray[0];
  }

  ngAfterViewInit(): void {
  }

  ngOnInit() {
    this.initializeRamp();
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    // this is because when we change array of color dynamically, we need to reflect it in this control
    this.initializeRamp();
  }

  initializeRamp() {
    if (this.colorArray.length < 2) {
      this.colorArray = [
        { color: '#000', stop: 0, id: 0 },
        { color: '#fff', stop: 1, id: 1 }
      ];
    }
    this.sortColorArray(this.colorArray, 'stop').then(sortedArray => {
      // this.colorArray = [];
      this.colorArray = sortedArray;
      this.colorArray.forEach((element, index) => {
        let stop: number = Number(element.stop);
        let percent: number = this.getPercentFromValue(stop);
        element.stopInPercent = percent;
        element.id = index;
      });
      this.generateCssFromArray(this.colorArray).then((result: string) => {
        this.cssBackground = result;
        this.activeColorObject = this.colorArray[0];
      });
    });
  }

  getValuefromPercent(percent): number {
    return Number(((percent * (this.maxColorStop - this.minColorStop) / 100) + this.minColorStop).toFixed(2))
  }

  getPercentFromValue(value): number {
    return ((value - this.minColorStop) / (this.maxColorStop - this.minColorStop)) * 100
  }

  generateCssFromArray(colorstopArray): Promise<string> {
    let tmp = JSON.parse(JSON.stringify(colorstopArray));
    return new Promise((resolve, reject) => {
      if (colorstopArray && colorstopArray.length >= 2) {
        let cssBackground = 'linear-gradient(to right';
        if (typeof this.minColorStop != "undefined" && typeof this.maxColorStop != "undefined") {
          // this.cssColorArray = [];
          this.sortColorArray(tmp, 'stop').then(sortedResult => {
            sortedResult.forEach((element, index) => {
              let stop: number = Number(element.stop);
              let percent: number = this.getPercentFromValue(stop);
              cssBackground += ', ' + element.color + ' ' + percent + '%'
              element.stopInPercent = percent
            });
            cssBackground += ')'
            resolve(cssBackground);
          });
        }
      }
    })
  }

  async addColor(event, color) {
    if (this.colorArray.length >= this.maximumColors) {
      return;
    }
    let newPercent = Number((event.offsetX * 100 / event.target.offsetWidth).toFixed(2));
    let stop = this.getValuefromPercent(newPercent);
    if (newPercent <= this.colorArray[0].stopInPercent) {
      // insert color at first
      this.colorArray.unshift({
        color: color,
        stop: stop,
        stopInPercent: newPercent
      })
      this.generateCssFromArray(this.colorArray).then(result => {
        this.cssBackground = result;
        this.activeColorObject = this.colorArray[0];
        this.refreshAllId();
        this.onPickerChange.emit(this.colorArray);
        this.onColorAdd.emit(this.colorArray);
      });
      return;
    }
    else if (newPercent >= this.colorArray[this.colorArray.length - 1].stopInPercent) {
      // insert color at last
      this.colorArray.push({
        color: color,
        stop: stop,
        stopInPercent: newPercent
      })
      this.generateCssFromArray(this.colorArray).then(result => {
        this.cssBackground = result;
        this.activeColorObject = this.colorArray[this.colorArray.length - 1];
        this.refreshAllId();
        this.onPickerChange.emit(this.colorArray);
        this.onColorAdd.emit(this.colorArray);
      });
      return;
    }
    else {
      for (let index = 0, arrLength = this.colorArray.length; index < arrLength; index++) {
        const element = this.colorArray[index];
        if (element.stopInPercent <= newPercent) {
        }
        else {
          this.colorArray.splice(index, 0, {
            color: color,
            stop: stop,
            stopInPercent: newPercent
          })
          await this.generateCssFromArray(this.colorArray).then(result => {
            this.cssBackground = result;
            this.activeColorObject = this.colorArray[index];
            this.refreshAllId();
            this.onPickerChange.emit(this.colorArray);
            this.onColorAdd.emit(this.colorArray);
            // set index to last element for break loop
            index = arrLength;
          });
        }
      }
    }
  }

  touchStart(e, colorElement, index) {
    this._activeDragControl = index;
    this.activeColorObject = colorElement;
    // this.onColorControlActivate.emit({ index: index, colorObject: colorElement })
    // Toush start
    // width and height of color-control = 10 , so according to pythagoras :
    // (width * width) + (height * height) = karna * karna (cross line between square box)
    // So We need to add (karna / 2) into left position of color control. so I have calculate karna (200 = (10*10) + (10*10))
    // this step is necessary because color-control is rotated as 45deg.
    let offsetLeft = e.target.offsetLeft - 5 + Math.sqrt(200) / 2;
    let offsetTop = e.target.offsetTop - 5 + Math.sqrt(200) / 2;
    this._activeItem = e.target;
    this._dragControl = true;
    e.preventDefault();
    this._oldPosition = Math.round(offsetLeft);
    this._oldPositionVertical = Math.round(offsetTop);
    if (e.type == 'touchstart') {
      this._posX1 = e.touches[0].clientX;
      this._posY1 = e.touches[0].clientY;
    } else {
      this._posX1 = e.clientX;
      this._posY1 = e.clientY;
    }
    this._touchEndRef = this.dragEnd.bind(this);
    this._touchMoveRef = this.dragAction.bind(this);
    this.onColorSlideStart.emit(this.colorArray);
    document.onmouseup = this._touchEndRef;
    this._activeItem.onmouseup = this._touchEndRef;
    this.removeArea.nativeElement.onmouseup = this._touchEndRef;
    this.addArea.nativeElement.onmousemove = this._touchMoveRef;
    // remove area highlight
    let that = this
    /* this.removeArea.nativeElement.onmouseenter = function () {
    };
    this.removeArea.nativeElement.onmouseout = function () {
      that.removeArea.nativeElement.style.backgroundColor = "transparent";
    }; */


    document.addEventListener('touchend', this._touchEndRef);
    this._activeItem.addEventListener('touchend', this._touchEndRef);
    this.addArea.nativeElement.addEventListener('touchmove', this._touchMoveRef);
  }

  dragAction(e) {
    if (this._dragControl) {
      if (e.type == 'touchmove') {
        this._posX2 = this._posX1 - e.touches[0].clientX;
        this._posX1 = e.touches[0].clientX;
        this._posY2 = this._posX1 - e.touches[0].clientY;
        this._posY1 = e.touches[0].clientY;
      } else {
        this._posX2 = this._posX1 - e.clientX;
        this._posX1 = e.clientX;
        this._posY2 = this._posY1 - e.clientY;
        this._posY1 = e.clientY;
      }
      let pixel = (this._oldPosition - this._posX2)
      this._oldPosition = pixel;

      let pixelVertrical = (this._oldPositionVertical - this._posY2)
      this._oldPositionVertical = pixelVertrical;
      if (this._oldPositionVertical <= 12 && this._oldPositionVertical >= -3) {
        this.removeArea.nativeElement.style.backgroundColor = this.removeAreaBackgroundColor;
      }
      else {
        this.removeArea.nativeElement.style.backgroundColor = 'transparent';
      }

      if (this._oldPosition >= 0 && this._oldPosition <= this.addArea.nativeElement.offsetWidth) {
        let newPercent = Number((this._oldPosition * 100 / this.addArea.nativeElement.offsetWidth).toFixed(2));
        let stop = this.getValuefromPercent(newPercent);
        this._activeItem.style.left = newPercent + "%";
        this.colorArray[this._activeDragControl].stop = stop;
        this.colorArray[this._activeDragControl].stopInPercent = newPercent;
        this.generateCssFromArray(this.colorArray).then(result => {
          this.cssBackground = result;
          this.onColorSliding.emit(this.colorArray);
        });
      }
    }
  }

  dragEnd() {
    this.removeArea.nativeElement.style.backgroundColor = 'transparent';
    document.onmouseup = null;
    this.addArea.nativeElement.onmousemove = null;
    this.removeArea.nativeElement.onmouseenter = null;
    this.removeArea.nativeElement.onmouseout = null;
    document.removeEventListener('touchend', this._touchEndRef);
    this._activeItem.addEventListener('touchend', this._touchEndRef);
    this.addArea.nativeElement.addEventListener('touchmove', this._touchMoveRef);

    this._dragControl = false;
    if (this._oldPositionVertical <= 10) {
      if (this.colorArray.length > this.minimumColors) {
        let index = this.colorArray.findIndex(color => color.id == this.activeColorObject.id)
        this.colorArray.splice(index, 1);
        this.generateCssFromArray(this.colorArray).then(result => {
          this.cssBackground = result;
          this.refreshAllId();
          this.onPickerChange.emit(this.colorArray);
          this.onColorRemove.emit(this.colorArray);
        })
      }
    }
    else {
      this.sortColorArray(this.colorArray, 'stop').then(result => {
        this.colorArray = result;
        this.onPickerChange.emit(this.colorArray);
        this.onColorSlideEnd.emit(this.colorArray);
        let index = this.colorArray.findIndex(color => color.id == this.activeColorObject.id)
        this.onColorControlActivate.emit({ index: index, colorObject: this.activeColorObject })
      })
    }
  }

  openColorPicker(id) {
    document.getElementById(id).click();
  }

  sortColorArray(arr, prop): Promise<any> {
    return new Promise(resolve => {
      arr.sort(this.GetSortOrder(prop));
      resolve(arr);
    })
  }

  GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    }
  }

  changeColor(color, i) {
    this.generateCssFromArray(this.colorArray).then(result => {
      this.cssBackground = result;
      this.onPickerChange.emit(this.colorArray);
    })
  }

  refreshAllId() {
    this.colorArray.forEach((element, index) => {
      element['id'] = index;
    });
  }

}
