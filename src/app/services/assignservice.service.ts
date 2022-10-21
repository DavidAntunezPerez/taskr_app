import * as moment from 'moment-timezone';
import { Injectable } from '@angular/core';
import { Assignment } from '../models/assign.model';

@Injectable({
  providedIn: 'root',
})
export class AssignserviceService {
  momentjs: any = moment;

  private assgn: Assignment[] = [
    {
      id: 1,
      idPerson: 1,
      idTask: 1,
      dateCreation: this.momentjs().toISOString(),
      dateTime: this.momentjs().add(1, 'days').toISOString(),
    },
    {
      id: 2,
      idPerson: 2,
      idTask: 2,
      dateCreation: this.momentjs().toISOString(),
      dateTime: this.momentjs().add(1, 'days').toISOString(),
    },
  ];

  constructor() {}

  id: number = this.assgn.length + 1;

  // METHODS

  getAssignments() {
    return this.assgn;
  }

  getAssignmentById(id: number) {
    return this.assgn.find((a) => a.id == id);
  }

  getAssignmentsByTaskId(taskId: number): Assignment[] {
    return this.assgn.filter((a) => a.idTask == taskId);
  }

  getAssignmentsByPersonId(idPerson: number): Assignment[] {
    return this.assgn.filter((a) => a.idPerson == idPerson);
  }

  deleteAssignmentById(id: number) {
    this.assgn = this.assgn.filter((a) => a.id != id);
  }

  addAssignment(assgn: Assignment) {
    assgn.id = this.id++;
    this.assgn.push(assgn);
  }

  updateAssignment(assignment: Assignment) {
    var assign = this.assgn.find((a) => a.id == assignment.id);
    if (assign) {
      assign.idTask = assignment.idTask;
      assign.idPerson = assignment.idPerson;
      assign.dateCreation = assignment.dateCreation;
      assign.dateTime = assignment.dateTime;
    }
  }
}
