import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToggleEditModeService} from "./learn-ngrx-by-learning-rxjs/toggle-edit-mode.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  isOnEditMode$: Observable<boolean>;
  constructor(private router: Router, private toggleEditModeService: ToggleEditModeService) {}

  ngOnInit() {
    this.isOnEditMode$ = this.toggleEditModeService.isOnEditMode();
  }

  value;
  onCalledValue(val) {
    this.value = val;
  }

  routeToSubject(): void {
    this.router.navigate(['/subjects']);
  }

}
