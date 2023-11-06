import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-howmany',
  templateUrl: './howmany.component.html',
  styleUrls: ['./howmany.component.scss'],
})
export class HowmanyComponent {
  howmany: number = 1;
  alertdata: boolean = false;

  @Input()
  quantity: number = 0;

  @Output()
  howManyProductsToBuy: EventEmitter<number> = new EventEmitter<number>();

  onclick(type: string) {
    if (type == '+') {
      if (this.howmany >= this.quantity) {
        this.howmany = this.howmany;
        this.alertdata = true;
      } else {
        this.howmany = this.howmany + 1;
      }
    } else if (type == '-') {
      if (this.howmany > 0) {
        this.howmany = this.howmany - 1;
        this.alertdata = false;
      } else {
        this.howmany = this.howmany;
      }
    }
    this.howManyProductsToBuy.emit(this.howmany);
  }
}
