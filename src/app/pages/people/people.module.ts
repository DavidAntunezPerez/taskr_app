import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeoplePageRoutingModule } from './people-routing.module';

import { PeoplePage } from './people.page';

import { PeoplelistComponent } from 'src/app/components/peoplelist/peoplelist.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeoplePageRoutingModule
  ],
  declarations: [PeoplePage, PeoplelistComponent]
})
export class PeoplePageModule {}
