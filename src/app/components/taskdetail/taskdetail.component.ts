import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/tasks.model';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-taskdetail',
  templateUrl: './taskdetail.component.html',
  styleUrls: ['./taskdetail.component.scss'],
})
export class TaskdetailComponent implements OnInit {
  form: FormGroup; // CREATE FORM
  mode: 'New' | 'Edit' = 'New';

  @Input('task') set task(tsk: Task) {
    if (tsk) {
      this.form.controls.id.setValue(tsk.id);
      this.form.controls.name.setValue(tsk.name);
      this.form.controls.description.setValue(tsk.description);
      this.form.controls.picture.setValue(tsk.picture);
      this.mode = 'Edit';
    }
  }

  constructor(private formBld: FormBuilder, private modal: ModalController, private translateService: TranslateService) {
    this.form = this.formBld.group({
      id: [null],
      name: ['', [Validators.required]],
      description: [''],
      picture: [''],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.modal.dismiss({ task: this.form.value, mode: this.mode }, 'ok');
  }

  // DISMISS FORM FUNCTION
  onDismiss() {
    this.modal.dismiss(null, 'cancel');
  }
  language: string = this.translateService.currentLang;
  languageChange() {
    this.translateService.use(this.language);
  }
}
