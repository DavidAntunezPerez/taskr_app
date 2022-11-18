import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people.model';
import { PeopleService } from 'src/app/services/people.service';
import { ModalController, AlertController } from '@ionic/angular';
import { PeopledetailComponent } from 'src/app/components/peopledetail/peopledetail.component';
import { AssignService } from '../../services/assignservice.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  constructor(
    private personinfo: PeopleService,
    private modal: ModalController,
    private alert: AlertController,
    private assgnSvc:AssignService,
    private translateService: TranslateService
  ) {}
  
  // TRANSLATE
  language: string = this.translateService.currentLang;
  languageChange() {
    this.translateService.use(this.language);
  }

  ngOnInit() {}

  getPerson() {
    return this.personinfo.getPerson();
  }

  async presentPersonForm(person: People) {
    const modal = await this.modal.create({
      component: PeopledetailComponent, // add detail comp
      componentProps: {
        person: person,
      },
    });
    modal.present();
    modal.onDidDismiss().then((result) => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            this.personinfo.addPerson(result.data.person);
            break;
          case 'Edit':
            this.personinfo.updatePerson(result.data.person);
            break;
          default:
        }
      }
    });
  }

  onNewPerson() {
    // create person function
    this.presentPersonForm(null);
  }

  onEditPerson(person) {
    // edit person function
    this.presentPersonForm(person);
  }

  async onDeleteAlert(person) {
    const alert = await this.alert.create({
      header: 'Do you want to delete this person?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Operation cancelled');
          },
        },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => {
            this.personinfo.deletePersonById(person.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async onPersonExistsAlert(task){
    const alert = await this.alert.create({
      header: 'Error',
      message: 'Cannot delete this person because its assigned to a task.',
      buttons: [
        {
          text: 'Close',
          role: 'close',
          handler: () => {
           
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeletePerson(person) {
    // delete person function
    if(!this.assgnSvc.getAssignmentsByPersonId(person.id).length)
     this.onDeleteAlert(person);
    else
      this.onPersonExistsAlert(person);
  }
}
