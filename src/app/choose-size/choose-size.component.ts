import { Component, OnInit } from '@angular/core';
import { sizes } from '../app.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-size',
  templateUrl: './choose-size.component.html',
  styleUrls: ['./choose-size.component.css']
})
export class ChooseSizeComponent implements OnInit {

  sizeList: any = sizes
  isSelected: any = false;
  isAllSelected: any = false;
  customSizeNameCounter: any = 1;
  customWidth: any;
  customHeight: any;


  constructor(public router: Router) { }

  ngOnInit() {
  }

  chooseSize(index) {
    this.sizeList[index].selected = !this.sizeList[index].selected;
    this.VarifySizeSelected();
  }

  addSize(customWidth, customHeight) {
    /* console.log('cucstom sisze', customWidth, customHeight);
    customWidth >= customHeight ? console.log('width', customWidth * (140 / customWidth) * 0.75) : console.log('width', customWidth * (120 / customHeight) * 0.60)
    customWidth >= customHeight ? console.log('height', customHeight * (140 / customWidth) * 0.75) : console.log('height', customHeight * (120 / customHeight) * 0.60); */

    if (customWidth && customHeight) {
      this.sizeList.unshift({
        sizeName: "Custom Size " + this.customSizeNameCounter++,
        icon: "",
        width: customWidth,
        height: customHeight,
        selected: true
      })
      this.customHeight = null;
      this.customWidth = null;
      this.VarifySizeSelected();
    }
  }

  moveToGenerator() {
    this.VarifySizeSelected().then(result => {
      localStorage.setItem('sizelist', JSON.stringify(result))
      this.router.navigate(['generator']);
    })
  }

  VarifySizeSelected(): Promise<any> {
    return new Promise(resolve => {
      var filteredArray = this.sizeList.filter(function (item) {
        return item.selected == true;
      });
      filteredArray.length <= 0 ? this.isSelected = false : this.isSelected = true;
      filteredArray.length == this.sizeList.length ? this.isAllSelected = true : this.isAllSelected = false;
      resolve(filteredArray);
    })
  }

  toggleAllSelection() {
    if (this.isAllSelected) {
      this.sizeList.forEach(element => {
        element.selected = false
      });
    }
    else {
      this.sizeList.forEach(element => {
        element.selected = true
      });
    }
    this.VarifySizeSelected();
  }
}
