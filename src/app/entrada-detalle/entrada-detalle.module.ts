import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntradaDetallePageRoutingModule } from './entrada-detalle-routing.module';

import { EntradaDetallePage } from './entrada-detalle.page';
import { ModuloComponentesModule } from '../Componentes/modulo-componentes/modulo-componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntradaDetallePageRoutingModule,
    ModuloComponentesModule
  ],
  declarations: [EntradaDetallePage]
})
export class EntradaDetallePageModule {}