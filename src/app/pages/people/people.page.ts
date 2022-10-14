import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  public person:People[];
  private peopleService:PeopleService;
  constructor(private personinfo:PeopleService) {  }

  ngOnInit() {
  }

  getPerson(){
    return this.personinfo.getPerson();
  }

  onDeletePerson(person){
    this.peopleService.deletePersonById(person.id);
  }
}
