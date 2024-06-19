import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManuPage } from './manu.page';

const routes: Routes = [
  {
    path: '',
    component: ManuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManuPageRoutingModule {}
