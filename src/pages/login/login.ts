import { signup0 } from './../signup0/signup0';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import {DataService} from '../../providers/data-service';
import { AlertController } from 'ionic-angular';

import {User} from '../../models/user-model';

import { resetpassword } from '../resetpassword/resetpassword';
import { signup } from '../signup/signup';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');


  }
  
  resetpassword(){
      this.navCtrl.push(resetpassword);
  }
  signup(){
      this.navCtrl.push(signup);
  }
    
  login(){
    console.log('login');

    let actionSheet = this.alertCtrl.create({
      title: 'Login Type',
      buttons: [
        {
          text: 'Individual',
          handler: () => {
            this.dataService.permission = 'individual';

            let newUser = new User('userCode0','individual','Chloe','Female','Auckland','NZ','M','Insurance','Single','Straight',1.67,'Kiwi',true,true,'Lets meet & drink',0,'123','101','G','A','D','C','Address','chloe@gmail.com','assets/images/girl3.jpg','assets/images/banner4.jpg','hashTest');
            this.dataService.users.push(newUser);
            this.dataService.account = newUser;
            this.dataService.getNotificationBadgeNumber();
            this.dataService.getMessageBadgeNumber();
            this.navCtrl.setRoot(TabsPage);
            localStorage.userType = 'individual';

          }
        },{
          text: 'Business',
          handler: () => {
            this.dataService.permission = 'business';

            let newUser = new User('userCode','business','Club City','G','C','C','M','O','I','O','H','N','D','S','A',4,'500','450','Hip Hop','18+','Casual',150,'34 Forte St','test@clubcity.com','assets/images/logo1.jpg','assets/images/banner5.jpg','hashTest');
           this.dataService.users.push(newUser);
            this.dataService.account = newUser;
            this.dataService.getNotificationBadgeNumber();
            this.dataService.getMessageBadgeNumber();
            this.navCtrl.setRoot(TabsPage);
            localStorage.userType = 'business';
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();


  }

}
