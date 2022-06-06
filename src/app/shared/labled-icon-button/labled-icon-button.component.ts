import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'labled-icon-button',
  templateUrl: './labled-icon-button.component.html',
  styleUrls: ['./labled-icon-button.component.css']
})
export class LabledIconButtonComponent implements OnInit {

  @Input() lable: any = "Button";
  @Input() backgroundColor: any = "#1e1e1e";
  @Input() color: any = '#fff';
  @Input() iconSize: any = 20;

  @Input() iconSrc: any = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onButtonClick() {
    this.onClick.emit();
  }

}
