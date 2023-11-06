import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  checkedType: string = 'all';

  @Output()
  checkedTypeEmit: EventEmitter<string> = new EventEmitter<string>();

  oncheckedType() {
    this.checkedTypeEmit.emit(this.checkedType);
  }

  changed(event: any) {
    this.checkedType = event.target.value;
    this.checkedTypeEmit.emit(this.checkedType);
  }
}
