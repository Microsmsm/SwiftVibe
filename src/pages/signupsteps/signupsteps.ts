import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'signupsteps',
  templateUrl: 'signupsteps.html',
})
export class signupsteps {
    
    @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad signupsteps');
  }
    
    nextstep() {
    this.slides.slideNext();
  }
    
    login() {
    this.navCtrl.setRoot(LoginPage);
  }

}
