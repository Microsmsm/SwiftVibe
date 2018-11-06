import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { PreviewPage } from '../preview/preview';
import {Post} from '../../models/post-model';
import {DataService} from '../../providers/data-service';
import { NewEventPage } from '../new-event/new-event';

@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {

  text: string;
  image:any;
  background:any;
  privacy:any;

  today = new Date();
  date:any;
  userType:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService,private camera: Camera,public actionSheetCtrl:ActionSheetController) {

    this.start();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');

    this.userType = this.dataService.permission;
  }

  start(){

    //this.setupTime();

    this.image = "";
    this.background = "";
    this.privacy = 'Public';

    this.text = "";

  }
  createEvent(){
    this.navCtrl.push(NewEventPage)
  }


  setupTime() {

    let tempTime;

    tempTime = new Date();
    tempTime.setMinutes(0);



    this.today.setHours(0, -this.today.getTimezoneOffset(), 0, 0); //removing the timezone offset.
    this.date = this.today.toISOString();

    console.log(this.today);
    console.log(this.date);

  }

  generateCode(){

    //new user code

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 100; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;


  }

  promptPicture(){

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Image',
          handler: () => {
            this.getPicture('Image');

          }
        },
        {
          text: 'Background',
          handler: () => {
            this.getPicture('Background');

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



  getPicture(type) {

    console.log(type);

    let actionSheet = this.actionSheetCtrl.create({
      title: type + ' Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY,type);

          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA,type);

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

  takePicture(sourceType,imageType) {

    let tempImage:any;


    // Get the data of an image
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      quality:100
    }).then((imageData) => {
      // imageData is a base64 encoded string
      tempImage = "data:image/jpeg;base64," + imageData;
      tempImage = tempImage.replace(/(\r\n|\n|\r)/gm,"");

      if(imageType == 'Background'){
        this.background = tempImage;
      }else{
        this.image = tempImage;
      }


    }, (err) => {

      console.log('error adding photo');
    });


  }

  removePhoto(){
    this.image = '';
  }

  preview(){

    this.setupTime();

    let newPost = new Post(this.generateCode(),this.dataService.account.code,this.dataService.account.type,this.date,'',this.text,this.background,this.image,'0','0','0','');


    this.navCtrl.push(PreviewPage,{
      post:newPost
    });

    //this.news.push(newNews1);

  }

}
