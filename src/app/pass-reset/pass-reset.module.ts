import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PassResetPageRoutingModule } from './pass-reset-routing.module';

import { PassResetPage } from './pass-reset.page';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PassResetPageRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [PassResetPage]
})
export class PassResetPageModule {}
