import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { People } from '../../models/people.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-peopledetail',
  templateUrl: './peopledetail.component.html',
  styleUrls: ['./peopledetail.component.scss'],
})
export class PeopledetailComponent implements OnInit {
  form: FormGroup; // CREATE FORM
  mode: 'New' | 'Edit' = 'New';

  @Input('person') set person(ppl: People) {
    if (ppl) {
      this.form.controls.id.setValue(ppl.id);
      this.form.controls.name.setValue(ppl.name);
      this.form.controls.surname.setValue(ppl.surname);
      this.form.controls.sex.setValue(ppl.sex);
      this.form.controls.phone.setValue(ppl.phone);
      this.form.controls.picture.setValue(ppl.picture);
      this.mode = 'Edit';
    }
  }

  constructor(private formBld: FormBuilder, private modal: ModalController) {
    this.form = this.formBld.group({
      id:[null],
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      sex: [''],
      phone: [''],
      picture: [''],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.modal.dismiss({ person: this.form.value, mode: this.mode }, 'ok');
  }

  // DISMISS FORM FUNCTION
  onDismiss() {
    this.modal.dismiss(null, 'cancel');
  }
}
