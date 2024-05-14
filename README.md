# Traffic Light Simulation
This project is a simple web-based simulation of a traffic light intersection with Angular. It displays four components resembling traffic lights at an intersection, arranged in a grid similar to the provided illustration.

## Features

- **Traffic Light Behavior**:
  - Each traffic light cycles through the following phases:
    - Red: 5 seconds
    - Yellow: 2 seconds
    - Green: 5 seconds
  - The traffic lights are synchronized such that when one direction is green, the perpendicular direction shows red.
  - When a yellow light is displayed, all traffic lights show yellow simultaneously.

- **Intersection Cross Button**:
  - Each traffic light has a corresponding "Cross" button.
  - Behavior:
    - If the corresponding light is red, the button is disabled.
    - If the corresponding light is yellow or green, the button is active.
    - If pressed during a yellow light phase, a message "Incorrect Crossing" is displayed.
    - If pressed during a green light phase, no message is displayed.

- **Accident Button**:
  - There is a large "Emergency" button.
  - Pressing this button activates all traffic lights to flash yellow for 10 seconds.
  - After the emergency period ends, the button is disabled for 10 seconds.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
