import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CovidHospitalizationIcuPage } from './covid-hospitalization-icu.page';

const routes: Routes = [
  {
    path: ':id',
    component: CovidHospitalizationIcuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CovidHospitalizationIcuPageRoutingModule {}
