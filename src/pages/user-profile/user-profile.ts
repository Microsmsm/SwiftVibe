import { Component } from '@angular/core';
import { NavController, NavParams,ActionSheetController } from 'ionic-angular';
import {DataService} from '../../providers/data-service';


/**
 * Generated class for the UserProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {

  segment:any;
  userCode:any;
  user:any;
  type:any;
  counter = Array;

  images: Array<string> = ['assets/images/gallery1.jpg','assets/images/gallery2.jpg','assets/images/gallery.jpg','assets/images/banner2.jpg','assets/images/banner3.jpg'];

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService,public actionSheetCtrl:ActionSheetController) {

    this.userCode = this.navParams.get('userCode');



    this.start();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserProfilePage');
  }

  start(){
    this.segment = 'news';

    this.user = this.dataService.users.filter(item => item.code == this.userCode)[0];
    this.type = this.user.type;
    console.log(this.type);
      console.log(this.user);

  }
  options(){

    let actionSheet = this.actionSheetCtrl.create({
      title: 'Options',
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            console.log('message');

          }
        },{
          text: 'Share',
          handler: () => {
            console.log('message');

          }
        },{
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();

  }

}
