import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { signupsteps } from '../signupsteps/signupsteps';

@Component({
  selector: 'signupverification',
  templateUrl: 'signupverification.html',
})
export class signupverification {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad signup verification');
  }
    
    signupsteps(){
        this.navCtrl.push(signupsteps);
    }

}
