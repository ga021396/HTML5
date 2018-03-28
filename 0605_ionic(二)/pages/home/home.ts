import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //----------------------------
  //----------------------------
  constructor(public navCtrl: NavController) {

  }
  //----------------------------
  goNext() {
    this.navCtrl.push('Detial01');
  }
 goNext2() {
    this.navCtrl.push('Detail02');
  }
  //----------------------------
}
