import { Component, OnInit, Input } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';
import { ModalController } from '@ionic/angular';
import { PeopleDetailComponent } from 'src/app/components/peopledetail/peopledetail.component';


@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  constructor(private personinfo:PeopleService,
    private modal:ModalController) { }

  ngOnInit() {
  }

  getPerson(){
    return this.personinfo.getPerson();
  }

  async presentPersonForm(person:People){
    const modal = await this.modal.create({
      component:PeopleDetailComponent,// add detail comp
      componentProps:{
        person:person
      }
    });
    modal.present();
    modal.onDidDismiss().then(result=>{

    });
  }

  onNewPerson(){ // create person function
    this.presentPersonForm(null);  
  }

  onEditPerson(person){ // edit person function
    this.presentPersonForm(person);
  }

  onDeletePerson(person){ // delete person function
    this.personinfo.deletePersonById(person.id);
  }
}
