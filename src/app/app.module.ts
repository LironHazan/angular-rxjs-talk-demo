import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RxjsBasicsComponent } from './learn-ngrx-by-learning-rxjs/rxjs-basics/rxjs-basics.component';
import {DataProducerService} from "./learn-ngrx-by-learning-rxjs/rxjs-basics/data-producer.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    RxjsBasicsComponent,
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
