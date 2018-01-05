import { Component, NgZone } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { NewPostPage } from '../new-post/new-post';
import { NewEventPage } from '../new-event/new-event';
import { LoginPage } from '../login/login';
import { MenuPage } from '../menu/menu';
import { SearchPage } from '../search/search';

import { UserProfilePage } from '../user-profile/user-profile';
import {DataService} from '../../providers/data-service';
import { AlertController } from 'ionic-angular';

import { App } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

@ViewChild(Content) content: Content;

  public scrollAmount = 0;
  situationLabel:any;
  searchTerm:any;

  constructor(public navCtrl: NavController,public dataService:DataService,private alertCtrl: AlertController,private app: App,public zone: NgZone,public modalCtrl: ModalController) {

    this.dataService.newUserPost = false;
    this.dataService.atTop = true;
    this.situationLabel = "NEWS FEED";
  }

  open(){

    let actionSheet = this.alertCtrl.create({
      title: 'User',
      buttons: [
        {
          text: 'Profile',
          handler: () => {

            console.log(this.dataService.account.code);
            this.navCtrl.push(UserProfilePage,{

              userCode:this.dataService.account.code
            });

          }
        }, {
          text: 'Logout',
          handler: () => {

            this.app.getRootNav().push(LoginPage);


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

  scrollHandler(event) {
    this.zone.run(()=>{
      // since scrollAmount is data-binded,
      // the update needs to happen in zone

      if(this.content.scrollTop <= 0){
        console.log('top');
        this.dataService.atTop = true;
      }else{
        this.dataService.atTop = false;
      }

    })
  }

  scrollUp(){
    console.log('scroll up baby');
    this.content.scrollToTop();
  }

  new(){

    if(this.dataService.account.type == 'club'){
      this.navCtrl.push(NewEventPage);
    }else{
      this.navCtrl.push(NewPostPage);
    }

  }

  search(){

   // console.log(this.searchTerm);
    this.navCtrl.push(SearchPage,{
      search:this.searchTerm
    });
  }

  menu(){

    //let modal = this.modalCtrl.create(MenuPage);
   // modal.present();

   this.navCtrl.push(MenuPage);

   // this.navCtrl.parent.select('tab5Root');

  }

  close(){
    console.log('close please');
    this.dataService.newUserPost = false;
  }

}
