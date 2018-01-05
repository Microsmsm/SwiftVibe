import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService} from '../../providers/data-service';


/**
 * Generated class for the PreviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {

  post:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService) {
    this.post = this.navParams.get('post');
    console.log(this.post);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewPage');
  }

  getName(userCode){
    let user = this.dataService.users.filter(item => item.code == userCode)[0];
    return user.name;

  }

  getAvatar(userCode){
    let user = this.dataService.users.filter(item => item.code == userCode)[0];
    return user.image;
  }

  save(){
    this.dataService.news.splice(0,0,this.post);
    this.navCtrl.parent.select(0);
  }

}
