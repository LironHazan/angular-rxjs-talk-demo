import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MyObservable} from './data-producer.service';

@Component({
  selector: 'app-rxjs-basics',
  templateUrl: './rxjs-basics.component.html',
  styleUrls: ['./rxjs-basics.component.css']
})
export class RxjsBasicsComponent implements OnInit {
  @Output() calledValue = new EventEmitter();
  constructor() {}
  val1;
  val2;

  ngOnInit() {
    const myComponentObserver = {
      next: val => val,
      error: err => console.log(`Oops... ${err}`),
      complete: () => console.log(`Completed!`),
    };
    const obs1$ = new MyObservable(myComponentObserver);
    const subscription$ = obs1$.subscribe(val => {
      this.val1 = val;
      console.log(`Observer 1... ${val}`);
    });
    const obs2$ = new MyObservable({next: val => val});
    obs2$.subscribe(val =>  {
      this.val2 = val;
      this.calledValue.emit(val);
      console.log(`Observer 2... ${val}`);
    });
    setTimeout(() => {
      subscription$.unsubscribe();
    }, 3000);
  }

}

