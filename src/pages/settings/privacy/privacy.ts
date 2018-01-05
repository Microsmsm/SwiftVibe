import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PrivacyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html',
})
export class PrivacySettings {

  options: Array<string> = ['Blocked Users','Who can message me','Search Visibility'];
  icons: Array<string> = ['sp-block','text','search'];
  descriptions: Array<string> = ['Block or Unblock users who can view your profile',
    'Manage who can send me messages',
    'Can a user search for your profile ?'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacyPage');
  }

}
