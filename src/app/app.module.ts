import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RxjsBasicsComponent } from './learn-ngrx-by-learning-rxjs/rxjs-simple-implementation/rxjs-basics.component';
import {DataProducerService} from "./learn-ngrx-by-learning-rxjs/rxjs-simple-implementation/data-producer.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RxjsObservableUseComponent } from './learn-ngrx-by-learning-rxjs/rxjs-observable-use/rxjs-observable-use.component';
import { UsingSubjectsComponent } from './learn-ngrx-by-learning-rxjs/using-subjects/using-subjects.component';
import {ToggleEditModeService} from "./learn-ngrx-by-learning-rxjs/toggle-edit-mode.service";
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
