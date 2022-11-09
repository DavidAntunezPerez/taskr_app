import { Injectable } from '@angular/core';
import { Task } from '../models/tasks.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  task: Task[] = [
    {
      id: 0,
      name: 'Task 1',
      description: 'First Task',
      picture: '',
    },
    {
      id: 1,
      name: 'Task 2',
    },
    {
      id: 2,
      name: 'Task 3',
      description: 'Task number 3',
      picture:
        'https://cdn2.iconfinder.com/data/icons/work-office-companies-5/24/task-list-edit-512.png',
    },
  ];

  private tasksSubject:BehaviorSubject<Task[]> = new BehaviorSubject(this.task);
  public task_ = this.tasksSubject.asObservable();

  id: number = this.task.length + 1;

  constructor() {}

  public getTask(): Task[] {
    // return task
    return this.task;
  }

  public getTaskById(id: number) {
    // returns task by ID
    return this.task.find((t) => t.id == id);
  }

  deleteTaskById(id: number) {
    // delete task by ID
    this.task = this.task.filter((t) => t.id != id);
    this.tasksSubject.next(this.task);
  }

  addTask(t: Task) {
    t.id = this.id++;
    this.task.push(t);
    this.tasksSubject.next(this.task);
  }

  updateTask(t: Task) {
    var tsk = this.task.find((ts) => ts.id == t.id);
    if (tsk) {
      tsk.name = t.name;
      tsk.description = t.description;
      tsk.picture = t.picture;
    }
    this.tasksSubject.next(this.task);
  }
}
