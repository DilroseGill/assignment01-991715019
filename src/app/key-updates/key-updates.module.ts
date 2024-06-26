import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KeyUpdatesComponent } from './key-updates.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule],
  declarations: [KeyUpdatesComponent],
  exports: [KeyUpdatesComponent]
})
export class KeyUpdatesComponentModule {}