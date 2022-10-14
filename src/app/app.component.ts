import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home'},
    { title: 'People', url: '/people', icon: 'people' },
    { title: 'View', url: '/viewtasks', icon: 'eye' },
    { title: 'Assign', url: '/assigntasks', icon: 'checkbox' },
    { title: 'Manage', url: '/tasks', icon: 'create' },
  ];
  constructor() {}
}
