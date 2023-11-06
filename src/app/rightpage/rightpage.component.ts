import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataProviderService } from '../data-provider.service';
@Component({
  selector: 'app-rightpage',
  templateUrl: './rightpage.component.html',
  styleUrls: ['./rightpage.component.scss'],
})
export class RightpageComponent {
  reactiveForm: any;
  currency: string = 'USD';
  size: string = 'x';
  payment: string = 'paypal';
  rate: number = 1;
  howmanytobuy: number = 1;
  totalamounttopay: number = 0;

  constructor(private dataService: DataProviderService) {}

  calculateMoney() {
    this.currency = this.reactiveForm.value.selectedCurrency;
    const url =
      'https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=' +
      this.currency +
      '&amount=1';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7da7b9c89emsh7f5fcde53a9b202p1c3ceejsn7c0377e15b29',
        'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        if (this.currency == 'UZS') {
          this.rate = json.rates.UZS.rate;
        } else if (this.currency == 'KZT') {
          this.rate = json.rates.KZT.rate;
        } else if (this.currency == 'RUB') {
          this.rate = json.rates.RUB.rate;
        } else if (this.currency == 'USD') {
          this.rate = json.rates.USD.rate;
        }
      });
  }

  selectedItem: any = {
    id: 4,
    name: 'White air max',
    image:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/57645e9b-581c-4e5f-9b07-783d2e4682db/air-max-1-shoes-nQB9h6.png',
    type: 'kids',
    sizes: ['x', 'xl', 'xls'],
    amount: 3,
    description:
      "Lead your kid into the heart of sneaker culture with these scaled-down Js. Legendary design elements and durable materials amplify your little baller's everyday game.",
    price: 97,
  };

  ngOnInit(): void {
    this.dataService.dataServiceEmitter.subscribe((value) => {
      this.selectedItem = value;
    });

    this.reactiveForm = new FormGroup({
      selectedCurrency: new FormControl('USD'),
      size: new FormControl('x'),
      payment: new FormControl(''),
    });
  }
  onhowManyProductsToBuy(value: any) {
    this.howmanytobuy = value;
  }
  onselectedPaymentType(value: any) {
    this.payment = value;
  }

  onselectedSizeProduct(value: any) {
    this.size = value;
  }

  buyThisProduct() {}
}
