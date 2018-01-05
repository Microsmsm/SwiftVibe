import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {
link:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.link = this.navParams.get('link');
    console.log()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImagePage');
  }

}
