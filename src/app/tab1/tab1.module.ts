import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { KeyUpdatesComponentModule } from '../key-updates/key-updates.module';
import { StatusOfCasesComponentModule } from '../status-of-cases/status-of-cases.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab1PageRoutingModule,
    KeyUpdatesComponentModule,
    StatusOfCasesComponentModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
