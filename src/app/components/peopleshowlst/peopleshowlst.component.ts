import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonAccordionGroup } from '@ionic/angular';
import { People } from '../../models';
import { } from '../../services';

@Component({
  selector: 'app-peopleshowlst',
  templateUrl: './peopleshowlst.component.html',
  styleUrls: ['./peopleshowlst.component.scss'],
})
export class PeopleshowlstComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
