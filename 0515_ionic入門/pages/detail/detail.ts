import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Detail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class Detail {

  name:string;
  picture:string;
  desc:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=navParams.get("name");
    this.picture=navParams.get("picture");
    this.desc=navParams.get("desc");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Detail');
  }

}
