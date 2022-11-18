import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private translateService: TranslateService) {
  }
  language: string = this.translateService.currentLang;
  languageChange() {
    this.translateService.use(this.language);
  }
}
