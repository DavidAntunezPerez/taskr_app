import * as moment from 'moment-timezone';
import { Injectable } from '@angular/core';
import { Assignment } from '../models/assign.model';

@Injectable({
  providedIn: 'root',
})
export class AssignService {

  private assgn: Assignment[] = [
    {
      id: 1,
      idPerson: 0,
      idTask: 0,
      dateCreation:moment().toISOString(),
      dateTime:moment().add(1, 'days').toLocaleString(),
    },
    {
      id: 2,
      idPerson: 1,
      idTask: 2,
      dateCreation: moment().toISOString(),
      dateTime:moment().add(1, 'days').toLocaleString(),
    },
  ];

  constructor() {}

  id: number = this.assgn.length + 1;

  // METHODS

  getAssignments() {
    return this.assgn;
  }

  getAssignmentById(id: number) {
    return this.assgn.find(a=>a.id==id);
  }

  getAssignmentsByTaskId(idTask: number): Assignment[] {
    return this.assgn.filter(a=>a.idTask == idTask);
  }

  getAssignmentsByPersonId(idPerson: number): Assignment[] {
    return this.assgn.filter(a=>a.idPerson == idPerson);
  }

  deleteAssignmentById(id: number) {
    this.assgn = this.assgn.filter(a=>a.id != id);
  }

  addAssignment(assgn: Assignment) {
    assgn.id = this.id++;
    this.assgn.push(assgn);
  }

  updateAssignment(assignment: Assignment) {
    var assign = this.assgn.find(a=>a.id==assignment.id);
    if (assign) {
      assign.idTask = assignment.idTask;
      assign.idPerson = assignment.idPerson;
      assign.dateCreation = assignment.dateCreation;
      assign.dateTime = assignment.dateTime;
    }
  }
}
