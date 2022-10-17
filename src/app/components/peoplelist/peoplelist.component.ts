import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { People } from '../../models/people.model';

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.scss'],
})
export class PeoplelistComponent implements OnInit {
  @Input() ppl: People;
  @Output() onEdit = new EventEmitter(); // event edit
  @Output() onDelete = new EventEmitter(); // event delete

  constructor() {}

  ngOnInit() {}

  onEditClick() {
    this.onEdit.emit(this.ppl);
  }

  onDeleteClick() {
    this.onDelete.emit(this.ppl);
  }
}
