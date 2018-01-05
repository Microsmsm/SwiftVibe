import { Component } from '@angular/core';

import { EncountersPage } from '../encounters/encounters';
import {  ClubPage } from '../club/club';
import { HomePage } from '../home/home';
import { MessagesPage } from '../messages/messages';
import { NotificationsPage } from '../notifications/notifications';
import { MenuPage } from '../menu/menu';

import {DataService} from '../../providers/data-service';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagesPage;
  tab3Root = EncountersPage;
  tab4Root = NotificationsPage;



  constructor(public dataService:DataService) {

    console.log('opening tabs');
    //this.dataService.atTop = true;

  }
}
