import { Component, OnInit } from '@angular/core';
import {ToggleEditModeService} from '../toggle-edit-mode.service';

@Component({
  selector: 'app-using-subjects',
  templateUrl: './using-subjects.component.html'
})
export class UsingSubjectsComponent implements OnInit {

  constructor(private toggleEditModeService: ToggleEditModeService) { }

  ngOnInit() {
    setTimeout(() => {
      this.toggleEditModeService.setIsEdit(true);
    }, 0);
  }

}

