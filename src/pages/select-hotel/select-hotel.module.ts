import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectHotelPage } from './select-hotel';

@NgModule({
  declarations: [
    SelectHotelPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectHotelPage),
  ],
})
export class SelectHotelPageModule {}
