import { Injectable } from '@angular/core';
import construct = Reflect.construct;

@Injectable()
export class DataProducerService {
  constructor() { }

  fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

  getNextFib(cb) {
    this.fib.forEach((num, i) => {
      setTimeout(() => {
        cb(null, num);
      }, i * 1000);
    });
    cb();
  }
  destroy() {
    this.fib = [];
  }
}


export class MyObservable {
  myObserver;

  constructor(_myObserver) {
    this.myObserver = _myObserver;
  }

  unsubscribe;

  subscribe(cb) {
    const dataProducerService = new DataProducerService(); // YEP I'm Cold :)
    dataProducerService.getNextFib((err, num) => {
      if (this.unsubscribe) {
        return;
      }
      cb(this.myObserver.next(num));
    });

      return {
        unsubscribe: () => {
          this.unsubscribe = true;
          dataProducerService.destroy();
        }
      };
  }
}
