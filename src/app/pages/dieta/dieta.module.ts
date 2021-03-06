import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DietaPageRoutingModule } from './dieta-routing.module';

import { DietaPage } from './dieta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DietaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DietaPage]
})
export class DietaPageModule {}
