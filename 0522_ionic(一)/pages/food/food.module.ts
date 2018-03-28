import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Food } from './food';

@NgModule({
  declarations: [
    Food,
  ],
  imports: [
    IonicPageModule.forChild(Food),
  ],
  exports: [
    Food
  ]
})
export class FoodModule {}
