import { Injectable } from '@angular/core';

// аннотация говорит о том, что этот сервис встраивает себя в рутовый модуль
// в самом АП модуле, массив с провайдерами остается пустым, но сам сервис себя уже туда встроил 
@Injectable({
  providedIn: 'root'
})
export class CounterService {

  constructor() { }

  counter: number = 0;

  increment() {
    ++this.counter
  }

  decrement() {
    --this.counter
  }

  getValue() {
    return this.counter
  }
}
