import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsingSubjectsComponent} from "./learn-ngrx-by-learning-rxjs/using-subjects/using-subjects.component";

const appRoutes: Routes = [
  {path: 'subjects', component: UsingSubjectsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
