import { Component } from '@angular/core';
import {DataService} from '../../providers/data-service';
import { NavController } from 'ionic-angular';

import {EventPage} from '../../pages/event/event';
import {ClubPage} from '../../pages/club/club';


/**
 * Generated class for the ClubPostComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'club-post',
  templateUrl: 'club-post.html'
})
export class ClubPostComponent {

  text: string;

  constructor(public navCtrl: NavController,public dataService:DataService) {
    console.log('Hello ClubPostComponent Component');
    this.text = 'Hello World';
  }

  openEvent(eventCode){
    console.log('open club ?');
    this.navCtrl.push(EventPage,{
      eventCode:eventCode
    });
  }

  openProfile(userCode){
    let user = this.dataService.users.filter(item => item.code == userCode)[0];

    console.log('open club ?');
    this.navCtrl.push(ClubPage,{
      user:user
    });


  }

  getName(userCode){
    let user = this.dataService.users.filter(item => item.code == userCode)[0];
    return user.name;

  }

  getAvatar(userCode){
    let user = this.dataService.users.filter(item => item.code == userCode)[0];
    return user.image;
  }

}
