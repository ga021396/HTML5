import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Food page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-food',
  templateUrl: 'food.html',
})
export class Food {
  //---------------------
  // MEMBER
  //---------------------
  name:string;
  thumbnail:string;
  author:string;
  comment:string;
  authorImgURL:string;

  //---------------------
  // constructor 
  //---------------------
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name=this.navParams.get('name');
    this.thumbnail=this.navParams.get('thumbnail');
    this.author=this.navParams.get('author');
    this.comment=this.navParams.get('comment');
  this.authorImgURL=this.navParams.get('authorImgURL');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Food');
  }

}
