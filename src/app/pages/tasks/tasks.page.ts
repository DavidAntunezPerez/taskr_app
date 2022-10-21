import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/tasks.model';
import { TasksService } from 'src/app/services/tasks.service';
import { ModalController, AlertController } from '@ionic/angular';
import { TaskdetailComponent } from 'src/app/components/taskdetail/taskdetail.component';
import { AssignService } from '../../services/assignservice.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  constructor(
    private taskinfo: TasksService,
    private modal: ModalController,
    private alert: AlertController,
    private assgnSvc:AssignService
  ) {}

  ngOnInit() {}

  getTask() {
    return this.taskinfo.getTask();
  }

  async presentTaskForm(task: Task) {
    const modal = await this.modal.create({
      component: TaskdetailComponent, // add detail comp
      componentProps: {
        task: task,
      },
    });
    modal.present();
    modal.onDidDismiss().then((result) => {
      if (result && result.data) {
        switch (result.data.mode) {
          case 'New':
            this.taskinfo.addTask(result.data.task);
            break;
          case 'Edit':
            this.taskinfo.updateTask(result.data.task);
            break;
          default:
        }
      }
    });
  }

  onNewTask() {
    // create task function
    this.presentTaskForm(null);
  }

  onEditTask(task) {
    // edit task function
    this.presentTaskForm(task);
  }

  async onDeleteAlert(task) {
    const alert = await this.alert.create({
      header: 'Do you want to delete this task?',
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
            this.taskinfo.deleteTaskById(task.id);
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  async onTaskExistsAlert(task){
    const alert = await this.alert.create({
      header: 'Error',
      message: 'No es posible borrar la tarea porque está asignada a una persona',
      buttons: [
        {
          text: 'Cerrar',
          role: 'close',
          handler: () => {
           
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onDeleteTask(task) {
    // delete task function
    if(!this.assgnSvc.getAssignmentsByTaskId(task.id).length)
      this.onDeleteAlert(task);
    else
      this.onTaskExistsAlert(task);
  }
}
