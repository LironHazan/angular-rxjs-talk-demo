import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RxjsBasicsComponent } from './use-rxjs-for-state-handling/rxjs-simple-implementation/rxjs-basics.component';
import {DataProducerService} from "./use-rxjs-for-state-handling/rxjs-simple-implementation/data-producer.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RxjsObservableUseComponent } from './use-rxjs-for-state-handling/rxjs-observable-use/rxjs-observable-use.component';
import { UsingSubjectsComponent } from './use-rxjs-for-state-handling/using-subjects/using-subjects.component';
import {ToggleEditModeService} from "./use-rxjs-for-state-handling/toggle-edit-mode.service";
import {AppRoutingModule} from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    RxjsBasicsComponent,
    RxjsObservableUseComponent,
    UsingSubjectsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
              DataProducerService,
              ToggleEditModeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
