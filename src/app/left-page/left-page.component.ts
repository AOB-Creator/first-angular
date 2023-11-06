import { Component } from '@angular/core';

@Component({
  selector: 'app-left-page',
  templateUrl: './left-page.component.html',
  styleUrls: ['./left-page.component.scss'],
})
export class LeftPageComponent {
  productCategory: string = '';
  searchedText: string = '';

  onProductCategory(value: any) {
    this.productCategory = value;
  }

  onSearchText(value: any) {
    this.searchedText = value;
  }
}
