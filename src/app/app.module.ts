import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { PeopledetailComponent } from './components/peopledetail/peopledetail.component';
import { TaskdetailComponent } from './components/taskdetail/taskdetail.component';
import { AssignlistComponent } from './components/assignlist/assignlist.component';
@NgModule({
  declarations: [AppComponent,PeopledetailComponent,TaskdetailComponent, AssignlistComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule,FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
