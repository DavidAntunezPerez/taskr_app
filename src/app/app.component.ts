import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'menu.home', url: '/home', icon: 'home' },
    { title: 'menu.people', url: '/people', icon: 'people' },
    { title: 'menu.view', url: '/viewtasks', icon: 'eye' },
    { title: 'menu.assign', url: '/assigntasks', icon: 'checkbox' },
    { title: 'menu.manage', url: '/tasks', icon: 'create' },
  ];
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }
  // onLanguage() {
  //   this.language = (this.language + 1) % 2;
  //   switch (this.language) {
  //     case 0:
  //       this.translate.setDefaultLang;
  //   }
  // }
}
