import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssigntasksPageRoutingModule } from './assigntasks-routing.module';

import { AssigntasksPage } from './assigntasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssigntasksPageRoutingModule
  ],
  declarations: [AssigntasksPage]
})
export class AssigntasksPageModule {}
