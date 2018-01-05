import { Component } from '@angular/core';
import {DataService} from '../../providers/data-service';
import {VenuePage} from '../../pages/venue/venue';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the VenueComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'venue',
  templateUrl: 'venue.html'
})
export class VenueComponent {

  text: string;

  constructor(public navCtrl: NavController,public dataService:DataService) {
    console.log('Hello VenueComponent Component');
    this.text = 'Hello World';
  }

  open(venue){
    this.navCtrl.push(VenuePage,{
      venue:venue
    });
  }

}
