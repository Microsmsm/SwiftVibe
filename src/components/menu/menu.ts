import { Component } from '@angular/core';
import {DataService} from '../../providers/data-service';
import { VenuesPage } from '../../pages/venues/venues';
import { HomePage } from '../../pages/home/home';
import { EncountersPage } from '../../pages/encounters/encounters';

import { NavController } from 'ionic-angular';

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {

  text: string;

  constructor(public navCtrl: NavController,public dataService:DataService) {
    console.log('Hello MenuComponent Component');
    this.text = 'Hello World';
  }

  new(){

    console.log('hello yall');

    if( this.dataService.permission == 'user'){

      this.dataService.newUserPost = true;

    }else if(this.dataService.permission = 'club'){
      // this.navCtrl.push(NewPostPage);

      this.dataService.newUserPost = true;

    }

  }

  home(){
    this.navCtrl.setRoot(HomePage);
  }

  venue(){
    console.log('venue');

    this.navCtrl.setRoot(VenuesPage);


  }

  encounters(){
    this.navCtrl.setRoot(EncountersPage);


  }

}
