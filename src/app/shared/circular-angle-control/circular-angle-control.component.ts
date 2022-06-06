import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, AfterViewInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'circular-angle-control',
  templateUrl: './circular-angle-control.component.html',
  styleUrls: ['./circular-angle-control.component.css']
})
export class CircularAngleControlComponent implements OnInit, AfterViewInit {

  @ViewChild('dragControl', { static: false }) dragControl: ElementRef;
  @ViewChild('rotationControl', { static: false }) rotationControl: ElementRef;
  @ViewChild('valuePreview', { static: false }) valuePreview: ElementRef;

  degree: any = 0;
  offset: any;
  mouseDown: any = false;
  isRotating: any = false;
  _mouseMoveRef: any;
  _mouseUpRef: any;

  @Input() angle: number = 0;
  @Input() radius: number = 50;
  @Input() borderColor: any = '#fff';

  @Output() onAngleChange: EventEmitter<any> = new EventEmitter();
  @Output() onAngleChangeEnd: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {
    el.nativeElement.style.display = 'inline-block';
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.initialize();
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    // this is because when we change array of color dynamically, we need to reflect it in this control
    this.initialize();
  }

  initialize() {
    if (this.rotationControl) {
      this.degree = this.convertAngleToDegree(this.angle);
      this.rotationControl.nativeElement.style.cssText = '-moz-transform: rotate(' + this.degree + 'deg); -webkit-transform: rotate(' + this.degree + 'deg); -o-transform: rotate(' + this.degree + 'deg); -ms-transform: rotate(' + this.degree + 'deg);';
    }
  }

  getPosition(el: any) {
    if (!el.getClientRects().length) { return { top: 0, left: 0 }; }
    let rect = el.getBoundingClientRect();
    let win = el.ownerDocument.defaultView;
    return (
      {
        y: rect.top + win.pageYOffset,
        x: rect.left + win.pageXOffset
      });
  }

  onMouseDown($event) {
    let newOffset = this.getPosition(this.el.nativeElement)
    this.offset = {
      left: newOffset.x,
      top: newOffset.y,
    }
    this.mouseDown = true;
    this.isRotating = true;
    this._mouseMoveRef = this.onMouseMove.bind(this);
    this._mouseUpRef = this.onMouseUp.bind(this);
    document.onmousemove = this._mouseMoveRef;
    document.onmouseup = this._mouseUpRef;
  }

  onMouseMove($event) {
    if (this.mouseDown) {
      $event.preventDefault();
      if (this.isRotating) {
        this.rotate($event);
      }
    }

  }

  onMouseUp($event) {
    document.onmousemove = null;
    document.onmouseup = null;
    this.mouseDown = false;
    this.isRotating = false;
    this.angle = this.convertDegreeToAngle(Math.round(this.degree));
    this.onAngleChangeEnd.emit(this.angle);
  }

  rotate(evt) {
    evt.preventDefault();
    if (this.mouseDown == true) {
      var center_x = (this.offset.left) + (this.rotationControl.nativeElement.offsetWidth / 2);
      var center_y = (this.offset.top) + (this.rotationControl.nativeElement.offsetHeight / 2);
      var mouse_x = evt.pageX;
      var mouse_y = evt.pageY;
      var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
      this.degree = (radians * (180 / Math.PI) * -1) + 90;
      if (this.degree < 0) {
        this.degree += 360;
      }
      this.angle = this.convertDegreeToAngle(Math.round(this.degree));
      this.rotationControl.nativeElement.style.cssText = '-moz-transform: rotate(' + this.degree + 'deg); -webkit-transform: rotate(' + this.degree + 'deg); -o-transform: rotate(' + this.degree + 'deg); -ms-transform: rotate(' + this.degree + 'deg);';
      this.onAngleChange.emit(this.angle);
      this.valuePreview.nativeElement.innerText = this.angle;
    }
  }

  convertAngleToDegree(angle) {
    return (Math.abs(angle) * -1) + 360;
  }

  convertDegreeToAngle(degree) {
    return Math.abs(degree - 360);
  }

}
