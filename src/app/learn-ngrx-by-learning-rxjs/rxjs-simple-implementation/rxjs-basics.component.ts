import { Component, OnInit } from '@angular/core';
import {MyObservable} from './data-producer.service';

@Component({
  selector: 'app-rxjs-basics',
  templateUrl: './rxjs-basics.component.html',
  styleUrls: ['./rxjs-basics.component.css']
})
export class RxjsBasicsComponent implements OnInit {

  myComponentObserver;

  constructor() {
    this.myComponentObserver = {
      next: (val) => {
        return val;
      },
      error: err => console.log(`Oops... ${err}`),
      complete: () => console.log(`Completed!`),
    };

  }

  ngOnInit() {
    const obs1$ = new MyObservable(this.myComponentObserver);
    const subscription$ = obs1$.subscribe();
    const obs2$ = new MyObservable({next: val => console.log(`Observer 2 is in da house... ${val}`)});
    obs2$.subscribe();
    setTimeout(() => {
      subscription$.unsubscribe();
    }, 3000);
  }

}

