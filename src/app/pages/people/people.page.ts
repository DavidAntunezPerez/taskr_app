import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';
import { PeoplelistComponent } from 'src/app/components/peoplelist/peoplelist.component';


@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  public person:People[];
  constructor(private personinfo:PeopleService) {  }

  ngOnInit() {
  }

  getPerson(){
    return this.personinfo.getPerson();
  }
}
