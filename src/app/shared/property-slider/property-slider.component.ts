import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'property-slider',
  templateUrl: './property-slider.component.html',
  styleUrls: ['./property-slider.component.css']
})
export class PropertySliderComponent implements OnInit {

  @Input() lable: any = "Lable";
  @Input() min: any = 0;
  @Input() max: any = 1;
  @Input() step: any = 0.1;
  @Input() modal: any = 0;
  @Input() format: any = '';
  @Input() timeOut:any = 300;

  @Output() onChange: EventEmitter<any> = new EventEmitter();
  timeoutCallback: any;

  constructor() { }

  ngOnInit() {
  }

  change($event) {
    if (this.timeoutCallback) clearTimeout(this.timeoutCallback)
    this.timeoutCallback = setTimeout(() => {
      this.onChange.emit($event);
    }, this.timeOut);
  }

}
