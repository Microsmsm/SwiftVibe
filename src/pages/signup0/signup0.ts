import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { signupverification } from '../signupverification/signupverification';
import { signupsteps } from '../signupsteps/signupsteps';

@Component({
  selector: 'signup0',
  templateUrl: 'signup0.html',
})
export class signup0 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad signup');
  }
    
    signupverification() {
    this.navCtrl.push(signupverification);
  }

  goToSignUpSteps(){
    this.navCtrl.push(signupsteps)
  }

}
