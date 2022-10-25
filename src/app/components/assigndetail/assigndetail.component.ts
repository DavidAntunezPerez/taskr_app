import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Assignment } from '../../models/assign.model';

@Component({
  selector: 'app-assigndetail',
  templateUrl: './assigndetail.component.html',
  styleUrls: ['./assigndetail.component.scss'],
})
export class AssigndetailComponent implements OnInit {
  form: FormGroup;
  mode: 'New' | 'Edit' = 'New';
  @Input('assignment') set assignment(assignment: Assignment) {
    if (assignment) {
      this.form.controls.id.setValue(assignment.id);
      this.form.controls.taskId.setValue(assignment.idTask);
      this.form.controls.personId.setValue(assignment.idPerson);
      this.form.controls.dateTime.setValue(assignment.dateTime);
      this.mode = 'Edit';
    }
  }

  constructor(private fb: FormBuilder, private modal: ModalController) {
    this.form = this.fb.group({
      id: [null],
      idTask: [-1, [Validators.min(1)]],
      idPerson: [-1, [Validators.min(1)]],
      dateTime: ['', [Validators.required]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.modal.dismiss({ assignment: this.form.value, mode: this.mode }, 'ok');
  }

  onDismiss() {
    this.modal.dismiss(null, 'cancel');
  }
}
