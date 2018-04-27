import { Injectable } from '@angular/core';
import construct = Reflect.construct;

@Injectable()
export class DataProducerService {
  constructor() { }

  fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 666, 144];

  getNextFib(cb) {
    this.fib.forEach((num, i) => {
      setTimeout(() => {
        if (num === 666) {
          cb(new Error('the number of the beast'));
          return;
        }
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

  maybeSubject = [];
  unsub;

  subscribe() {
    const dataProducerService = new DataProducerService(); // YEP I'm Cold :)
    dataProducerService.getNextFib((err, num) => {
      if (this.unsub) {
        return;
      }
      this.myObserver.next(num);
      this.maybeSubject.push(num);
    });

      return {
        unsubscribe: () => {
          this.unsub = true;
          console.log(this.maybeSubject);
          dataProducerService.destroy();
        }
      };
  }

}
