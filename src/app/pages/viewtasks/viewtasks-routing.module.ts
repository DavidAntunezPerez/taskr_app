import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewtasksPage } from './viewtasks.page';

const routes: Routes = [
  {
    path: '',
    component: ViewtasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewtasksPageRoutingModule {}
