import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import {EventPage} from '../../pages/event/event';
import {ConversationPage} from '../../pages/conversation/conversation';
import {Conversation} from '../../models/conversation-model';

@Component({
  selector: 'page-club',
  templateUrl: 'club.html'
})
export class ClubPage {

  club:any;
  segment:any;
  background:any;
  user:any;
  events:any;
  counter = Array;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService) {

    this.user = this.navParams.get('user');

    this.segment = 'info';
  //  console.log(this.club);

this.start();

  }

  start(){
    this.events = this.dataService.events.filter(item => item.userCode == this.user.code);
    console.log(this.events);
  }

  openEvent(eventCode){
    this.navCtrl.push(EventPage,{
      eventCode:eventCode
    });

  }

  message(user){

    let me = this.dataService.account;
    let conversation2Open:any;

    if(conversation2Open = this.dataService.conversations.filter(item => item.participant1 == me.code && item.participant2 == user.code)[0]){

      this.navCtrl.push(ConversationPage,{
        conversation:conversation2Open
      });

    }else if (conversation2Open = this.dataService.conversations.filter(item => item.participant1 == user.code && item.participant2 == me.code)[0]){

      this.navCtrl.push(ConversationPage,{
        conversation:conversation2Open
      });
    }else{

      let newConversation = new Conversation(this.dataService.generateCode('conversation'),me.code,user.code,'');
      this.dataService.conversations.push(newConversation);

      this.navCtrl.push(ConversationPage,{
        conversation:newConversation
      });
      console.log('new conversation');
    }

    console.log(user);
  }


}
