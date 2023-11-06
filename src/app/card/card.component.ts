import { Component, Input } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  constructor(private dataService: DataProviderService) {}
  color: string = 'sexy';
  @Input()
  product: any;
  // product: {
  //   id: number;
  //   name: string;
  //   type: string;
  //   image: string;
  //   sizes: string[];
  //   description: string;
  //   price: number;
  // };
  @Input()
  category: string = '';

  @Input()
  searchText: string = '';

  selectedProduct: any;

  onClickSelect() {
    this.dataService.ondataServiceEmitter(this.product);
  }
}
