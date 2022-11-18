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
import { AssigndetailComponent } from './components/assigndetail/assigndetail.component';
import { PeopleshowlstComponent } from './components/peopleshowlst/peopleshowlst.component';
import { TaskshowlstComponent } from './components/taskshowlst/taskshowlst.component';
import { DateshowlstComponent } from './components/dateshowlst/dateshowlst.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from './utils/translate';

@NgModule({
  declarations: [
    AppComponent,
    PeopledetailComponent,
    TaskdetailComponent,
    AssigndetailComponent,
    PeopleshowlstComponent,
    TaskshowlstComponent,
    DateshowlstComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
