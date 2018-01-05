import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {User} from '../../models/user-model';
import {Event} from '../../models/event-model';
import {Venue} from '../../models/venue-model';

import {DataService} from '../../providers/data-service';

/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  users:Array<User> = new Array<User>(); // array of all users codes
  events:Array<Event> = new Array<Event>(); // array of all events codes
  venues:Array<Venue> = new Array<Venue>(); // array of all venues codes

  searchTerm:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataService:DataService) {

    this.searchTerm = this.navParams.get('search');
    this.search(this.searchTerm);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }


  search(searchWord){
    console.log(searchWord);

    if(searchWord){

      searchWord = searchWord.toUpperCase();

      this.users.length = 0;
      this.events.length = 0;
      this.venues.length = 0;

      this.users = this.dataService.users.filter(item => (item.name.toUpperCase()).indexOf(searchWord) >=0);
      this.events = this.dataService.events.filter(item => (item.name.toUpperCase()).indexOf(searchWord) >=0);
      this.venues = this.dataService.venues.filter(item => (item.name.toUpperCase()).indexOf(searchWord) >=0);

    }else{
      console.log('empty string');
    }



  }
}
