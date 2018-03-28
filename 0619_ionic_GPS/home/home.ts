import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Vibration } from '@ionic-native/vibration';
import { Shake } from '@ionic-native/shake';
import { UniqueDeviceID } from '@ionic-native/unique-device-id';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


lat:any;
lng:any;
uuid:any;

  constructor(public navCtrl: NavController,
  private geolocation: Geolocation,
  private vibration: Vibration,
  private shake: Shake,
  private uniqueDeviceID: UniqueDeviceID,
  private flashlight: Flashlight) {

    //-----------------------------------------
    this.geolocation.getCurrentPosition().then((resp) => {
 this.lat=resp.coords.latitude
 this.lng=resp.coords.longitude
}).catch((error) => {
  console.log('Error getting location', error);
});
//-----------------------------------------

this.uniqueDeviceID.get()
  .then((uuid: any) => this.uuid=uuid)
  .catch((error: any) => this.uuid=error);
//-----------------------------------------

//const watch = this.shake.startWatch(60).subscribe(() => {
   
//this.myflash();
// });


  }
//-----------------------------------------
myvib(){
  this.vibration.vibrate(1000);
}

myflash(){
   this.flashlight.switchOn();
}

}
