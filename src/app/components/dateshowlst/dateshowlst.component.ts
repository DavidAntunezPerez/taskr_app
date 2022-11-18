import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup, IonDatetime } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { BehaviorSubject } from 'rxjs';

export const DATETIME_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DateshowlstComponent),
  multi: true,
};

@Component({
  selector: 'app-dateshowlst',
  templateUrl: './dateshowlst.component.html',
  styleUrls: ['./dateshowlst.component.scss'],
  providers: [DATETIME_PROFILE_VALUE_ACCESSOR],
})
export class DateshowlstComponent
  implements OnInit, ControlValueAccessor, OnDestroy
{
  constructor(private translateService: TranslateService){}
  
  // TRANSLATE
  language: string = this.translateService.currentLang;
  languageChange() {
    this.translateService.use(this.language);
  }
  value = false;

  ngOnDestroy(): void {
    this.dateSubject.complete();
  }

  private dateSubject = new BehaviorSubject(this.formatDate(moment()));
  public date$ = this.dateSubject.asObservable();
  propagateChange = (_: any) => {};

  isDisabled: boolean = false;

  formatDate(date: moment.Moment) {
    return date.format('YYYY-MM-DDTHH:mmZ');
  }

  ngOnInit() {}

  writeValue(obj: any): void {
    if (obj) {
      this.value = true;
      this.dateSubject.next(this.formatDate(moment(obj)));
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onDateTimeChanged(event, accordion: IonAccordionGroup) {
    setTimeout(() => {
      var value_ = this.formatDate(moment(event.detail.value));
      if (value_ != this.dateSubject.getValue()) {
        this.value = true;

        this.dateSubject.next(value_);

        accordion.value = '';
        this.propagateChange(value_);
      }
    }, 100);
  }
  onCancel(datetime: IonDatetime, accordion) {
    datetime.cancel();
    accordion.value = '';
  }

  onConfirm(datetime: IonDatetime, accordion) {
    datetime.confirm();
  }
}
