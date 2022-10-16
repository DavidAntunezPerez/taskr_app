import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { People } from '../../models/people.model';

@Component({
  selector: 'app-peopledetail',
  templateUrl: './peopledetail.component.html',
  styleUrls: ['./peopledetail.component.scss'],
})

export class PeopleDetailComponent implements OnInit {
  
  pplid:number;
  form:FormGroup; // CREATE FORM
  mode:"New" | "Edit" = "New";

  @Input('person') set person(ppl:People){
    if(ppl){
      this.form.controls.name.setValue(ppl.name);
      this.form.controls.surname.setValue(ppl.surname);
      this.form.controls.sex.setValue(ppl.sex);
      this.form.controls.phone.setValue(ppl.phone);
      this.form.controls.picture.setValue(ppl.picture);
      this.mode = "Edit";
    }
  }

  constructor(private formBld:FormBuilder) {
    this.form = this.formBld.group({
      name:['', [Validators.required]],
      surname:['', [Validators.required]],
      sex:[''],
      phone:[''],
      picture:['']
    });
   }


  ngOnInit() {}

  onSubmit(){}

}
