import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StatusOfCasesComponent } from './status-of-cases.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [StatusOfCasesComponent],
  exports: [StatusOfCasesComponent]
})
export class StatusOfCasesComponentModule {}