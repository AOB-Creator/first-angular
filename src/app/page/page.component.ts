import { Component } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [DataProviderService],
})
export class PageComponent {
  constructor(private dataService: DataProviderService) {}
}
