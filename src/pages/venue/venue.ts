import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';

/**
 * Generated class for the VenuePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-venue',
  templateUrl: 'venue.html',
})
export class VenuePage {
  venue:any;
  segment:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService) {
    this.venue = this.navParams.get('venue');
    console.log(this.venue);

    this.segment = 'news';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VenuePage');
  }

}
