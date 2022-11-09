import * as moment from 'moment-timezone';
import { Injectable } from '@angular/core';
import { Assignment } from '../models/assign.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AssignService {

  private assgn: Assignment[] = [
    {
      id: 0,
      idPerson: 0,
      idTask: 0,
      dateCreation:moment().toISOString(),
      dateTime:moment().add(1, 'days').toLocaleString(),
    },
    {
      id: 1,
      idPerson: 1,
      idTask: 2,
      dateCreation: moment().toISOString(),
      dateTime:moment().add(1, 'days').toLocaleString(),
    },
  ];

  private assignmentsSubject:BehaviorSubject<Assignment[]> = new BehaviorSubject(this.assgn);
  public assignments_ = this.assignmentsSubject.asObservable();

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
    this.assignmentsSubject.next(this.assgn);
  }

  addAssignment(assgn: Assignment) {
    assgn.id = this.id++;
    this.assgn.push(assgn);
    this.assignmentsSubject.next(this.assgn);
  }

  updateAssignment(assignment: Assignment) {
    var assign = this.assgn.find(a=>a.id==assignment.id);
    if (assign) {
      assign.idTask = assignment.idTask;
      assign.idPerson = assignment.idPerson;
      assign.dateCreation = assignment.dateCreation;
      assign.dateTime = assignment.dateTime;
    }
    this.assignmentsSubject.next(this.assgn);
  }
}
