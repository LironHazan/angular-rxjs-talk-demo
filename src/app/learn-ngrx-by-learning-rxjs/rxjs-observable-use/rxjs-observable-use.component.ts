import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ToggleEditModeService} from "../toggle-edit-mode.service";

@Component({
  selector: 'app-rxjs-observable-use',
  templateUrl: './rxjs-observable-use.component.html',
  styleUrls: ['./rxjs-observable-use.component.css']
})
export class RxjsObservableUseComponent implements OnInit {
  constructor(private toggleEditModeService: ToggleEditModeService) { }

  ngOnInit() {
    const happyObservable$ = new Observable((observer) => {
      observer.next('cool');
      observer.complete();
    });
    const happyObservableSubscription$ = happyObservable$.subscribe(result => console.log(result)); // cool
    happyObservableSubscription$.unsubscribe();
  }
  toggleOf() {
    this.toggleEditModeService.setIsEdit(false);
  }
}
