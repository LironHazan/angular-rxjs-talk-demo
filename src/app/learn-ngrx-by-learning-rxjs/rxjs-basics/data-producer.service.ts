import { Injectable } from '@angular/core';

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


export function MyObservable(myObserver): any {
  const maybeSubject = [];
  let unsub;
  const dataProducerService = new DataProducerService(); // YEP I'm Cold :)
  dataProducerService.getNextFib((err, num) => {
    if (unsub) {
      return;
    }
    if (myObserver.error && err) {
      myObserver.error(err);
      return;
    }
    myObserver.next(num);
    maybeSubject.push(num);
  });
  // returns  unsubscribe func
   return ()  => {
    unsub = true;
    console.log(maybeSubject);
    dataProducerService.destroy();
  };
}
