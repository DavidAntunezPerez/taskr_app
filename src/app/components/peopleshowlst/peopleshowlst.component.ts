import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { People } from '../../models';
import { PeopleService } from '../../services';

export const USER_PROFILE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PeopleshowlstComponent),
  multi: true
};

@Component({
  selector: 'app-peopleshowlst',
  templateUrl: './peopleshowlst.component.html',
  styleUrls: ['./peopleshowlst.component.scss'],
  providers:[USER_PROFILE_VALUE_ACCESSOR]
})
export class PeopleshowlstComponent implements OnInit, ControlValueAccessor {

  selectedPerson:People=null;
  propagateChange = (_: any) => { }
  isDisabled:boolean = false;

  constructor(
    private pplSvc:PeopleService
  ) { }


  writeValue(obj: any): void {
    this.selectedPerson = this.pplSvc.getPersonsById(obj);
    console.log(obj)
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  ngOnInit() {}

  getPeople(){
    return this.pplSvc.getPerson();
  } 

  onPersonClicked(person:People, accordion:IonAccordionGroup){
    this.selectedPerson = person;
    accordion.value='';
    this.propagateChange(this.selectedPerson.id);
  }
}
