import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Assignment } from '../../models/assign.model';

@Component({
  selector: 'app-assigndetail',
  templateUrl: './assigndetail.component.html',
  styleUrls: ['./assigndetail.component.scss'],
})
export class AssigndetailComponent implements OnInit {
  
  form:FormGroup;
  mode:"New" | "Edit" = "New";
  @Input('assignment') set assignment(assignment:Assignment){
    if(assignment){
      console.log(assignment);
      this.form.controls.id.setValue(assignment.id);
      this.form.controls.idTask.setValue(assignment.idTask);
      this.form.controls.idPerson.setValue(assignment.idPerson);
      this.form.controls.dateTime.setValue(assignment.dateTime);
      this.mode = "Edit";
    }
  }
  

  
  constructor(
    private fb:FormBuilder,
    private modal:ModalController,
    private translateService: TranslateService
  ) { 
    this.form = this.fb.group({
      id:[null],
      idTask:[-1, [Validators.min(0)]],
      idPerson:[-1, [Validators.min(0)]],
      dateTime:['', [Validators.required]],
    });
  }
  
  // TRANSLATE
  language: string = this.translateService.currentLang;
  languageChange() {
    this.translateService.use(this.language);
  }

  ngOnInit() {

  }

  onSubmit(){
    this.modal.dismiss({assignment: this.form.value, mode:this.mode}, 'ok');
  }

  onDismiss(){
    this.modal.dismiss(null, 'cancel');
  }

  onChangeDateTime(dateTime){
    this.form.controls.dateTime.setValue(dateTime);
  }

  onDateTime(){
    
  }
}
