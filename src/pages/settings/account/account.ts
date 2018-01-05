import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {DataService} from '../../../providers/data-service';
import { App } from 'ionic-angular';

import { LoginPage } from '../../login/login';

/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountSettings {

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService,private app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  signOut(){

    this.app.getRootNav().push(LoginPage);

  }

  changePassword(){

  }

  delete(){

  }

}
