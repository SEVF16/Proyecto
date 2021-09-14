import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassResetPageRoutingModule } from './pass-reset-routing.module';

import { PassResetPage } from './pass-reset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassResetPageRoutingModule
  ],
  declarations: [PassResetPage]
})
export class PassResetPageModule {}
