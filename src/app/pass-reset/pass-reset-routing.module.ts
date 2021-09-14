import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PassResetPage } from './pass-reset.page';

const routes: Routes = [
  {
    path: '',
    component: PassResetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassResetPageRoutingModule {}
