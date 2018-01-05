import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import { AlertController } from 'ionic-angular';
import { resetpasswordsent } from '../resetpasswordsent/resetpasswordsent';

@Component({
  selector: 'resetpassword',
  templateUrl: 'resetpassword.html',
})
export class resetpassword {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad reset password');
  }
    
    resetpasswordsent(){
        this.navCtrl.push(resetpasswordsent);
    }

}
