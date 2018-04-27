import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsObservableUseComponent } from './rxjs-observable-use.component';

describe('RxjsObservableUseComponent', () => {
  let component: RxjsObservableUseComponent;
  let fixture: ComponentFixture<RxjsObservableUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsObservableUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsObservableUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
