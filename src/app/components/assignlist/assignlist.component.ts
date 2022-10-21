import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../../models/assign.model';
import { People } from '../../models/people.model';
import { Task } from '../../models/tasks.model';
import { AssignService } from '../../services/assignservice.service';
import { PeopleService } from '../../services/people.service';
import { TasksService } from '../../services/tasks.service';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-assignlist',
  templateUrl: './assignlist.component.html',
  styleUrls: ['./assignlist.component.scss'],
})
export class AssignlistComponent implements OnInit {
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Input() assignment: Assignment;
  constructor(
    private peopleSvc: PeopleService,
    private tasksSvc: TasksService,
    private assignmentsSvc: AssignService
  ) {}

  ngOnInit() {}

  // METHODS
  getTask():Task{
    var idTask = this.assignment.idTask;
    if(idTask)
      return this.tasksSvc.getTaskById(idTask);
    return undefined;
  }

  getPerson():People{
    var idPerson = this.assignment.idTask;
    if(idPerson)
      return this.peopleSvc.getPersonsById(idPerson);
    return undefined;
  }

  onEditClick(slide:IonItemSliding){
    slide.close();
    this.onEdit.emit(this.assignment);
  }

  onDeleteClick(slide:IonItemSliding){
    slide.close();
    this.onDelete.emit(this.assignment);
  }
}
