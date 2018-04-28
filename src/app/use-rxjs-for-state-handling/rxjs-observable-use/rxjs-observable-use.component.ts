import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {ToggleEditModeService} from '../toggle-edit-mode.service';

@Component({
  selector: 'app-rxjs-observable-use',
  templateUrl: './rxjs-observable-use.component.html'
})
export class RxjsObservableUseComponent implements OnInit {
  isOnEditMode$: Observable<boolean>;
  constructor(private toggleEditModeService: ToggleEditModeService) { }

  ngOnInit() {
    this.isOnEditMode$ = this.toggleEditModeService.isOnEditMode();

    const happyObservable$ = new Observable((observer) => {
      observer.next('cool');
      observer.complete();
    });
    const happyObservableSubscription$ = happyObservable$.subscribe(result => console.log(result)); // cool
    happyObservableSubscription$.unsubscribe();
  }
  toggleOff() {
    this.toggleEditModeService.setIsEdit(false);
  }
}
