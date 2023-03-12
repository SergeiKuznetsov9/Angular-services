import { Component } from '@angular/core';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter1',
  templateUrl: './counter1.component.html',
  styleUrls: ['./counter1.component.css'],
  providers: [CounterService]
})
export class Counter1Component {

  counter: number = 0;
  constructor(private cnt: CounterService) {}

  increment() {
    this.cnt.increment()
    this.counter = this.cnt.getValue()
  }

  decrement() {
    this.cnt.decrement()
    this.counter = this.cnt.getValue()
  }
}
