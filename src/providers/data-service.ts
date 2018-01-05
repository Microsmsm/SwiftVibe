import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//MODELS

import {Post} from '../models/post-model';
import {User} from '../models/user-model';
import {Event} from '../models/event-model';
import {Venue} from '../models/venue-model';
import {Conversation} from '../models/conversation-model';
import {Message} from '../models/message-model';
import {Notification} from '../models/notification-model';



/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DataService {

  news:Array<Post> = new Array<Post>(); // array of all posts
  users:Array<User> = new Array<User>(); // array of all users codes

  friends:Array<User> = new Array<User>(); // array of all users codes
  followers:Array<User> = new Array<User>(); // array of all users codes
  encounters:Array<User> = new Array<User>(); // array of all users codes
  matches:Array<User> = new Array<User>(); // array of all users codes

  events:Array<Event> = new Array<Event>(); // array of all events codes
  venues:Array<Venue> = new Array<Venue>(); // array of all venues codes
  conversations:Array<Conversation> = new Array<Conversation>(); // array of all events codes
  messages:Array<Message> = new Array<Message>(); // array of all messages
  notifications:Array<Notification> = new Array<Notification>(); // array of all notifications


  permission:any;
  atTop:any;
  newUserPost:any;
  account:any;

  notificationBadge:any;
  messageBadge:any;


  images: Array<string> = ['images/gallery1.jpg','images/gallery2.jpg','images/gallery.jpg','images/banner2.jpg','images/banner3.jpg'];
  girls: Array<string> = ['images/girl1.jpg','images/girl2.jpg','images/girl3.jpg','images/girl4.jpg','images/girl5.jpg'];

  constructor(public http: Http) {
    console.log('Hello DataServiceProvider Provider');

    this.loadData();

  }

  loadData(){

    this.atTop = true;
    this.newUserPost = false;

    let newNews1 = new Post('testCode1','userCode1','business','','LADIES NIGHT','Arguably the best in central London, the Roxy’s rooftop deck offers stunning views of the midtown city skyline.','images/gallery.jpg','','12.3','3.4','32.1','eventCode1');
    let newNews2 = new Post('testCode2','userCode2','business','','HUNTED HALLOWEEN','Enjoy a cocktail or two from the comprehensive cocktail list with enticing choices like the Café Le Peche, an espresso martini with a twist.','images/club3.jpg','','11.3','10.4','32.1','eventCode2');
    let newNews3 = new Post('testCode3','userCode3','individual','','','TGIF People, lets meet up and get on it','','images/profile4.jpg','0','0','0','eventCode2');


    this.news.push(newNews3);
    this.news.push(newNews1);
    this.news.push(newNews2);

    let newUser1 = new User('userCode1','business','Deep Dome','G','C','C','M','O','I','O','H','N','D','S','A',4,2145,456,'Dance','18+','Dress to impress',500,'234 High Street','test@deepdome.com','images/logo2.jpg','images/gallery.jpg','hashTest');
    let newUser2 = new User('userCode2','business','Pure Night CLub','G','C','C','M','O','I','O','H','N','D','S','A',5,2000,1560,'Electro','18+','Formal',500,'1A Vault Drive','test@nightclub.com','images/logo.jpg','images/banner1.jpg','hashTest');
    let newUser3 = new User('userCode3','individual','Paula Rain','Female','London','UK','M','Accountant','Single','Straight',1.75,'British',true,true,'Looking for some fun',0,350,150,'G','A','D','C','Address','paula@gmail.com','images/profile2.jpg','','hashTest');
    let newUser4 = new User('userCode4','individual','Jemma','Female','Paris','France','M','Retail','Single','Straight',1.80,'French',true,true,'Lets drink',0,133,76,'G','A','D','C','Address','jemma@gmail.com','images/girl5.jpg','','hashTest');


    let newUser5 = new User('userCode5','individual','Sara Beaz','Female','Mexico City','Mexico','M','Accountant','Single','Straight',1.75,'British',true,true,'Looking for some fun',0,350,150,'G','A','D','C','Address','paula@gmail.com','images/profile5.jpg','','hashTest');
    let newUser6 = new User('userCode6','individual','James Hussein','Male','Shenzhen','China','M','Retail','Single','Straight',1.80,'French',true,true,'Lets drink',0,133,76,'G','A','D','C','Address','jemma@gmail.com','images/profile6.jpg','','hashTest');
    let newUser7 = new User('userCode7','individual','Karemiks','Male','London','UK','M','Accountant','Single','Straight',1.75,'British',true,true,'Looking for some fun',0,350,150,'G','A','D','C','Address','paula@gmail.com','images/profile7.jpg','','hashTest');
    let newUser8 = new User('userCode8','individual','Tiffany Watson','Female','Apia','Samia','M','Retail','Single','Straight',1.80,'French',true,true,'Lets drink',0,133,76,'G','A','D','C','Address','jemma@gmail.com','images/profile8.jpg','','hashTest');
    let newUser9 = new User('userCode9','individual','Megan Left','Auckland','New Zealand','UK','M','Accountant','Single','Straight',1.75,'British',true,true,'Looking for some fun',0,350,150,'G','A','D','C','Address','paula@gmail.com','images/profile9.jpg','','hashTest');
    let newUser10 = new User('userCode10','individual','Pauline','Female','Suva','Fiji','M','Retail','Single','Straight',1.80,'French',true,true,'Lets drink',0,133,76,'G','A','D','C','Address','jemma@gmail.com','images/profile10.jpg','','hashTest');

    this.users.push(newUser1);
    this.users.push(newUser2);
    this.users.push(newUser3);
    this.users.push(newUser4);
    this.users.push(newUser5);
    this.users.push(newUser6);
    this.users.push(newUser7);
    this.users.push(newUser8);
    this.users.push(newUser9);
    this.users.push(newUser10);

    this.friends.push(newUser3);
    this.friends.push(newUser4);
    this.followers.push(newUser1);
    this.followers.push(newUser2);

    this.encounters.push(newUser6);
    this.encounters.push(newUser7);

    this.matches.push(newUser5);
    this.matches.push(newUser8);
    this.matches.push(newUser9);
    this.matches.push(newUser10);


    let newEvent1 = new Event ('eventCode1','userCode1','LADIES NIGHT','Arguably the best in central London, the Roxy’s rooftop deck offers stunning views of the midtown city skyline.','101 The Avenue, Dunedin','Dance','Formal','Friday, 1st September','10:00','4:00','images/gallery.jpg','images/event.jpg','12.3','3.4');
    let newEvent2 = new Event ('eventCode2','userCode2','HUNTED HALLOWEEN','Enjoy a cocktail or two from the comprehensive cocktail list with enticing choices like the Café Le Peche, an espresso martini with a twist.','34 High Street, Auckland','Dance','Dress to impress','Friday, 1st September','10:30','4:00','images/club3.jpg','images/event1.jpg','11.3','10.4');

    this.events.push(newEvent1);
    this.events.push(newEvent2);


    let venue1 = new Venue('venueCode1','Venue 1',0,'images/venue1.png','images/venue1.jpg');
    let venue2 = new Venue('venueCode2','Venue 2',0,'images/venue4.jpg','images/venue2.jpg');
    let venue3 = new Venue('venueCode3','Venue 3',0,'images/venue2.png','images/venue3.jpg');


    this.venues.push(venue2);
    this.venues.push(venue1);
    this.venues.push(venue3);

    let conversation1 = new Conversation('convo1','userCode0','userCode3','Hey Watsup');
    let conversation2 = new Conversation('convo2','userCode4','userCode0','Lesssss go');
    let conversation3 = new Conversation('convo3','userCode0','userCode2','When is your next event?');

    this.conversations.push(conversation1);
    this.conversations.push(conversation2);
    this.conversations.push(conversation3);

    let message1 = new Message ('convo1','userCode0','userCode3','Hey Watsup','');
    let message2 = new Message ('convo2','userCode4','userCode0','Lesssss go','');
    let message3 = new Message ('convo3','userCode0','userCode2','When is your next event?','');

    this.messages.push(message1);
    this.messages.push(message2);
    this.messages.push(message3);

    let notification1 = new Notification ('notification1','userCode1','userCode3','new event','posted a new event','eventCode1',false);
    let notification2 = new Notification ('notification2','userCode2','userCode0','new event','posted a new event','eventCode2',false);
    let notification3 = new Notification ('notification3','userCode0','userCode3','message','has sent you a message','convo1',false);
    let notification4 = new Notification ('notification4','userCode4','userCode0','message','has sent you a message','convo2',false);
    let notification5 = new Notification ('notification5','userCode0','userCode2','message','has sent you a message','convo3',false);
    let notification6 = new Notification ('notification6','userCode1','userCode','new event','posted a new event','eventCode1',false);

    this.notifications.push(notification1);
    this.notifications.push(notification2);
    this.notifications.push(notification3);
    this.notifications.push(notification4);
    this.notifications.push(notification5);
    this.notifications.push(notification6);




  }

  getNotificationBadgeNumber(){
    console.log('checking for new notifications');
    let temp  = this.notifications.filter(item => item.recipient == this.account.code);
    if(temp){
      this.notificationBadge = temp.length;
      if(this.notificationBadge == 0){
        this.messageBadge = null;
      }
    }else{
      this.notificationBadge = null;
    }


  }

  getMessageBadgeNumber(){
    console.log('checking for new messages');
    let temp  = this.notifications.filter(item => item.recipient == this.account.code && item.action == 'message');
    if(temp){
      this.messageBadge = temp.length;
      if(this.messageBadge == 0){
        this.messageBadge = null;
      }
    }else{
      this.messageBadge = null;
    }


  }

  generateCode(type){

    //new user code

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 50; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    text = type + text;

    return text;


  }

}
