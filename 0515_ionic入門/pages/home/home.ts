import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //------------------------------
  // member
  //------------------------------
  foods:Array<object>=[
    {'name':'google','picture':"a.png",'desc':'123321123321'},
    {'name':'google','picture':"b.png",'desc':'123321123321'},
    {'name':'google','picture':"c.png",'desc':'123321123321'}
    ];

  //------------------------------
  // constructor
  //------------------------------
  constructor(public navCtrl: NavController) {

  }
  //------------------------------
  // mento
  //------------------------------
  goNext(name,picture,desc){this.navCtrl.push('Detail',{name:name,picture:picture,dese:desc});}
}
