import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManuPageRoutingModule } from './manu-routing.module';

import { ManuPage } from './manu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManuPageRoutingModule
  ],
  declarations: [ManuPage]
})
export class ManuPageModule {}
