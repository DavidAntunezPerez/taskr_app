import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssigntasksPage } from './assigntasks.page';

const routes: Routes = [
  {
    path: '',
    component: AssigntasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssigntasksPageRoutingModule {}
