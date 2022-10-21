import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssigntasksPageRoutingModule } from './assigntasks-routing.module';

import { AssigntasksPage } from './assigntasks.page';
import { AssignlistComponent } from 'src/app/components/assignlist/assignlist.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssigntasksPageRoutingModule
  ],
  declarations: [AssigntasksPage, AssignlistComponent]
})
export class AssigntasksPageModule {}
