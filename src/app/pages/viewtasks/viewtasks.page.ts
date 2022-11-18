import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-viewtasks',
  templateUrl: './viewtasks.page.html',
  styleUrls: ['./viewtasks.page.scss'],
})
export class ViewtasksPage implements OnInit {

  constructor(private translateService: TranslateService) {
  }
  language: string = this.translateService.currentLang;
  languageChange() {
    this.translateService.use(this.language);
  }
  ngOnInit() {
  }

}
