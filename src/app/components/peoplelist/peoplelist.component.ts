import { Component, OnInit, Input } from '@angular/core';
import { People } from '../../models/people.model'

@Component({
  selector: 'app-peoplelist',
  templateUrl: './peoplelist.component.html',
  styleUrls: ['./peoplelist.component.scss'],
})
export class PeoplelistComponent implements OnInit {

  @Input() ppl : People;

  constructor() { }

  ngOnInit() {}

}
