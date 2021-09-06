import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hello-framework',
  styleUrls: ['./hello-framework.component.scss'],
  templateUrl: './hello-framework.component.html'
})
export class HelloFrameworkComponent {
  public batches = [
    'Pre-Placement Activity',
    'Logic Building',
    'Angular',
    'Python',
    'Industrial Project Development'
  ];
}
