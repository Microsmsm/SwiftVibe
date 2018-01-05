import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import { ConversationPage } from '../conversation/conversation';

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  me:any;
  conversations:any;
  segment:any = 'chats';

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService) {
    console.log(this.dataService.conversations);
    this.start();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagesPage');
    this.dataService.messageBadge = null;
  }
    
  start(){
    this.me = this.dataService.account;
    this.conversations = this.dataService.conversations.filter(item => item.participant1 == this.me.code || item.participant2 == this.me.code);
    console.log(this.conversations);
    console.log('conversations retrieved');
    console.log(this.me);

  }
    
  openConversations(conversation){
    console.log(conversation);

    this.navCtrl.push(ConversationPage,{
      conversation:conversation
    })
  }

  getAvatar(conversation){
    let tempUser;
    let tempUserCode;

     if(this.me.code == conversation.participant1){
       tempUserCode = conversation.participant2;
     }else{
       tempUserCode = conversation.participant1;
     }

   tempUser = this.dataService.users.filter(item => item.code == tempUserCode)[0];

    return tempUser.image;
  }

  getName(conversation){
    let tempUser;
    let tempUserCode;

    if(this.me.code == conversation.participant1){
      tempUserCode = conversation.participant2;
    }else{
      tempUserCode = conversation.participant1;
    }

    tempUser = this.dataService.users.filter(item => item.code == tempUserCode)[0];

    return tempUser.name;
  }

}
