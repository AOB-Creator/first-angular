import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-sizes-type',
  templateUrl: './sizes-type.component.html',
  styleUrls: ['./sizes-type.component.scss'],
})
export class SizesTypeComponent {
  @Input()
  sizes: any = [];

  selectedSize: string = 'x';
  selectedSizeProduct: EventEmitter<string> = new EventEmitter<string>();

  onChangeType(event: any) {
    this.selectedSize = event.target.value;
    this.selectedSizeProduct.emit(this.selectedSize);
  }
}
