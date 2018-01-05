import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { signupverification } from '../signupverification/signupverification';

@Component({
  selector: 'signup',
  templateUrl: 'signup.html',
})
export class signup {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad signup');
  }
    
    signupverification() {
    this.navCtrl.push(signupverification);
  }

}
