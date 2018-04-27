import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RxjsBasicsComponent } from './learn-ngrx-by-learning-rxjs/rxjs-simple-implementation/rxjs-basics.component';
import {DataProducerService} from "./learn-ngrx-by-learning-rxjs/rxjs-simple-implementation/data-producer.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { RxjsObservableUseComponent } from './learn-ngrx-by-learning-rxjs/rxjs-observable-use/rxjs-observable-use.component';


@NgModule({
  declarations: [
    AppComponent,
    RxjsBasicsComponent,
    RxjsObservableUseComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
              DataProducerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
