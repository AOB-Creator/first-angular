import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  cards = [
    {
      id: 0,
      name: 'Black Puma',
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/beb813ac-f826-4cc9-a716-7a2adc2ddd32/air-max-1-shoes-CrrrjR.png',
      type: 'women',
      sizes: ['x', 'xl', 'xls', 'm'],
      amount: 7,
      description:
        "Lead your kid into the heart of sneaker culture with these scaled-down Js. Legendary design elements and durable materials amplify your little baller's everyday game.",
      price: 145,
    },
    {
      id: 1,
      name: 'Air runner',
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dd263294-e2a8-4255-98d1-6579e395b828/air-max-1-older-shoes-d2HtVS.png',
      type: 'men',
      sizes: ['x', 'xl', 'xls', 'm'],
      amount: 0,
      description:
        "Lead your kid into the heart of sneaker culture with these scaled-down Js. Legendary design elements and durable materials amplify your little baller's everyday game.",
      price: 125,
    },
    {
      id: 2,
      name: 'Nike soft',
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b8f4400-101c-4b0c-95f3-faa85ab1fc40/air-max-1-older-shoes-Tvfq1T.png',
      type: 'women',
      sizes: ['x', 'xl', 'xls'],
      amount: 1,
      description:
        "Lead your kid into the heart of sneaker culture with these scaled-down Js. Legendary design elements and durable materials amplify your little baller's everyday game.",
      price: 100,
    },
    {
      id: 3,
      name: 'Puma max',
      image:
        'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c7acf78-3f03-4762-ac51-7f71921e40a7/air-max-1-shoes-Kd8dSr.png',
      type: 'men',
      sizes: ['x', 'xl', 'xls'],
      amount: 5,
      description:
        "Lead your kid into the heart of sneaker culture with these scaled-down Js. Legendary design elements and durable materials amplify your little baller's everyday game.",
      price: 97,
    },
    {
      id: 4,
      name: 'White air max',
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4a6a9835-85b5-4ca2-9ed5-55caecd7de6a/air-max-270-big-kids-shoes-HbtNX3.png',
      type: 'kids',
      sizes: ['x', 'xl', 'xls'],
      amount: 4,
      description:
        "Lead your kid into the heart of sneaker culture with these scaled-down Js. Legendary design elements and durable materials amplify your little baller's everyday game.",
      price: 53,
    },
    {
      id: 4,
      name: 'Nike air max',
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/86d4729c-4ec4-42be-bd3a-90a40db4aaad/air-vapormax-plus-womens-shoe-xbt7zf.png',
      type: 'kids',
      sizes: ['x', 'xl', 'xls'],
      amount: 3,
      description:
        "Lead your kid into the heart of sneaker culture with these scaled-down Js. Legendary design elements and durable materials amplify your little baller's everyday game.",
      price: 143,
    },
    {
      id: 5,
      name: 'Nike Maximum',
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b927230b-720a-42cb-8134-6731517c1e66/air-max-90-mens-shoes-JdKKmQ.png',
      type: 'kids',
      sizes: ['x', 'xl'],
      amount: 1,
      description:
        "Lead your kid into the heart of sneaker culture with these scaled-down Js. Legendary design elements and durable materials amplify your little baller's everyday game.",
      price: 12,
    },
    {
      id: 6,
      name: 'Airmax Puma',
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9bd1131b-70ca-40c0-8548-208c4d2d0ae8/air-max-correlate-womens-shoes-29Vjp0.png',
      type: 'women',
      sizes: ['xl', 'xls'],
      amount: 3,
      description:
        "Lead your kid into the heart of sneaker culture with these scaled-down Js. Legendary design elements and durable materials amplify your little baller's everyday game.",
      price: 127,
    },
  ];

  @Input()
  vitalText: string = '';

  @Input()
  category: string = '';
}
