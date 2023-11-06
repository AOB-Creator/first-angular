import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.scss'],
})
export class PaymentTypeComponent {
  paymentType: string = 'paypal';

  @Output()
  selectedPaymentType: EventEmitter<string> = new EventEmitter<string>();

  onChangerTyper(event: any) {
    this.paymentType = event.target.value;
    this.selectedPaymentType.emit(this.paymentType);
  }
}
