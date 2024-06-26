import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CovidHospitalizationIcuPageRoutingModule } from './covid-hospitalization-icu-routing.module';

import { CovidHospitalizationIcuPage } from './covid-hospitalization-icu.page';
import { StatusOfCasesComponentModule } from '../status-of-cases/status-of-cases.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CovidHospitalizationIcuPageRoutingModule,
    StatusOfCasesComponentModule
  ],
  declarations: [CovidHospitalizationIcuPage]
})
export class CovidHospitalizationIcuPageModule {}
