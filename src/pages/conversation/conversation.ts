import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController  } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import {DataService} from '../../providers/data-service';
import {Message} from '../../models/message-model';
import {Notification} from '../../models/notification-model';

/**
 * Generated class for the ConversationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {

  conversation:any;
  messages:any;
  participant:any;
  messageText:any;
  attachment:any;
  image:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService,private camera: Camera,public actionSheetCtrl:ActionSheetController) {

    this.conversation = this.navParams.get('conversation');

    this.start();
    this.getParticipant();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversationPage');
  }

  start(){

    //probelm here in
    if(this.dataService.messages.filter(item => item.code == this.conversation.code)){
      this.messages  = this.dataService.messages.filter(item => item.code == this.conversation.code);
    }



    console.log(this.messages);

  }

  getParticipant(){

    let tempUser:any;

    if(this.dataService.account.code == this.conversation.participant1){
      tempUser = this.conversation.participant2;
    }else{
      tempUser = this.conversation.participant1;
    }

    this.participant = this.dataService.users.filter(item => item.code == tempUser)[0];

  }

  getName(userCode){
    let tempUser:any;
    tempUser = this.dataService.users.filter(item => item.code == userCode)[0];
    return tempUser.name;
  }

  sendMessage(){
    if(this.messageText){


      let newMessage = new Message (this.conversation.code,this.dataService.account.code,this.participant.code,this.messageText,'');

      this.messages.push(newMessage);
      this.dataService.messages.push(newMessage);
      this.conversation.lastMessage = this.messageText;

      this.messageText = "";

      let newNotification = new Notification (this.dataService.generateCode('notification'),this.dataService.account.code,this.participant.code,'message','has sent you a message',this.conversation.code,false);
      this.dataService.notifications.push(newNotification);
      this.dataService.notificationBadge = this.dataService.notificationBadge + 1;
      console.log(newNotification);


    }
  }


  sendAttachment(){


    let actionSheet = this.actionSheetCtrl.create({
      title: 'Send Image',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);

          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);

          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  takePicture(sourceType) {


    // Get the data of an image
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      quality:100
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.image = "data:image/jpeg;base64," + imageData;
      this.image = this.image.replace(/(\r\n|\n|\r)/gm,"");
      this.messageText = " sent a photo.";

      let newMessage2 = new Message (this.conversation.code,this.dataService.account.code,this.participant.code,this.messageText,this.image);
      this.messages.push(newMessage2);
      this.dataService.messages.push(newMessage2);

      this.conversation.lastMessage = this.messageText;
      this.messageText = "";
      this.image = "";


    }, (err) => {

      console.log('error adding photo');
    });


  }

}
