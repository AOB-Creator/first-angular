import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  searchedText: string = '';

  @Output()
  searchTextChangerEvent: EventEmitter<string> = new EventEmitter<string>();

  searchTextChange(event: any) {
    this.searchedText = event.target.value;
  }

  onClickBtn() {
    this.searchTextChangerEvent.emit(this.searchedText);
  }
}
