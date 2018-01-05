import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';

import { ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';

import { MenuPage } from '../menu/menu';

/**
 * Generated class for the EncountersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-encounters',
  templateUrl: 'encounters.html',
})
export class EncountersPage {
@ViewChild(Content) content: Content;

  public scrollAmount = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService,public zone: NgZone) {
    this.dataService.atTop = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncountersPage');
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

  menu(){


    this.navCtrl.push(MenuPage);

  }

}
