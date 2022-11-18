import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  language: string = this.translateService.currentLang;
  constructor(private translateService: TranslateService) {
  }
  languageChange() {
    this.translateService.use(this.language);
  }
}
