import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AccountSettings} from '../settings/account/account';
import { BookingsSettings} from '../settings/bookings/bookings';
import { PrivacySettings} from '../settings/privacy/privacy';
import { TermsSettings} from '../settings/terms/terms';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  options: Array<string> = ['Bookings','News Feed Preferences','Notifications','Encounters','Privacy','Manage Account','Terms & Conditions'];
  icons: Array<string> = ['pricetag','list','notifications','sp-encounter','sp-privacy','sp-manage','sp-terms'];
  descriptions: Array<string> = ['Manage booking profile, auto-reminders and more',
    'Manage what you see on your news feed',
    'Manage when to receive push notifications',
    'Manage users who will appear as your encounters',
    'Manage & secure your privacy',
    'Manage your account settings',
    'View everything about our terms'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  open(option){
    if(option == 'Bookings'){
      this.navCtrl.push(BookingsSettings);

    }else if(option == 'Privacy'){
      this.navCtrl.push(PrivacySettings);

    }else if(option == 'Manage Account'){
      this.navCtrl.push(AccountSettings);

    }else if(option == 'Terms & Conditions'){
      this.navCtrl.push(TermsSettings);

    }
  }

}
