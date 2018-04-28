# RxJSTalkDemo

Link to the full [presentation](https://docs.google.com/presentation/d/1N0bp3BMYiGyAulJDiMajQ_Wr1ozlS1jwOrqHOexYZS0/edit?usp=sharing) 

Following project demonstrates:
1. Simple implementation of Observable class covering the following:
 - data producer: in my example a service which async generates the fibonci sequence
 - crating observable and an observer
 - creating subscription by executing the observable instance and calling subscribe()
 - unsubscribing the subscription.
2. Simple demonstration of creating Observable and Subscription by rxjs api.
3. Example of sharing state with several components using BehaviorSubject (entryLevel route component with others)

 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
