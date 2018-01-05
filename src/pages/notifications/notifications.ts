import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';

import { ConversationPage } from '../conversation/conversation';
import { EventPage } from '../event/event';

/**
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {

  me:any;
  notifications:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService) {

    this.me = this.dataService.account;
    this.getNotifications();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
    this.dataService.notificationBadge = null;
  }

  ionViewDidEnter(){
    //get notifications
    this.dataService.notificationBadge = null;
    this.getNotifications();

  }
  getNotifications(){

    this.notifications  = this.dataService.notifications.filter(item => item.recipient == this.me.code);
    console.log(this.notifications);
    console.log('notifications printed');

  }


  getAvatar(notification){
    let tempUser;
    let tempUserCode = notification.sender;
    tempUser = this.dataService.users.filter(item => item.code == tempUserCode)[0];
    return tempUser.image;
  }

  getName(notification){
    let tempUser;
    let tempUserCode = notification.sender;
    tempUser = this.dataService.users.filter(item => item.code == tempUserCode)[0];
    return tempUser.name;
  }

  attendNotification(notification){

    notification.seen = true;

    if(notification.action == 'message'){



      let conversationCode = notification.data;
      let conversation  = this.dataService.conversations.filter(item => item.code == conversationCode)[0];

      this.navCtrl.push(ConversationPage,{
        conversation:conversation
      })

    }else if(notification.action == 'new event'){
      console.log(notification);
      let eventCode = notification.data;
      this.navCtrl.push(EventPage,{
        eventCode:eventCode
      })


    }

  }

  getEventInfo(notification){
    let eventCode = notification.data;
    let message = "";
    let event  = this.dataService.events.filter(item => item.code == eventCode)[0];

    message = event.name + " @ " + event.where;

    return message;


  }

}
