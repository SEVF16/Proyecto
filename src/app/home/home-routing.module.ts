import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { IngresadoGuard } from '../ingresado.guard';
import { NoIngresadoGuard } from '../no-ingresado.guard';
const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate:[NoIngresadoGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
