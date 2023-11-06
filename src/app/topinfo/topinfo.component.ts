import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topinfo',
  templateUrl: './topinfo.component.html',
  styleUrls: ['./topinfo.component.scss'],
})
export class TopinfoComponent {
  @Input()
  selectedItem: any = {};
}
