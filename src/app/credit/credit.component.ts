import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss'],
})
export class CreditComponent implements OnInit {
  paymentStatusState: any;
  alerttext: boolean = false;
  emitProductBuy: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.paymentStatusState = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      cardN: new FormControl('', [Validators.required]),
      cvvnumber: new FormControl('', [Validators.required]),
      expireData: new FormControl('', [Validators.required]),
    });
  }

  letsBuyThisProduct() {
    if (!this.paymentStatusState.invalid) {
      console.log(this.paymentStatusState.value);
    }
  }
}
