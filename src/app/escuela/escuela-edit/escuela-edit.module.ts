import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscuelaEditPageRoutingModule } from './escuela-edit-routing.module';

import { EscuelaEditPage } from './escuela-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscuelaEditPageRoutingModule
  ],
  declarations: [EscuelaEditPage]
})
export class EscuelaEditPageModule {}
