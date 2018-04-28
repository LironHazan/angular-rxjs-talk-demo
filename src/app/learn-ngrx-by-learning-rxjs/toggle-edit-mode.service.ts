import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ToggleEditModeService {

  constructor() { }

  isOnEdit = new BehaviorSubject<boolean>(false);

  setIsEdit(isEdit: boolean) {
    this.isOnEdit.next(isEdit);
  }

  isOnEditMode() {
    return this.isOnEdit.asObservable();
  }

}
