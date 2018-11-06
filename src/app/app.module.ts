import { signup0 } from './../pages/signup0/signup0';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ClubPage } from '../pages/club/club';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MessagesPage } from '../pages/messages/messages';
import { ConversationPage } from '../pages/conversation/conversation';
import { NotificationsPage } from '../pages/notifications/notifications';


import { LoginPage } from '../pages/login/login';
import { resetpassword } from '../pages/resetpassword/resetpassword';
import { resetpasswordsent } from '../pages/resetpasswordsent/resetpasswordsent';
import { signup } from '../pages/signup/signup';
import { signupsteps } from '../pages/signupsteps/signupsteps';
import { signupverification } from '../pages/signupverification/signupverification';

import { NewPostPage } from '../pages/new-post/new-post';
import { NewEventPage } from '../pages/new-event/new-event';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { EventPage } from '../pages/event/event';

import { EventsPage } from '../pages/events/events';

import { VenuesPage } from '../pages/venues/venues';
import { VenuePage } from '../pages/venue/venue';
import { EncountersPage } from '../pages/encounters/encounters';
import { MenuPage } from '../pages/menu/menu';

import { PreviewPage } from '../pages/preview/preview';
import { SearchPage } from '../pages/search/search';

import {ImagePage } from '../pages/image/image';


import { SettingsPage } from '../pages/settings/settings';
import { AccountSettings} from '../pages/settings/account/account';
import { BookingsSettings} from '../pages/settings/bookings/bookings';
import { PrivacySettings} from '../pages/settings/privacy/privacy';
import { TermsSettings} from '../pages/settings/terms/terms';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataService } from '../providers/data-service';

import { Camera } from '@ionic-native/camera';

import { HttpModule } from '@angular/http';
import {MenuComponent } from '../components/menu/menu';
import {ClubPostComponent } from '../components/club-post/club-post';

import {VenueComponent } from '../components/venue/venue';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ClubPage,
    HomePage,
    TabsPage,
    LoginPage,
    resetpassword,
    resetpasswordsent,
    signup0,
    signup,
    signupsteps,
    signupverification,
    NewPostPage,
    UserProfilePage,
    EventPage,
    MenuComponent,
    ClubPostComponent,
    VenuesPage,
    VenueComponent,
    VenuePage,
    EncountersPage,
    MenuPage,
    EventsPage,
    MessagesPage,
    NotificationsPage,
    SettingsPage,
    AccountSettings,
    BookingsSettings,
    PrivacySettings,
    TermsSettings,
    NewEventPage,
    PreviewPage,
    SearchPage,
    ImagePage,
    ConversationPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
        tabsHideOnSubPages: true
    }),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ClubPage,
    HomePage,
    TabsPage,
    LoginPage,
    resetpassword,
    resetpasswordsent,
    signup,
    signup0,
    signupsteps,
    signupverification,
    NewPostPage,
    UserProfilePage,
    EventPage,
    VenuesPage,
    VenuePage,
    EncountersPage,
    MenuPage,
    EventsPage,
    MessagesPage,
    NotificationsPage,
    SearchPage,
    SettingsPage,
    AccountSettings,
    BookingsSettings,
    PrivacySettings,
    TermsSettings,
    NewEventPage,
    PreviewPage,
    ImagePage,
    ConversationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService,Camera
  ]
})
export class AppModule {}
