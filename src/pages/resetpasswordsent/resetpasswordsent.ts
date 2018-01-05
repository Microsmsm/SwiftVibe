import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'resetpasswordsent',
  templateUrl: 'resetpasswordsent.html',
})
export class resetpasswordsent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad reset password sent');
  }
    
    login(){
        this.navCtrl.setRoot(LoginPage);
    }

}
