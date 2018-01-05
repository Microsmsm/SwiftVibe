import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';

import {EventPage} from '../event/event';
import {ClubPage} from '../club/club';
import {MenuPage} from '../menu/menu';

/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  openEvent(eventCode){
    console.log('open club ?');
    this.navCtrl.push(EventPage,{
      eventCode:eventCode
    });
  }

  openProfile(userCode){
    let user = this.dataService.users.filter(item => item.code == userCode)[0];

    console.log('open club ?');
    this.navCtrl.push(ClubPage,{
      user:user
    });


  }

  getName(userCode){
    let user = this.dataService.users.filter(item => item.code == userCode)[0];
    return user.name;

  }

  getAvatar(userCode){
    let user = this.dataService.users.filter(item => item.code == userCode)[0];
    return user.image;
  }

  menu(){


    this.navCtrl.push(MenuPage);

  }

}
