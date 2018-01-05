import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';
import { ClubPage } from '../club/club';
import {ImagePage } from '../image/image';

/**
 * Generated class for the EventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {

  eventCode:any;
  event:any;
  user:any

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService) {
    this.eventCode = this.navParams.get('eventCode');

    this.start();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

  start(){

    this.event = this.dataService.events.filter(item => item.code == this.eventCode)[0];
    this.user =  this.dataService.users.filter(item => item.code == this.event.userCode)[0];
    console.log(this.event);

  }

  openProfile(){

      console.log('open club ?');
      this.navCtrl.push(ClubPage,{
        user:this.user
      });


  }

  openImage(link){
    this.navCtrl.push(ImagePage,{
      link:link
    })
  }

}
