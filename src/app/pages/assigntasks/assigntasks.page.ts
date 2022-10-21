import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Assignment } from '../../models/assign.model';
import { AssignService } from '../../services/assignservice.service';
import { AssigndetailComponent } from '../../components/assigndetail/assigndetail.component';

@Component({
  selector: 'app-assigntasks',
  templateUrl: './assigntasks.page.html',
  styleUrls: ['./assigntasks.page.scss'],
})
export class AssigntasksPage implements OnInit {
  constructor(
    private assgnSvc: AssignService,
    private modal: ModalController,
    private alert: AlertController
  ) {}

  ngOnInit() {}

  getAssignments() {
    return this.assgnSvc.getAssignments();
  }

  async AssignmentForm(assignment: Assignment) {
    const modal = await this.modal.create({
      component: AssigndetailComponent,
      componentProps: {
        person: assignment,
      },
      cssClass: 'modal-full-right-side',
    });
    modal.present();
    modal.onDidDismiss().then((result) => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            this.assgnSvc.addAssignment(result.data.assignment);
            break;
          case 'Edit':
            this.assgnSvc.updateAssignment(result.data.assignment);
            break;
          default:
        }
      }
    });
  }

  onEditAssignment(assignment) {
    this.AssignmentForm(assignment);
  }

  async onDeleteAlert(assignment) {
    const alert = await this.alert.create({
      header: 'Do you want to delete this task?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Operacion cancelada');
          },
        },
        {
          text: 'Delete',
          role: 'confirm',
          handler: () => {
            this.assgnSvc.deleteAssignmentById(assignment.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteAssignment(assignment) {
    this.onDeleteAlert(assignment);
  }
}
