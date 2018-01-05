import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import {DataService} from '../../providers/data-service';
import { PreviewPage } from '../preview/preview';

/**
 * Generated class for the NewEventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html'
})
export class NewEventPage {


  today = new Date();
  image:any;
  background:any;
  name:any;
  details:any;
  where:any;
  genre:any;
  dressCode:any;
  date:any;
  startTime:any;
  endTime:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService,private camera: Camera,public actionSheetCtrl:ActionSheetController) {

    this.start();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewEventPage');
  }

  start(){


    this.setupTime();
    this.image = "";
    this.background = "";


  }

  preview(){

    this.navCtrl.push(PreviewPage);

  }

  setupTime() {

    let tempTime;

    tempTime = new Date();
    tempTime.setMinutes(0);

    this.startTime = tempTime.toISOString();
    this.endTime = tempTime.toISOString();

    this.today.setHours(0, -this.today.getTimezoneOffset(), 0, 0); //removing the timezone offset.
    this.date = this.today.toISOString();

    console.log(this.startTime);
    console.log(this.endTime);
    console.log(this.date);

  }

  getPicture(type) {

    console.log(type);

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
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

    console.log(imageType);

    // Get the data of an image
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: sourceType,
      quality:100
    }).then((imageData) => {
      // imageData is a base64 encoded string
      tempImage = "data:image/jpeg;base64," + imageData;
      tempImage = tempImage.replace(/(\r\n|\n|\r)/gm,"");

      if(imageType == 'background'){
        this.background = tempImage;
      }else{
        this.image = tempImage;
      }


    }, (err) => {

      console.log('error adding photo');
    });


  }

}
