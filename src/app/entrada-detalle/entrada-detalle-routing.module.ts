import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradaDetallePage } from './entrada-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: EntradaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradaDetallePageRoutingModule {}
