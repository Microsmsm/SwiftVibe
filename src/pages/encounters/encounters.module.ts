import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EncountersPage } from './encounters';

@NgModule({
  declarations: [
    EncountersPage,
  ],
  imports: [
    IonicPageModule.forChild(EncountersPage),
  ],
})
export class EncountersPageModule {}
