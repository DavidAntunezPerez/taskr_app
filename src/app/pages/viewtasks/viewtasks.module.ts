import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewtasksPageRoutingModule } from './viewtasks-routing.module';

import { ViewtasksPage } from './viewtasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewtasksPageRoutingModule
  ],
  declarations: [ViewtasksPage]
})
export class ViewtasksPageModule {}
