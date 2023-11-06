import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {
  constructor() {}

  dataServiceEmitter = new EventEmitter<string>();

  ondataServiceEmitter(data: string) {
    this.dataServiceEmitter.emit(data);
  }
}
