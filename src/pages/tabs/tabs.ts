import {NavController, Tabs, ViewController} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';

import {EncountersPage} from '../encounters/encounters';
import {ClubPage} from '../club/club';
import {HomePage} from '../home/home';
import {MessagesPage} from '../messages/messages';
import {NotificationsPage} from '../notifications/notifications';
import {MenuPage} from '../menu/menu';

import {DataService} from '../../providers/data-service';

@Component({selector: 'page-tabs', templateUrl: 'tabs.html'})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagesPage;
  tab3Root = EncountersPage;
  tab4Root = NotificationsPage;

  userType = '';
  showCameraButton = true;
  @ViewChild('myTabs')tabRef : Tabs;

  constructor(public dataService : DataService, public navCtrl : NavController, public viewCtrl : ViewController) {

    this.userType = dataService.permission

    // .subscribe(e=>{   console.log(e,this.viewCtrl.index);
    // if(this.viewCtrl.index>0){     this.showCameraButton = false;   } })
    // this.dataService.atTop = true;

  }

  ionViewDidEnter() {
    console.log('entered');
    this.showCameraButton = true;
    this.viewCtrl
      .willEnter
      .subscribe(e => {
        console.log(e);
        console.log(this.viewCtrl.index);
        console.log(this.viewCtrl);
        if (this.viewCtrl.index > 0) {
          this.showCameraButton = false;
        }
      })

  }
  ionViewDidLeave() {
    console.log('I am leaving fuck you');
    this.showCameraButton = false;
  }

  // ionViewWillLeave(){   console.log('leaving');   this.showCameraButton =
  // false; }

}