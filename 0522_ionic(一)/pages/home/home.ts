import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //---------------------
  // MEMBER
  //---------------------
  item: any;
  //---------------------
  // constructor 
  //---------------------
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public toastCtrl: ToastController) {
    this.loodData();
  }

  //---------------------
  // method 
  //---------------------
  loodData() {
    fetch('http://120.97.27.193/').then((response) => {
      return response.json();
    }).then((data) => {
      this.item = data;
      this.presentToast();
    }).catch((ex) => {
      this.presentToast();
    });
  }
  //------------------------------------------
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }


  //------------------------------------------\
    presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }
  //------------------------------------------\

   doRefresh(refresher) {
    this.loodData();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
    //------------------------------------------\
    goNext(name,thumbnail,author,comment,authorImgURL){this.navCtrl.push('Food',{'name':name,'thumbnail':thumbnail,'author':author,'comment':comment,'authorImgURL':authorImgURL});

    }
}

