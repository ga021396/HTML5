import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Detial01 } from './detial01';

@NgModule({
  declarations: [
    Detial01,
  ],
  imports: [
    IonicPageModule.forChild(Detial01),
  ],
  exports: [
    Detial01
  ]
})
export class Detial01Module {}
