import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/tasks.model';
@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.scss'],
})
export class TasklistComponent implements OnInit {
  @Input() tsk: Task;
  @Output() onEdit = new EventEmitter(); // event edit
  @Output() onDelete = new EventEmitter(); // event delete

  constructor() {}

  ngOnInit() {}

  onEditClick() {
    this.onEdit.emit(this.tsk);
  }

  onDeleteClick() {
    this.onDelete.emit(this.tsk);
  }
}
