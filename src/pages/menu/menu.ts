import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';

import { VenuesPage } from '../venues/venues';
import { EventsPage } from '../events/events';
import { SettingsPage } from '../settings/settings';


/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  options: Array<string> = ['Venues','Events','Bookings','Grab a Drink','Meet The Star','My Account','Friends','Contact Us','Share App'];
  menuIcons: Array<string> = ['sp-venue','sp-event','pricetag','sp-beer','star-outline','sp-account','people','paper-plane','sp-share'];

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  open(page){

    if(page == 'Venues'){
      this.navCtrl.push(VenuesPage);
    }else if(page == 'Events'){
      this.navCtrl.push(EventsPage);
    }else if(page == 'Settings'){
      this.navCtrl.push(SettingsPage);
    }
  }

  closeModal() {
    this.navCtrl.pop();
  }

}
