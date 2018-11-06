webpackJsonp([12],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_event__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__club_club__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EventsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EventsPage = (function () {
    function EventsPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
    }
    EventsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventsPage');
    };
    EventsPage.prototype.openEvent = function (eventCode) {
        console.log('open club ?');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__event_event__["a" /* EventPage */], {
            eventCode: eventCode
        });
    };
    EventsPage.prototype.openProfile = function (userCode) {
        var user = this.dataService.users.filter(function (item) { return item.code == userCode; })[0];
        console.log('open club ?');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__club_club__["a" /* ClubPage */], {
            user: user
        });
    };
    EventsPage.prototype.getName = function (userCode) {
        var user = this.dataService.users.filter(function (item) { return item.code == userCode; })[0];
        return user.name;
    };
    EventsPage.prototype.getAvatar = function (userCode) {
        var user = this.dataService.users.filter(function (item) { return item.code == userCode; })[0];
        return user.image;
    };
    EventsPage.prototype.menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
    };
    return EventsPage;
}());
EventsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-events',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/events/events.html"*/'<!--\n  Generated template for the EventsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n\n\n    <ion-row>\n\n      <ion-col text-center col-9>\n        <p style="color: #ffffff;">EVENTS</p>\n      </ion-col>\n      <ion-col text-right col-3 >\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding class="events">\n\n  <ion-fab bottom right class="menu" >\n    <button ion-fab  color="black"  (click)="menu()"  >\n      <ion-icon style="font-size: 30px;" name="menu" color="light" item-end></ion-icon>\n    </button>\n  </ion-fab>\n\n  <h2 style="text-align: center">Featured Events</h2>\n\n  <div style="height: 25%" class=" animated slideInRight">\n    <ion-slides   autoplay="2000" loop="true" speed="2000" slidesPerView="2.5" spaceBetween="2"  >\n\n\n      <ion-slide *ngFor="let event of dataService.events" [style.background-image]="\' url(\'+event.backgroundImage+\')\'" style="object-fit: cover;height:100%;">\n        <div style="height: 60%">\n          <h2>&nbsp;</h2>\n        </div>\n\n        <div style="height: 40%">\n          <h2>{{getName(event.userCode)}}</h2>\n        </div>\n\n      </ion-slide>\n\n\n    </ion-slides>\n  </div>\n  <div style="height: 75%">\n    <div class="post animated slideInUp"  *ngFor="let event of dataService.events"  [style.background-image]="\' url(\'+event.backgroundImage+\')\'" >\n      <div class="seperator"></div>\n      <div class="postInfo">\n        <ion-grid>\n          <ion-row  >\n            <ion-item no-lines text-left color="clear" (click)="openProfile(event.userCode)" >\n              <ion-avatar item-start  >\n                <img src="{{getAvatar(event.userCode)}}" style="object-fit: cover; border-color: #fff;border: solid;" >\n              </ion-avatar>\n              <h2>{{getName(event.userCode)}}</h2>\n              <p>\n                <ion-icon style="font-size: 20px;" name="musical-notes" color="light"></ion-icon>\n                <small> {{event.genre}}</small></p>\n              <div item-end text-right>\n                <h2>MAR</h2>\n              <h1>14</h1>\n                </div>\n            </ion-item>\n          </ion-row>\n\n\n          <ion-row style="padding-top: 15%;">\n            <ion-col padding (click)="openEvent(event.code)">\n              <h3 class="animated bounceIn">{{event.name}}</h3>\n              <p class="animated flipInX">{{event.details}}</p>\n              <ion-row>\n                <p item-end >\n                  <small>\n                    <ion-icon style="font-size: 20px;" name="eye" color="light"></ion-icon> {{event.viewCount}} k\n                    &nbsp;\n                    <ion-icon style="font-size: 20px;" name="sp-ice" color="light"></ion-icon> 16.3 k\n                    &nbsp;\n                    <ion-icon style="font-size: 20px;" name="sp-fire" color="light"></ion-icon> {{event.engageCount}} k\n                  </small>\n                </p>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n\n\n        </ion-grid>\n      </div>\n\n      <ion-row style="background-color: #000;" text-center>\n        <ion-col col-3>\n\n            <ion-icon style="font-size: 30px;"  name="sp-venue" color="light"></ion-icon>\n\n        </ion-col>\n        <ion-col col-3>\n\n            <ion-icon style="font-size: 30px;"  name="sp-ice" color="light"></ion-icon>\n\n        </ion-col>\n        <ion-col col-3>\n\n            <ion-icon style="font-size: 30px;"  name="sp-fire" color="light"></ion-icon>\n\n        </ion-col>\n        <ion-col col-3>\n\n            <ion-icon style="font-size: 30px;"  name="sp-share" color="light"></ion-icon>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row style="background-color: #171a27; " >\n        <ion-col col-10 >\n\n          <ion-input type="text" placeholder="&nbsp; Leave Your Comments Here" style="border-color: #ffffff;border:solid; border-radius: 5px;">\n\n\n          </ion-input>\n        </ion-col>\n\n        <ion-col  col-2>\n\n          <button ion-fab  color="clear"  text-center  >\n            <ion-icon name="text"></ion-icon>\n          </button>\n\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n\n  </div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/events/events.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */]])
], EventsPage);

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ImagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ImagePage = (function () {
    function ImagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.link = this.navParams.get('link');
        console.log();
    }
    ImagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImagePage');
    };
    return ImagePage;
}());
ImagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-image',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/image/image.html"*/'<!--\n  Generated template for the ImagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="imagePage" >\n\n  <img src="{{link}}" style="object-fit: cover;">\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/image/image.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ImagePage);

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.users = new Array(); // array of all users codes
        this.events = new Array(); // array of all events codes
        this.venues = new Array(); // array of all venues codes
        this.searchTerm = this.navParams.get('search');
        this.search(this.searchTerm);
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.search = function (searchWord) {
        console.log(searchWord);
        if (searchWord) {
            searchWord = searchWord.toUpperCase();
            this.users.length = 0;
            this.events.length = 0;
            this.venues.length = 0;
            this.users = this.dataService.users.filter(function (item) { return (item.name.toUpperCase()).indexOf(searchWord) >= 0; });
            this.events = this.dataService.events.filter(function (item) { return (item.name.toUpperCase()).indexOf(searchWord) >= 0; });
            this.venues = this.dataService.venues.filter(function (item) { return (item.name.toUpperCase()).indexOf(searchWord) >= 0; });
        }
        else {
            console.log('empty string');
        }
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/search/search.html"*/'<ion-header>\n    <ion-navbar class="searchForm">\n        <ion-input [(ngModel)]="searchTerm" type="text" placeholder="Search Here" (keyup.enter)="search(searchTerm)" autofocus></ion-input>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="search(searchTerm)">\n        <ion-icon end style="font-size: 30px;" name="search" color="light" ></ion-icon>\n      </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="search">\n    <ion-list no-lines *ngIf="users.length">\n        <ion-list-header>\n            <h2>FRIENDS</h2>\n        </ion-list-header>\n\n        <ion-item *ngFor="let user of users" no-lines>\n            <ion-avatar item-start>\n                <img src="{{user.image}}">\n            </ion-avatar>\n            <h2>{{user.name}}</h2>\n            <p>{{user.followersCount}} Followers <span class="dot">♦</span> {{user.followingCount}} Following </p>\n            <img item-end src="assets/imgs/searchlistIcon.png" class="searchlistIcon">\n        </ion-item>\n    </ion-list>\n\n    <ion-list no-lines *ngIf="venues.length">\n        <ion-list-header>\n            <h2>VENUES</h2>\n        </ion-list-header>\n\n        <ion-item *ngFor="let venue of venues" no-lines>\n            <ion-avatar item-start>\n                <img src="{{venue.image}}">\n            </ion-avatar>\n            <h2>{{venue.name}}</h2>\n        </ion-item>\n    </ion-list>\n\n    <ion-list no-lines *ngIf="events.length">\n        <ion-list-header>\n            <h2>EVENTS</h2>\n        </ion-list-header>\n\n        <ion-item *ngFor="let event of events" no-lines>\n            <ion-avatar item-start>\n                <img src="{{event.image}}">\n            </ion-avatar>\n            <h2>{{event.name}}</h2>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conversation_conversation__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesPage = (function () {
    function MessagesPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.segment = 'chats';
        console.log(this.dataService.conversations);
        this.start();
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagesPage');
        this.dataService.messageBadge = null;
    };
    MessagesPage.prototype.start = function () {
        var _this = this;
        this.me = this.dataService.account;
        this.conversations = this.dataService.conversations.filter(function (item) { return item.participant1 == _this.me.code || item.participant2 == _this.me.code; });
        console.log(this.conversations);
        console.log('conversations retrieved');
        console.log(this.me);
    };
    MessagesPage.prototype.openConversations = function (conversation) {
        console.log(conversation);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__conversation_conversation__["a" /* ConversationPage */], {
            conversation: conversation
        });
    };
    MessagesPage.prototype.getAvatar = function (conversation) {
        var tempUser;
        var tempUserCode;
        if (this.me.code == conversation.participant1) {
            tempUserCode = conversation.participant2;
        }
        else {
            tempUserCode = conversation.participant1;
        }
        tempUser = this.dataService.users.filter(function (item) { return item.code == tempUserCode; })[0];
        return tempUser.image;
    };
    MessagesPage.prototype.getName = function (conversation) {
        var tempUser;
        var tempUserCode;
        if (this.me.code == conversation.participant1) {
            tempUserCode = conversation.participant2;
        }
        else {
            tempUserCode = conversation.participant1;
        }
        tempUser = this.dataService.users.filter(function (item) { return item.code == tempUserCode; })[0];
        return tempUser.name;
    };
    return MessagesPage;
}());
MessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-messages',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/messages/messages.html"*/'<ion-header class="transparentBG">\n    <ion-navbar>\n        <ion-title>MESSAGES</ion-title>\n    </ion-navbar>\n    <div class="seperator"></div>\n</ion-header>\n\n<ion-content class="messages">\n    <ion-segment [(ngModel)]="segment" color="dark">\n        <ion-segment-button value="chats">\n            CHATS\n            <div class="seperator"></div>\n        </ion-segment-button>\n        <ion-segment-button value="active">\n            ACTIVE NOW\n            <div class="seperator"></div>\n        </ion-segment-button>\n    </ion-segment>\n\n    <div [ngSwitch]="segment">\n        <ion-list no-lines *ngSwitchCase="\'chats\'">\n            <p ion-text color="light">Recent Chats</p>\n            <ion-scroll scrollX="true">\n                <ion-item *ngFor="let conversation of conversations" class="scroll-item">\n                    <ion-avatar>\n                        <ion-badge color="secondary">•</ion-badge>\n                        <img src="{{getAvatar(conversation)}}" />\n                    </ion-avatar>\n                    <h2 text-center>{{getName(conversation).split(\' \')[0]}}</h2>\n                </ion-item>\n            </ion-scroll>\n            <ion-item *ngFor="let conversation of conversations" (click)="openConversations(conversation)">\n                <ion-avatar item-start large>\n                    <img src="{{getAvatar(conversation)}}" style="object-fit: cover;">\n                </ion-avatar>\n                <h2>{{getName(conversation)}}</h2>\n                <p>{{conversation.lastMessage}}</p>\n                <p class="timedis" text-right>2 mins ago</p>\n            </ion-item>\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'active\'">\n            <ion-item>\n                <ion-thumbnail item-start>\n                    <img src="assets/img/thumbnail-kitten-1.jpg">\n                </ion-thumbnail>\n                <h2>Luna</h2>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/messages/messages.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */]])
], MessagesPage);

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__conversation_conversation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_event__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NotificationsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NotificationsPage = (function () {
    function NotificationsPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.me = this.dataService.account;
        this.getNotifications();
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotificationsPage');
        this.dataService.notificationBadge = null;
    };
    NotificationsPage.prototype.ionViewDidEnter = function () {
        //get notifications
        this.dataService.notificationBadge = null;
        this.getNotifications();
    };
    NotificationsPage.prototype.getNotifications = function () {
        var _this = this;
        this.notifications = this.dataService.notifications.filter(function (item) { return item.recipient == _this.me.code; });
        console.log(this.notifications);
        console.log('notifications printed');
    };
    NotificationsPage.prototype.getAvatar = function (notification) {
        var tempUser;
        var tempUserCode = notification.sender;
        tempUser = this.dataService.users.filter(function (item) { return item.code == tempUserCode; })[0];
        return tempUser.image;
    };
    NotificationsPage.prototype.getName = function (notification) {
        var tempUser;
        var tempUserCode = notification.sender;
        tempUser = this.dataService.users.filter(function (item) { return item.code == tempUserCode; })[0];
        return tempUser.name;
    };
    NotificationsPage.prototype.attendNotification = function (notification) {
        notification.seen = true;
        if (notification.action == 'message') {
            var conversationCode_1 = notification.data;
            var conversation = this.dataService.conversations.filter(function (item) { return item.code == conversationCode_1; })[0];
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__conversation_conversation__["a" /* ConversationPage */], {
                conversation: conversation
            });
        }
        else if (notification.action == 'new event') {
            console.log(notification);
            var eventCode = notification.data;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__event_event__["a" /* EventPage */], {
                eventCode: eventCode
            });
        }
    };
    NotificationsPage.prototype.getEventInfo = function (notification) {
        var eventCode = notification.data;
        var message = "";
        var event = this.dataService.events.filter(function (item) { return item.code == eventCode; })[0];
        message = event.name + " @ " + event.where;
        return message;
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/notifications/notifications.html"*/'<!--\n  Generated template for the NotificationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><small>NOTIFICATIONS</small></ion-title>\n  </ion-navbar>\n  <div class="seperator"></div>\n</ion-header>\n\n\n<ion-content class="notifications" >\n\n  <ion-list no-lines >\n    <ion-item *ngFor="let notification of notifications" (click)="attendNotification(notification)">\n      <ion-avatar item-start large>\n        <img src="{{getAvatar(notification)}}" style="object-fit: cover;" >\n      </ion-avatar>\n      <h2>{{getName(notification)}}</h2>\n      <p class="eventPosts">{{notification.text}}</p>\n      <p *ngIf="notification.action == \'new event\'">{{getEventInfo(notification)}}</p>\n     <p class="timedis" text-right>2 mins ago</p>\n    </ion-item>\n      \n    \n      \n      \n      \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/notifications/notifications.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VenuePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VenuePage = (function () {
    function VenuePage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.venue = this.navParams.get('venue');
        console.log(this.venue);
        this.segment = 'news';
    }
    VenuePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VenuePage');
    };
    return VenuePage;
}());
VenuePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-venue',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/venue/venue.html"*/'<!--\n  Generated template for the VenuePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="venue" >\n\n  <div class="venueHead" [style.background-image]="\' url(\'+venue.backgroundImage+\')\'"  >\n\n    <div class="venueInfo " style="min-height: 100%"  >\n\n      <div style="height: 25%" >\n\n        <img src="assets/images/placeholder2.png"  style="object-fit: cover;" />\n\n      </div>\n\n      <div style="height: 75%">\n\n        <div padding-left>\n          <div class="custom-avatar" >\n            <img src="{{venue.image}}"  style="object-fit: cover;"  />\n          </div>\n        </div>\n\n        <ion-grid style="height: 100%" >\n\n\n          <ion-row class="animated flipInX">\n            <h2 text-left >&nbsp;</h2>\n          </ion-row>\n\n\n\n          <ion-row >\n            <ion-item no-lines text-left>\n              <button color="light" item-end outline  ion-button class="animated slideInLeft" ><ion-icon name="chatbubbles"></ion-icon> &nbsp; Message</button>\n              <button color="light" item-end outline  ion-button class="animated slideInRight" > <ion-icon name="person-add"></ion-icon> &nbsp; Following</button>\n\n            </ion-item>\n          </ion-row>\n\n\n\n          <ion-row >\n            <h2 text-left >{{venue.name}}</h2>\n          </ion-row>\n\n          <ion-row >\n            <ion-col col-6>\n              <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon>\n\n            </ion-col>\n\n            <ion-col col-6 text-right>\n              4500 Followers\n            </ion-col>\n          </ion-row>\n\n\n          <ion-row >\n\n            <ion-slides   autoplay="2000" loop="true" speed="2000" slidesPerView="4.5" spaceBetween="2" >\n\n              <ion-slide >\n                <img src="assets/images/gallery.jpg">\n              </ion-slide>\n\n              <ion-slide >\n                <img src="assets/images/gallery1.jpg" >\n              </ion-slide>\n\n              <ion-slide>\n                <img src="assets/images/gallery2.jpg" >\n              </ion-slide>\n\n              <ion-slide>\n                <img src="assets/images/club1.png" >\n              </ion-slide>\n\n            </ion-slides>\n\n          </ion-row>\n\n\n\n\n        </ion-grid>\n\n\n      </div>\n\n\n    </div>\n\n\n  </div>\n\n  <div padding-top padding-bottom >\n    <ion-segment [(ngModel)]="segment" color="light">\n      <ion-segment-button class="animated zoomInUp" value="events" style="font-family: gilroy;">\n        Events\n      </ion-segment-button>\n      <ion-segment-button class="animated zoomInUp" value="news" style="font-family: gilroy;">\n        News Feed\n      </ion-segment-button>\n      <ion-segment-button class="animated zoomInUp" value="gallery" style="font-family: gilroy;">\n        Gallery\n      </ion-segment-button>\n      <ion-segment-button class="animated zoomInUp" value="info" style="font-family: gilroy;">\n        Info\n      </ion-segment-button>\n\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch] ="segment">\n\n    <ion-list *ngSwitchCase="\'events\'" no-lines>\n      <ng-container>\n\n      </ng-container>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'news\'" no-lines>\n      <ng-container>\n\n        <club-post></club-post>\n      </ng-container>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'gallery\'" no-lines>\n\n      <div class="gallery"    *ngFor="let image of dataService.assets/images" [style.background-image]="\' url(\'+image+\')\'">\n        <ion-row style="min-height: 100%;">\n          <ion-col col-12 text-right padding >\n            <img src="assets/images/placeholder2.png" >\n\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'info\'" no-lines>\n      <ng-container >\n\n      </ng-container>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/venue/venue.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */]])
], VenuePage);

//# sourceMappingURL=venue.js.map

/***/ }),

/***/ 127:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/conversation/conversation.module": [
		305,
		11
	],
	"../pages/encounters/encounters.module": [
		306,
		10
	],
	"../pages/events/events.module": [
		307,
		9
	],
	"../pages/image/image.module": [
		308,
		8
	],
	"../pages/menu/menu.module": [
		309,
		7
	],
	"../pages/messages/messages.module": [
		310,
		6
	],
	"../pages/new-event/new-event.module": [
		311,
		5
	],
	"../pages/notifications/notifications.module": [
		312,
		4
	],
	"../pages/preview/preview.module": [
		313,
		3
	],
	"../pages/search/search.module": [
		314,
		2
	],
	"../pages/venue/venue.module": [
		315,
		1
	],
	"../pages/venues/venues.module": [
		316,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
/**
 * Created by astimlee on 3/08/2017.
 */
var Post = (function () {
    function Post(code, userCode, type, date, title, description, backgroundImage, image, viewCount, fireCount, iceCount, eventCode) {
        this.code = code;
        this.userCode = userCode;
        this.type = type;
        this.date = date;
        this.title = title;
        this.description = description;
        this.backgroundImage = backgroundImage;
        this.image = image;
        this.viewCount = viewCount;
        this.fireCount = fireCount;
        this.iceCount = iceCount;
        this.eventCode = eventCode;
        this.code = code;
        this.userCode = userCode;
        this.type = type;
        this.date = date;
        this.title = title;
        this.description = description;
        this.backgroundImage = backgroundImage;
        this.image = image;
        this.viewCount = viewCount;
        this.fireCount = fireCount;
        this.iceCount = iceCount;
        this.eventCode = eventCode;
    }
    return Post;
}());

//# sourceMappingURL=post-model.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(code, type, name, gender, city, country, music, occupation, intentions, orientation, height, nationality, drinking, smoking, about, rating, followersCount, followingCount, genre, ageGroup, dressCode, capacity, address, email, image, banner, password) {
        this.code = code;
        this.type = type;
        this.name = name;
        this.gender = gender;
        this.city = city;
        this.country = country;
        this.music = music;
        this.occupation = occupation;
        this.intentions = intentions;
        this.orientation = orientation;
        this.height = height;
        this.nationality = nationality;
        this.drinking = drinking;
        this.smoking = smoking;
        this.about = about;
        this.rating = rating;
        this.followersCount = followersCount;
        this.followingCount = followingCount;
        this.genre = genre;
        this.ageGroup = ageGroup;
        this.dressCode = dressCode;
        this.capacity = capacity;
        this.address = address;
        this.email = email;
        this.image = image;
        this.banner = banner;
        this.password = password;
        this.code = code;
        this.type = type;
        this.name = name;
        this.gender = gender;
        this.city = city;
        this.country = country;
        this.music = music;
        this.occupation = occupation;
        this.intentions = intentions;
        this.orientation = orientation;
        this.height = height;
        this.nationality = nationality;
        this.drinking = drinking;
        this.smoking = smoking;
        this.about = about;
        this.rating = rating;
        this.followersCount = followersCount;
        this.followingCount = followingCount;
        this.genre = genre;
        this.ageGroup = ageGroup;
        this.dressCode = dressCode;
        this.capacity = capacity;
        this.address = address;
        this.email = email;
        this.image = image;
        this.banner = banner;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user-model.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Conversation; });
/**
 * Created by astimlee on 19/09/2017.
 */
var Conversation = (function () {
    function Conversation(code, participant1, participant2, lastMessage) {
        this.code = code;
        this.participant1 = participant1;
        this.participant2 = participant2;
        this.lastMessage = lastMessage;
        this.code = code;
        this.participant1 = participant1;
        this.participant2 = participant2;
        this.lastMessage = lastMessage;
    }
    return Conversation;
}());

//# sourceMappingURL=conversation-model.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/**
 * Created by astimlee on 19/09/2017.
 */
var Message = (function () {
    function Message(code, user, participant, message, attachment) {
        this.code = code;
        this.user = user;
        this.participant = participant;
        this.message = message;
        this.attachment = attachment;
        this.code = code;
        this.user = user;
        this.participant = participant;
        this.message = message;
        this.attachment = attachment;
    }
    return Message;
}());

//# sourceMappingURL=message-model.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
/**
 * Created by astimlee on 20/09/2017.
 */
var Notification = (function () {
    function Notification(code, sender, recipient, action, text, data, seen) {
        this.code = code;
        this.sender = sender;
        this.recipient = recipient;
        this.action = action;
        this.text = text;
        this.data = data;
        this.seen = seen;
        this.code = code;
        this.sender = sender;
        this.recipient = recipient;
        this.action = action;
        this.text = text;
        this.data = data;
        this.seen = seen;
    }
    return Notification;
}());

//# sourceMappingURL=notification-model.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_account_account__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_bookings_bookings__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_privacy_privacy__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_terms_terms__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.options = ['Bookings', 'News Feed Preferences', 'Notifications', 'Encounters', 'Privacy', 'Manage Account', 'Terms & Conditions'];
        this.icons = ['pricetag', 'list', 'notifications', 'sp-encounter', 'sp-privacy', 'sp-manage', 'sp-terms'];
        this.descriptions = ['Manage booking profile, auto-reminders and more',
            'Manage what you see on your news feed',
            'Manage when to receive push notifications',
            'Manage users who will appear as your encounters',
            'Manage & secure your privacy',
            'Manage your account settings',
            'View everything about our terms'];
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SettingsPage');
    };
    SettingsPage.prototype.open = function (option) {
        if (option == 'Bookings') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__settings_bookings_bookings__["a" /* BookingsSettings */]);
        }
        else if (option == 'Privacy') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__settings_privacy_privacy__["a" /* PrivacySettings */]);
        }
        else if (option == 'Manage Account') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__settings_account_account__["a" /* AccountSettings */]);
        }
        else if (option == 'Terms & Conditions') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_terms_terms__["a" /* TermsSettings */]);
        }
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/settings/settings.html"*/'<!--\n  Generated template for the SettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><small>SETTINGS</small></ion-title>\n  </ion-navbar>\n  <div class="seperator"></div>\n\n</ion-header>\n\n\n<ion-content class="settings" >\n\n  <ion-list no-lines>\n    <ion-item *ngFor="let option of options; let i = index" (click)="open(option)">\n\n      <ion-avatar item-start>\n\n        <ion-icon style="font-size: 30px;" name="{{icons[i]}}" color="light" text-center ></ion-icon>\n\n      </ion-avatar>\n      <h2>{{option}}</h2>\n      <p><small>{{descriptions[i]}}</small></p>\n\n      <ion-icon style="font-size: 20px;" name="arrow-dropright" color="light" item-end ></ion-icon>\n\n    </ion-item>\n\n\n  </ion-list>\n\n\n\n\n</ion-content>\n\n<ion-footer>\n  <div class="seperator"></div>\n</ion-footer>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AccountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AccountSettings = (function () {
    function AccountSettings(navCtrl, navParams, dataService, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.app = app;
    }
    AccountSettings.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountSettings.prototype.signOut = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    AccountSettings.prototype.changePassword = function () {
    };
    AccountSettings.prototype.delete = function () {
    };
    return AccountSettings;
}());
AccountSettings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/settings/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><small>ACCOUNT</small></ion-title>\n  </ion-navbar>\n  <div class="seperator"></div>\n\n</ion-header>\n\n\n<ion-content class="accountSettings">\n\n  <ion-grid text-center padding-top>\n    <ion-row>\n      <ion-col col-12 text-center>\n        <div class="custom-avatar" >\n          <img src="{{dataService.account.image}}"  style="object-fit: cover;"  />\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 text-center>\n        <h1>{{dataService.account.name}}</h1>\n        <p style="color:#69c2d4;" >{{dataService.account.email}}</p>\n        <h5>{{dataService.account.phone}}</h5>\n\n      </ion-col>\n\n    </ion-row>\n\n\n  </ion-grid>\n\n  <ion-list no-lines>\n\n  <ion-item class="animated bounceInLeft">\n    <button color="black"  ion-button icon-start block (click)="signOut()" large>\n      <ion-icon  name="power" color="light"  ></ion-icon>\n      Sign-Out\n    </button>\n  </ion-item>\n\n  <ion-item class="animated bounceInRight">\n    <button color="black"  ion-button icon-start block (click)="changePassword()" large>\n      <ion-icon  name="lock" color="light" ></ion-icon>\n      Change Password</button>\n  </ion-item>\n\n  <ion-item class=" logout animated bounceInUp">\n    <button color="light"  ion-button icon-start block (click)="delete()" large>\n      <ion-icon  name="trash" color="light"  ></ion-icon>\n      Delete Account</button>\n  </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n<ion-footer>\n  <div class="seperator"></div>\n</ion-footer>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/settings/account/account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], AccountSettings);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__encounters_encounters__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_messages__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notifications_notifications__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(dataService, navCtrl, viewCtrl) {
        this.dataService = dataService;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__messages_messages__["a" /* MessagesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__encounters_encounters__["a" /* EncountersPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__notifications_notifications__["a" /* NotificationsPage */];
        this.userType = '';
        this.showCameraButton = true;
        this.userType = dataService.permission;
        // .subscribe(e=>{   console.log(e,this.viewCtrl.index);
        // if(this.viewCtrl.index>0){     this.showCameraButton = false;   } })
        // this.dataService.atTop = true;
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('entered');
        this.showCameraButton = true;
        this.viewCtrl
            .willEnter
            .subscribe(function (e) {
            console.log(e);
            console.log(_this.viewCtrl.index);
            console.log(_this.viewCtrl);
            if (_this.viewCtrl.index > 0) {
                _this.showCameraButton = false;
            }
        });
    };
    TabsPage.prototype.ionViewDidLeave = function () {
        console.log('I am leaving fuck you');
        this.showCameraButton = false;
    };
    return TabsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])('myTabs'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["n" /* Tabs */])
], TabsPage.prototype, "tabRef", void 0);
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({ selector: 'page-tabs',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/tabs/tabs.html"*/'<ion-tabs color="black">\n\n\n    <ng-container *ngIf="userType === \'individual\'">\n        <ion-tab [root]="tab1Root" tabTitle="" tabIcon="home"></ion-tab>\n        <ion-tab [root]="tab2Root" tabBadge="{{dataService.messageBadge}}" tabBadgeStyle="main" tabIcon="text"></ion-tab>\n        <ion-tab [root]="tab3Root" tabIcon="camera"></ion-tab>\n        <ion-tab [root]="tab3Root" tabIcon="heart"> </ion-tab>\n        <ion-tab [root]="tab4Root" tabBadge="{{dataService.notificationBadge}}" tabBadgeStyle="sender" tabIcon="notifications"> </ion-tab>\n    </ng-container>\n    <ng-container *ngIf="userType === \'business\'">\n            <ion-tab [root]="tab1Root" tabTitle="" tabIcon="home"></ion-tab>\n            <ion-tab [root]="tab2Root" tabBadge="{{dataService.messageBadge}}" tabBadgeStyle="main" tabIcon="text"></ion-tab>\n            <ion-tab [root]="tab3Root" tabIcon="camera"></ion-tab>\n            <ion-tab [root]="tab4Root" tabBadge="{{dataService.notificationBadge}}" tabBadgeStyle="sender" tabIcon="notifications"> </ion-tab>            \n            <ion-tab [root]="tab3Root" tabIcon="cog"> </ion-tab>\n        </ng-container>\n</ion-tabs>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/tabs/tabs.html"*/ }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["o" /* ViewController */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewPostPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__preview_preview__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_post_model__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__new_event_new_event__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewPostPage = (function () {
    function NewPostPage(navCtrl, navParams, dataService, camera, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.today = new Date();
        this.start();
    }
    NewPostPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewPostPage');
        this.userType = this.dataService.permission;
    };
    NewPostPage.prototype.start = function () {
        //this.setupTime();
        this.image = "";
        this.background = "";
        this.privacy = 'Public';
        this.text = "";
    };
    NewPostPage.prototype.createEvent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__new_event_new_event__["a" /* NewEventPage */]);
    };
    NewPostPage.prototype.setupTime = function () {
        var tempTime;
        tempTime = new Date();
        tempTime.setMinutes(0);
        this.today.setHours(0, -this.today.getTimezoneOffset(), 0, 0); //removing the timezone offset.
        this.date = this.today.toISOString();
        console.log(this.today);
        console.log(this.date);
    };
    NewPostPage.prototype.generateCode = function () {
        //new user code
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 100; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    NewPostPage.prototype.promptPicture = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Image',
                    handler: function () {
                        _this.getPicture('Image');
                    }
                },
                {
                    text: 'Background',
                    handler: function () {
                        _this.getPicture('Background');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    NewPostPage.prototype.getPicture = function (type) {
        var _this = this;
        console.log(type);
        var actionSheet = this.actionSheetCtrl.create({
            title: type + ' Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY, type);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA, type);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    NewPostPage.prototype.takePicture = function (sourceType, imageType) {
        var _this = this;
        var tempImage;
        // Get the data of an image
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            quality: 100
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            tempImage = "data:image/jpeg;base64," + imageData;
            tempImage = tempImage.replace(/(\r\n|\n|\r)/gm, "");
            if (imageType == 'Background') {
                _this.background = tempImage;
            }
            else {
                _this.image = tempImage;
            }
        }, function (err) {
            console.log('error adding photo');
        });
    };
    NewPostPage.prototype.removePhoto = function () {
        this.image = '';
    };
    NewPostPage.prototype.preview = function () {
        this.setupTime();
        var newPost = new __WEBPACK_IMPORTED_MODULE_4__models_post_model__["a" /* Post */](this.generateCode(), this.dataService.account.code, this.dataService.account.type, this.date, '', this.text, this.background, this.image, '0', '0', '0', '');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__preview_preview__["a" /* PreviewPage */], {
            post: newPost
        });
        //this.news.push(newNews1);
    };
    return NewPostPage;
}());
NewPostPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-post',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/new-post/new-post.html"*/'<ion-header class="transparentBG">\n    <ion-navbar>\n        <ion-title>POST</ion-title>\n    </ion-navbar>\n    <div class="seperator"></div>\n</ion-header>\n\n\n<ion-content class="newPost">\n\n    <ion-item class="searchForm">\n        <ion-input type="text" [(ngModel)]="text" placeholder="Whats on your mind Michael?"></ion-input>\n        <img item-end src="assets/images/newPost-white.png">\n    </ion-item>\n\n    <div class="visibleRow">\n        <ion-icon name="ios-eye-outline"></ion-icon>\n        <ion-select [(ngModel)]="visible">\n            <ion-option value="Public" selected>Public</ion-option>\n            <ion-option value="Private">Private</ion-option>\n        </ion-select>\n    </div>\n    \n    <div class="pictureOptions">\n        <div class="pictureOptionsCol" (click)="promptPicture()">\n            <div class="pictureOptionsColInner">\n                <ion-icon class="bigIcon" name="camera" color="light"></ion-icon>\n                <ion-icon class="plusIcon" name="add" color="light"></ion-icon>\n                <p>PHOTO/VIDEO</p>\n            </div>\n        </div>\n        \n        <div class="pictureOptionsCol">\n            <div class="pictureOptionsColInner">\n                <ion-icon class="bigIcon" name="happy" color="light"></ion-icon>\n                <ion-icon class="plusIcon" name="add" color="light"></ion-icon>\n                <p>CREATE MEME</p>\n            </div>\n        </div>\n        \n        <!--start ng-login-->\n        <ng-container *ngIf="!userType || userType !== \'business\'">\n                <div class="pictureOptionsCol">\n                        <div class="pictureOptionsColInner">\n                            <ion-icon class="bigIcon" name="sp-checkIn" color="light"></ion-icon>\n                            <ion-icon class="plusIcon" name="add" color="light"></ion-icon>\n                            <p>CHECK IN</p>\n                        </div>\n                    </div>\n        </ng-container>\n        <ng-container *ngIf="userType === \'business\'">\n                <div class="pictureOptionsCol" (click)="createEvent()">\n                        <div class="pictureOptionsColInner">\n                            <ion-icon class="bigIcon" name="disc" color="light"></ion-icon>\n                            <ion-icon class="plusIcon" name="add" color="light"></ion-icon>\n                            <p>CREATE EVENT</p>\n                        </div>\n                    </div>\n        </ng-container>\n    </div>   \n    \n    \n    <div class="backgroundImg">\n        <img *ngIf="background" src="{{background}}" (click)="getPicture(\'Background\')">\n    </div>\n\n    <div class="backgroundImg">\n        <img *ngIf="image" src="{{image}}" (click)="getPicture(\'Image\')">\n    </div>\n    \n    <div class="removePostButs">\n        <div *ngIf="background" class="removePostButsInner" (click)="removeBackground();">\n            <ion-icon name="ios-trash-outline"></ion-icon>\n            Remove Background\n        </div>\n        <div *ngIf="image" class="removePostButsInner" (click)="removePhoto();">\n            <ion-icon name="ios-trash-outline"></ion-icon>\n            Remove Image\n        </div>\n        <div class="removePostButsInner" (click)="preview();">\n            <ion-icon name="ios-leaf-outline"></ion-icon>\n            Preview\n        </div>        \n    </div>\n</ion-content>\n\n<ion-footer>\n    <div class="seperator"></div>\n</ion-footer>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/new-post/new-post.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], NewPostPage);

//# sourceMappingURL=new-post.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UserProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var UserProfilePage = (function () {
    function UserProfilePage(navCtrl, navParams, dataService, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.counter = Array;
        this.images = ['assets/images/gallery1.jpg', 'assets/images/gallery2.jpg', 'assets/images/gallery.jpg', 'assets/images/banner2.jpg', 'assets/images/banner3.jpg'];
        this.userCode = this.navParams.get('userCode');
        this.start();
    }
    UserProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserProfilePage');
    };
    UserProfilePage.prototype.start = function () {
        var _this = this;
        this.segment = 'news';
        this.user = this.dataService.users.filter(function (item) { return item.code == _this.userCode; })[0];
        this.type = this.user.type;
        console.log(this.type);
        console.log(this.user);
    };
    UserProfilePage.prototype.options = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Options',
            buttons: [
                {
                    text: 'Edit',
                    handler: function () {
                        console.log('message');
                    }
                }, {
                    text: 'Share',
                    handler: function () {
                        console.log('message');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    return UserProfilePage;
}());
UserProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-profile',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/user-profile/user-profile.html"*/'<!--\n  Generated template for the UserProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="userProfile">\n\n  <ion-fab bottom right >\n    <button ion-fab color="black" ><img src="assets/images/newPost.png"  style="object-fit: cover;" /></button>\n  </ion-fab>\n\n\n  <div class="profileHead" [style.background-image]="\' url(\'+user.banner+\')\'"   style="max-height: 100%"  >\n\n    <div class="profileInfo " style="min-height: 100%"  >\n\n      <div style="height: 25%" >\n\n          <img src="assets/images/placeholder2.png"  style="object-fit: cover;" />\n\n      </div>\n\n      <div style="height: 75%">\n\n        <div padding-left  >\n        <div class="custom-avatar" >\n          <img src="{{user.image}}"  style="object-fit: cover;"  />\n        </div>\n          </div>\n\n        <ion-grid style="height: 100%" >\n\n          <div style="max-height: 100%" >\n\n          <ion-row class="animated flipInX">\n            <h2 text-left >&nbsp;</h2>\n          </ion-row>\n\n\n\n          <ion-row >\n            <h2 text-left >{{user.name}}</h2>\n          </ion-row>\n\n            <ion-row *ngIf="type == \'business\'">\n\n              <ion-col text-left>\n                <ion-icon *ngFor="let key of counter(user.rating)" name="star" color="main"></ion-icon>\n              </ion-col>\n\n            </ion-row>\n\n          <ion-row>\n            <ion-col text-left>\n              {{user.followersCount}} Followers\n            </ion-col>\n            <ion-col text-left *ngIf="type == \'individual\'">\n            {{user.followingCount}} Following\n          </ion-col>\n\n\n            <ion-col text-right (click)="options()">\n              <ion-icon style="font-size: 20px;" name="more" color="light"></ion-icon>\n            </ion-col>\n          </ion-row>\n\n            <div padding-top padding-bottom >\n              <ion-segment [(ngModel)]="segment" color="light">\n                <ion-segment-button *ngIf="user.type == \'club\'" class="animated zoomInUp" value="events" style="font-family: gilroy;">\n                  Events\n                </ion-segment-button>\n                <ion-segment-button class="animated zoomInUp" value="news" style="font-family: gilroy;">\n                  News Feed\n                </ion-segment-button>\n                <ion-segment-button class="animated zoomInUp" value="gallery" style="font-family: gilroy;">\n                  Gallery\n                </ion-segment-button>\n                <ion-segment-button class="animated zoomInDown" value="showcase" style="font-family: gilroy;">\n                  Showcase\n                </ion-segment-button>\n                <ion-segment-button class="animated zoomInUp" value="info" style="font-family: gilroy;">\n                  Info\n                </ion-segment-button>\n\n              </ion-segment>\n            </div>\n\n            </div>\n\n\n\n\n\n\n\n\n        </ion-grid>\n\n\n\n\n\n\n      </div>\n\n\n    </div>\n\n\n\n\n    <div class="seperator"></div>\n\n\n  </div>\n\n\n\n\n\n\n  <div [ngSwitch] ="segment">\n\n    <ion-list *ngSwitchCase="\'events\'" no-lines>\n      <ng-container>\n\n      </ng-container>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'news\'" no-lines>\n      <ng-container>\n\n      <club-post></club-post>\n      </ng-container>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'gallery\'" no-lines>\n      <ng-container >\n      <div class="gallery"    *ngFor="let image of dataService.assets/images" [style.background-image]="\' url(\'+image+\')\'">\n        <ion-row style="min-height: 100%;">\n          <ion-col col-12 text-right padding >\n            <img src="assets/images/placeholder2.png" >\n\n          </ion-col>\n        </ion-row>\n      </div>\n        </ng-container>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'showcase\'" no-lines>\n      <ng-container>\n\n\n      </ng-container>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'info\'" no-lines >\n      <ng-container >\n\n\n        <ion-list no-lines *ngIf="type == \'individual\'" padding-top>\n\n        <ion-item>\n          <ion-label text-left item-start>Name:</ion-label>\n          <ion-label text-right>{{user.name}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label text-left item-start>Age:</ion-label>\n          <ion-label text-right>{{user.age}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label text-left item-start>Gender:</ion-label>\n          <ion-label text-right>{{user.gender}}</ion-label> </ion-item>\n\n        <ion-item>\n          <ion-label text-left item-start>City:</ion-label>\n          <ion-label text-right>{{user.city}}</ion-label></ion-item>\n\n        <ion-item>\n          <ion-label text-left item-start>Country:</ion-label>\n          <ion-label text-right>{{user.country}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n          <ion-label text-left item-start>Music Preference:</ion-label>\n          <ion-label text-right>{{user.music}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left item-start>Occupation:</ion-label>\n          <ion-label text-right>{{user.occupation}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left item-start>Intentions:</ion-label>\n          <ion-label text-right>{{user.intentions}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left item-start>Orientation:</ion-label>\n          <ion-label text-right>{{user.orientation}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left item-start>Height:</ion-label>\n          <ion-label text-right>{{user.height}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left item-start>Nationality:</ion-label>\n          <ion-label text-right>{{user.nationality}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left item-start>Drinking:</ion-label>\n          <ion-label text-right>{{user.drinking}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left item-start>Smoking:</ion-label>\n          <ion-label text-right>{{user.smoking}}</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-label text-left item-start>Interests:</ion-label>\n          <ion-label text-right>{{user.interests}}</ion-label>\n        </ion-item>\n\n\n      </ion-list>\n\n        <ion-list no-lines *ngIf="type == \'business\'" padding-top>\n\n          <ion-item>\n            <ion-label text-left item-start>Music Genre:</ion-label>\n            <ion-label text-right>{{user.genre}}</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label text-left item-start>Age Group:</ion-label>\n            <ion-label text-right>{{user.ageGroup}}</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label text-left item-start>Dress Code:</ion-label>\n            <ion-label text-right>{{user.dressCode}}</ion-label> </ion-item>\n\n          <ion-item>\n            <ion-label text-left item-start>Capacity:</ion-label>\n            <ion-label text-right>{{user.capacity}}</ion-label></ion-item>\n\n          <ion-item>\n            <ion-label text-left item-start>Address:</ion-label>\n            <ion-label text-right>{{user.address}}</ion-label>\n          </ion-item>\n\n        </ion-list>\n\n\n\n      </ng-container>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/user-profile/user-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], UserProfilePage);

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resetpassword; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resetpasswordsent_resetpasswordsent__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var resetpassword = (function () {
    function resetpassword(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    resetpassword.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad reset password');
    };
    resetpassword.prototype.resetpasswordsent = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__resetpasswordsent_resetpasswordsent__["a" /* resetpasswordsent */]);
    };
    return resetpassword;
}());
resetpassword = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'resetpassword',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/resetpassword/resetpassword.html"*/'<ion-content class="login inputForms">\n    <div class="verticalAlignMiddle">\n        <div class="verticalAlignMiddleChild">\n            <ion-list text-center>\n                <img src="assets/imgs/passwordReset.png">\n                <p>Password Reset</p>\n\n                <p>Enter your account e-mail address</p>\n\n                <ion-item>\n                    <ion-input class="mailIcon" [(ngModel)]="username" type="email" placeholder="Email"></ion-input>\n                </ion-item>\n\n                <button color="main" ion-button (click)="resetpasswordsent()">\n                    RESET PASSWORD\n                </button>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/resetpassword/resetpassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], resetpassword);

//# sourceMappingURL=resetpassword.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return resetpasswordsent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var resetpasswordsent = (function () {
    function resetpasswordsent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    resetpasswordsent.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad reset password sent');
    };
    resetpasswordsent.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return resetpasswordsent;
}());
resetpasswordsent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'resetpasswordsent',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/resetpasswordsent/resetpasswordsent.html"*/'<ion-content class="login inputForms">\n    <div class="verticalAlignMiddle">\n        <div class="verticalAlignMiddleChild">\n            <ion-list text-center>\n                <img src="assets/imgs/passwordSent.png">\n                <p>Check Your E-mail</p>\n\n                <p>We’ve sent the password reset instructions to your e-mail. Check your inbox and come back to login!</p>\n\n                <button color="main" ion-button (click)="login()">\n                    BACK TO LOGIN\n                </button>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/resetpasswordsent/resetpasswordsent.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], resetpasswordsent);

//# sourceMappingURL=resetpasswordsent.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signupverification_signupverification__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var signup = (function () {
    function signup(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    signup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad signup');
    };
    signup.prototype.signupverification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signupverification_signupverification__["a" /* signupverification */]);
    };
    return signup;
}());
signup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'signup',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/signup/signup.html"*/'<ion-header class="transparentBG">\n    <ion-navbar>\n        <ion-title>USER REGISTEATION</ion-title>\n    </ion-navbar>\n    <div class="seperator"></div>\n</ion-header>\n\n<ion-content class="login inputForms">\n    <div class="verticalAlignMiddle">\n        <div class="verticalAlignMiddleChild">\n            <ion-list text-center>\n                <img src="assets/imgs/plusIconSignup.png">\n                <h3>Create Account</h3>\n\n                <p>Register today and start enjoying the <span>SwiftVibe</span> experience!</p>\n\n                <ion-item>\n                    <ion-input class="mailIcon" [(ngModel)]="username" type="email" placeholder="E-mail"></ion-input>\n                </ion-item>\n                \n                <ion-item>\n                    <ion-input class="mailIcon" [(ngModel)]="phome" type="tel" placeholder="Phone#"></ion-input>\n                </ion-item>\n                \n                \n                <ion-item>\n                    <ion-input class="lockIcon" [(ngModel)]="password" type="password" placeholder="Password"></ion-input>\n                </ion-item>\n                \n                <ion-item>\n                    <ion-input class="lockIcon" [(ngModel)]="password" type="password" placeholder="Confirm Password"></ion-input>\n                </ion-item>\n\n                <button color="main" ion-button (click)="signupverification()">\n                    Create account\n                </button>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], signup);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingsSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the BookingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var BookingsSettings = (function () {
    function BookingsSettings(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BookingsSettings.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BookingsPage');
    };
    return BookingsSettings;
}());
BookingsSettings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bookings',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/settings/bookings/bookings.html"*/'<!--\n  Generated template for the BookingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><small> BOOKINGS </small></ion-title>\n  </ion-navbar>\n  <div class="seperator"></div>\n\n\n</ion-header>\n\n\n<ion-content class="bookingsSettings" padding >\n\n  <ion-row>\n\n    <ion-col col-12 text-center>\n    <h2 text-center>Booking Name</h2>\n    <p>This is the name that venues will receive when you submit a guestlist reservation or buy tickets</p>\n\n      <p style="color:#69c2d4;" ><small>Your name will not be shared with other users</small></p>\n\n\n  </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12 text-center>\n    <ion-input placeholder="First Name" text-center></ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12 text-center>\n    <ion-input placeholder="Last Name" text-center></ion-input>\n    </ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-12 text-center>\n      <img src="assets/images/autoReminder.png" style="object-fit: cover; width: 50%">\n    </ion-col>\n  </ion-row>\n\n  <ion-item no-lines>\n    <ion-label><small> Activate Auto-Reminders</small></ion-label>\n    <ion-toggle  color="blue" checked="true"></ion-toggle>\n  </ion-item>\n\n  <ion-row>\n    <ion-col col-12 text-center>\n     <p>Select when you would like to receive a reminder</p>\n\n      <ion-segment [(ngModel)]="reminder" color="blue">\n        <ion-segment-button value="1">\n          1 Day\n        </ion-segment-button>\n        <ion-segment-button value="2">\n          2 Days\n        </ion-segment-button>\n        <ion-segment-button value="3">\n          3 Days\n        </ion-segment-button>\n      </ion-segment>\n\n    </ion-col>\n  </ion-row>\n\n\n</ion-content>\n\n<ion-footer>\n  <div class="seperator"></div>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/settings/bookings/bookings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], BookingsSettings);

//# sourceMappingURL=bookings.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacySettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PrivacyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PrivacySettings = (function () {
    function PrivacySettings(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.options = ['Blocked Users', 'Who can message me', 'Search Visibility'];
        this.icons = ['sp-block', 'text', 'search'];
        this.descriptions = ['Block or Unblock users who can view your profile',
            'Manage who can send me messages',
            'Can a user search for your profile ?'];
    }
    PrivacySettings.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacyPage');
    };
    return PrivacySettings;
}());
PrivacySettings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-privacy',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/settings/privacy/privacy.html"*/'<!--\n  Generated template for the PrivacyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><small> PRIVACY </small></ion-title>\n  </ion-navbar>\n  <div class="seperator"></div>\n\n</ion-header>\n\n\n<ion-content class="privacy">\n\n  <ion-list no-lines>\n    <ion-item *ngFor="let option of options; let i = index">\n\n      <ion-avatar item-start>\n\n        <ion-icon style="font-size: 30px;" name="{{icons[i]}}" color="light" text-center ></ion-icon>\n\n      </ion-avatar>\n      <h2>{{option}}</h2>\n      <p><small>{{descriptions[i]}}</small></p>\n\n      <ion-icon style="font-size: 20px;" name="arrow-dropright" color="light" item-end ></ion-icon>\n\n    </ion-item>\n\n\n  </ion-list>\n\n\n\n\n</ion-content>\n\n<ion-footer>\n  <div class="seperator"></div>\n</ion-footer>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/settings/privacy/privacy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], PrivacySettings);

//# sourceMappingURL=privacy.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsSettings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TermsSettings = (function () {
    function TermsSettings(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsSettings.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    return TermsSettings;
}());
TermsSettings = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/settings/terms/terms.html"*/'<!--\n  Generated template for the TermsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><small> OUR TERMS </small></ion-title>\n  </ion-navbar>\n  <div class="seperator"></div>\n\n\n</ion-header>\n\n\n<ion-content class="terms">\n\n</ion-content>\n<ion-footer>\n  <div class="seperator"></div>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/settings/terms/terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TermsSettings);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(248);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_signup0_signup0__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_club_club__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_messages_messages__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_conversation_conversation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_resetpassword_resetpassword__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_resetpasswordsent_resetpasswordsent__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signupsteps_signupsteps__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_signupverification_signupverification__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_new_post_new_post__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_new_event_new_event__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_user_profile_user_profile__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_event_event__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_events_events__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_venues_venues__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_venue_venue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_encounters_encounters__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_menu_menu__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_preview_preview__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_search_search__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_image_image__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_settings_settings__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_settings_account_account__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_settings_bookings_bookings__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_settings_privacy_privacy__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_settings_terms_terms__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_menu_menu__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_club_post_club_post__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_venue_venue__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_club_club__["a" /* ClubPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_resetpassword_resetpassword__["a" /* resetpassword */],
            __WEBPACK_IMPORTED_MODULE_14__pages_resetpasswordsent_resetpasswordsent__["a" /* resetpasswordsent */],
            __WEBPACK_IMPORTED_MODULE_0__pages_signup0_signup0__["a" /* signup0 */],
            __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* signup */],
            __WEBPACK_IMPORTED_MODULE_16__pages_signupsteps_signupsteps__["a" /* signupsteps */],
            __WEBPACK_IMPORTED_MODULE_17__pages_signupverification_signupverification__["a" /* signupverification */],
            __WEBPACK_IMPORTED_MODULE_18__pages_new_post_new_post__["a" /* NewPostPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_user_profile_user_profile__["a" /* UserProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_event_event__["a" /* EventPage */],
            __WEBPACK_IMPORTED_MODULE_40__components_menu_menu__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_41__components_club_post_club_post__["a" /* ClubPostComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pages_venues_venues__["a" /* VenuesPage */],
            __WEBPACK_IMPORTED_MODULE_42__components_venue_venue__["a" /* VenueComponent */],
            __WEBPACK_IMPORTED_MODULE_24__pages_venue_venue__["a" /* VenuePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_encounters_encounters__["a" /* EncountersPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_events_events__["a" /* EventsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_messages_messages__["a" /* MessagesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_settings_account_account__["a" /* AccountSettings */],
            __WEBPACK_IMPORTED_MODULE_32__pages_settings_bookings_bookings__["a" /* BookingsSettings */],
            __WEBPACK_IMPORTED_MODULE_33__pages_settings_privacy_privacy__["a" /* PrivacySettings */],
            __WEBPACK_IMPORTED_MODULE_34__pages_settings_terms_terms__["a" /* TermsSettings */],
            __WEBPACK_IMPORTED_MODULE_19__pages_new_event_new_event__["a" /* NewEventPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_preview_preview__["a" /* PreviewPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_image_image__["a" /* ImagePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_conversation_conversation__["a" /* ConversationPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                tabsHideOnSubPages: true
            }, {
                links: [
                    { loadChildren: '../pages/conversation/conversation.module#ConversationPageModule', name: 'ConversationPage', segment: 'conversation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/encounters/encounters.module#EncountersPageModule', name: 'EncountersPage', segment: 'encounters', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/image/image.module#ImagePageModule', name: 'ImagePage', segment: 'image', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/new-event/new-event.module#NewEventPageModule', name: 'NewEventPage', segment: 'new-event', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/preview/preview.module#PreviewPageModule', name: 'PreviewPage', segment: 'preview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/venue/venue.module#VenuePageModule', name: 'VenuePage', segment: 'venue', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/venues/venues.module#VenuesPageModule', name: 'VenuesPage', segment: 'venues', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_39__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_club_club__["a" /* ClubPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_resetpassword_resetpassword__["a" /* resetpassword */],
            __WEBPACK_IMPORTED_MODULE_14__pages_resetpasswordsent_resetpasswordsent__["a" /* resetpasswordsent */],
            __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* signup */],
            __WEBPACK_IMPORTED_MODULE_0__pages_signup0_signup0__["a" /* signup0 */],
            __WEBPACK_IMPORTED_MODULE_16__pages_signupsteps_signupsteps__["a" /* signupsteps */],
            __WEBPACK_IMPORTED_MODULE_17__pages_signupverification_signupverification__["a" /* signupverification */],
            __WEBPACK_IMPORTED_MODULE_18__pages_new_post_new_post__["a" /* NewPostPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_user_profile_user_profile__["a" /* UserProfilePage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_event_event__["a" /* EventPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_venues_venues__["a" /* VenuesPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_venue_venue__["a" /* VenuePage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_encounters_encounters__["a" /* EncountersPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_menu_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_events_events__["a" /* EventsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_messages_messages__["a" /* MessagesPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_settings_account_account__["a" /* AccountSettings */],
            __WEBPACK_IMPORTED_MODULE_32__pages_settings_bookings_bookings__["a" /* BookingsSettings */],
            __WEBPACK_IMPORTED_MODULE_33__pages_settings_privacy_privacy__["a" /* PrivacySettings */],
            __WEBPACK_IMPORTED_MODULE_34__pages_settings_terms_terms__["a" /* TermsSettings */],
            __WEBPACK_IMPORTED_MODULE_19__pages_new_event_new_event__["a" /* NewEventPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_preview_preview__["a" /* PreviewPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_image_image__["a" /* ImagePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_conversation_conversation__["a" /* ConversationPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_37__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_38__ionic_native_camera__["a" /* Camera */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signup0; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signupverification_signupverification__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupsteps_signupsteps__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var signup0 = (function () {
    function signup0(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    signup0.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad signup');
    };
    signup0.prototype.signupverification = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signupverification_signupverification__["a" /* signupverification */]);
    };
    signup0.prototype.goToSignUpSteps = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signupsteps_signupsteps__["a" /* signupsteps */]);
    };
    return signup0;
}());
signup0 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'signup0',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/signup0/signup0.html"*/'<ion-header class="transparentBG">\n  <ion-navbar>\n    <ion-title>USER REGISTEATION</ion-title>\n  </ion-navbar>\n  <div class="seperator"></div>\n</ion-header>\n\n<ion-content class="login inputForms">\n  <div class="verticalAlignMiddle">\n    <div class="verticalAlignMiddleChild">\n      <ion-list text-center>\n        <img src="assets/imgs/plusIconSignup.png">\n        <h3>Create Account</h3>\n\n        <p>Register today and start enjoying the\n          <span>SwiftVibe</span> experience!</p>\n\n\n        <p>Choose your account type:</p>\n        <button color="individual" ion-button (click)="goToSignUpSteps()">\n          Individual\n        </button>\n        <button color="business" ion-button (click)="goToSignUpSteps()">\n          Business\n        </button>\n        \n      </ion-list>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/signup0/signup0.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], signup0);

//# sourceMappingURL=signup0.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Event; });
/**
 * Created by astimlee on 29/08/2017.
 */
var Event = (function () {
    function Event(code, userCode, name, details, where, genre, dressCode, date, startTime, endTime, backgroundImage, image, viewCount, engageCount) {
        this.code = code;
        this.userCode = userCode;
        this.name = name;
        this.details = details;
        this.where = where;
        this.genre = genre;
        this.dressCode = dressCode;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.backgroundImage = backgroundImage;
        this.image = image;
        this.viewCount = viewCount;
        this.engageCount = engageCount;
        this.code = code;
        this.userCode = userCode;
        this.name = name;
        this.details = details;
        this.where = where;
        this.genre = genre;
        this.dressCode = dressCode;
        this.date = date;
        this.startTime = startTime;
        this.endTime = endTime;
        this.backgroundImage = backgroundImage;
        this.image = image;
        this.viewCount = viewCount;
        this.engageCount = engageCount;
    }
    return Event;
}());

//# sourceMappingURL=event-model.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Venue; });
/**
 * Created by astimlee on 1/09/2017.
 */
var Venue = (function () {
    function Venue(code, name, rating, image, backgroundImage) {
        this.code = code;
        this.name = name;
        this.rating = rating;
        this.image = image;
        this.backgroundImage = backgroundImage;
        this.code = code;
        this.name = name;
        this.rating = rating;
        this.image = image;
        this.backgroundImage = backgroundImage;
    }
    return Venue;
}());

//# sourceMappingURL=venue-model.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    //rootPage:any = signupsteps;
    //rootPage:any = signupverification;
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_venues_venues__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_encounters_encounters__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var MenuComponent = (function () {
    function MenuComponent(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        console.log('Hello MenuComponent Component');
        this.text = 'Hello World';
    }
    MenuComponent.prototype.new = function () {
        console.log('hello yall');
        if (this.dataService.permission == 'user') {
            this.dataService.newUserPost = true;
        }
        else if (this.dataService.permission = 'club') {
            // this.navCtrl.push(NewPostPage);
            this.dataService.newUserPost = true;
        }
    };
    MenuComponent.prototype.home = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */]);
    };
    MenuComponent.prototype.venue = function () {
        console.log('venue');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_venues_venues__["a" /* VenuesPage */]);
    };
    MenuComponent.prototype.encounters = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_encounters_encounters__["a" /* EncountersPage */]);
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'menu',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/components/menu/menu.html"*/'<!-- Generated template for the MenuComponent component -->\n<ion-footer >\n  <ion-toolbar >\n    <ion-row>\n\n\n      <ion-col col-4 text-center>\n        <ion-icon style="font-size: 30px;" name="home" color="light" (click)="home()"></ion-icon>\n      </ion-col>\n\n      <ion-col col-4 text-center>\n        <ion-icon style="font-size: 30px;" name="pin" color="light" (click)="venue()"></ion-icon>\n      </ion-col>\n\n      <ion-col col-4 text-center>\n        <ion-icon style="font-size: 30px;" name="glasses" color="light" (click)="encounters()"></ion-icon>\n      </ion-col>\n\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/components/menu/menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_service__["a" /* DataService */]])
], MenuComponent);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_event_event__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_club_club__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ClubPostComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var ClubPostComponent = (function () {
    function ClubPostComponent(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        console.log('Hello ClubPostComponent Component');
        this.text = 'Hello World';
    }
    ClubPostComponent.prototype.openEvent = function (eventCode) {
        console.log('open club ?');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_event_event__["a" /* EventPage */], {
            eventCode: eventCode
        });
    };
    ClubPostComponent.prototype.openProfile = function (userCode) {
        var user = this.dataService.users.filter(function (item) { return item.code == userCode; })[0];
        console.log('open club ?');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_club_club__["a" /* ClubPage */], {
            user: user
        });
    };
    ClubPostComponent.prototype.getName = function (userCode) {
        var user = this.dataService.users.filter(function (item) { return item.code == userCode; })[0];
        return user.name;
    };
    ClubPostComponent.prototype.getAvatar = function (userCode) {
        var user = this.dataService.users.filter(function (item) { return item.code == userCode; })[0];
        return user.image;
    };
    return ClubPostComponent;
}());
ClubPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'club-post',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/components/club-post/club-post.html"*/'<!-- Generated template for the ClubPostComponent component -->\n\n\n<div class="post" *ngFor="let news of dataService.news" [style.background]="\' url(\'+news.backgroundImage+\')\'">\n    <div class="seperator"></div>\n    <div class="postInfo">\n        <ion-grid>\n            <ion-row>\n                <ion-item no-lines text-left (click)="openProfile(news.userCode)">\n                    <ion-avatar item-start>\n                        <div class="userImage" [style.background]="\' url(\'+getAvatar(news.userCode)+\')\'"></div>\n                    </ion-avatar>\n                    <p class="animated flipInX">{{getName(news.userCode)}}</p>\n                    <p item-end>\n                        <ion-icon name="md-time" color="light"></ion-icon> 3h</p>\n                </ion-item>\n            </ion-row>\n\n            <ion-row *ngIf="news.type == \'business\'">\n                <div class="newsDetails business" padding (click)="openEvent(news.eventCode)">\n                    <h3 class="animated bounceIn">{{news.title}}</h3>\n                    <p class="animated flipInX">{{news.description}}</p>\n                    <ion-col col-3 style="color:#f4f4f4;">\n                        <ion-icon style="font-size: 20px;" name="eye" color="light"></ion-icon> {{news.viewCount}} k\n                    </ion-col>\n                    <ion-col col-3 style="color:#f4f4f4;">\n                        <ion-icon style="font-size: 20px;" name="sp-fire"></ion-icon> {{news.fireCount}} k\n                    </ion-col>\n                </div>\n            </ion-row>\n\n            <img *ngIf="news.image.length > 0" src="{{news.image}}" style="object-fit: cover; border-radius: 5px;">\n\n            <ion-row *ngIf="news.type == \'individual\'">\n                <div class="newsDetails" padding (click)="openProfile(news.userCode)">\n                    <p class="animated bounceIn">{{news.description}}</p>\n                    <ion-col col-3 style="color:#f4f4f4;">\n                        <ion-icon style="font-size: 20px;" name="sp-fire" color="light"></ion-icon> {{news.fireCount}} k</ion-col>\n                    <ion-col col-3 style="color:#f4f4f4;">\n                        <ion-icon style="font-size: 20px;" name="sp-ice" color="light"></ion-icon> {{news.viewCount}} k</ion-col>\n                </div>\n            </ion-row>\n\n\n\n\n\n\n\n            <ion-row class="commentHere">\n\n                <ion-input type="text" placeholder="Leave Your Comments Here">\n\n                </ion-input>\n            </ion-row>\n\n        </ion-grid>\n\n\n    </div>\n\n\n\n</div>\n\n\n\n\n<!--<div class="post animated slideInUp" *ngFor="let news of dataService.news" [style.background-image]="\' url(\'+news.backgroundImage+\')\'">\n    <div class="seperator"></div>\n    <div class="postInfo">\n        <ion-grid>\n            <ion-row>\n                <ion-item no-lines text-left (click)="openProfile(news.userCode)">\n                    <ion-avatar item-start>\n                        <img src="{{getAvatar(news.userCode)}}" style="object-fit: cover;">\n                    </ion-avatar>\n\n                    <p class="animated flipInX">{{getName(news.userCode)}}</p>\n                    <p item-end>\n                        <ion-icon style="font-size: 20px;" name="sp-clock" color="light"></ion-icon> 3h</p>\n                </ion-item>\n            </ion-row>\n\n\n            <ion-row *ngIf="news.type == \'business\'">\n                <ion-col padding (click)="openEvent(news.eventCode)">\n                    <h3 class="animated bounceIn">{{news.title}}</h3>\n                    <p class="animated flipInX">{{news.description}}</p>\n                    <ion-row>\n                        <ion-col style="color:#f4f4f4;">\n                            <ion-icon style="font-size: 20px;" name="eye" color="light"></ion-icon> {{news.viewCount}} k</ion-col>\n                        <ion-col style="color:#f4f4f4;">\n                            <ion-icon style="font-size: 20px;" name="sp-fire"></ion-icon> {{news.fireCount}} k</ion-col>\n                        <ion-col></ion-col>\n\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n\n            <img *ngIf="news.image.length > 0" src="{{news.image}}" style="object-fit: cover; border-radius: 5px;">\n\n            <ion-row *ngIf="news.type == \'individual\'">\n                <ion-col padding (click)="openProfile(news.userCode)">\n                    <p class="animated bounceIn">{{news.description}}</p>\n                    <ion-row>\n                        <ion-col style="color:#f4f4f4;">\n                            <ion-icon style="font-size: 20px;" name="sp-ice" color="light"></ion-icon> {{news.viewCount}} k</ion-col>\n                        <ion-col style="color:#f4f4f4;">\n                            <ion-icon style="font-size: 20px;" name="sp-fire" color="light"></ion-icon> {{news.fireCount}} k</ion-col>\n                        <ion-col></ion-col>\n\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n\n\n\n\n\n\n\n            <ion-row>\n\n                <ion-input type="text" placeholder="Leave Your Comments Here">\n\n                </ion-input>\n            </ion-row>\n\n        </ion-grid>\n\n\n    </div>\n\n\n\n</div>-->'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/components/club-post/club-post.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_service__["a" /* DataService */]])
], ClubPostComponent);

//# sourceMappingURL=club-post.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenueComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_venue_venue__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the VenueComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var VenueComponent = (function () {
    function VenueComponent(navCtrl, dataService) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        console.log('Hello VenueComponent Component');
        this.text = 'Hello World';
    }
    VenueComponent.prototype.open = function (venue) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_venue_venue__["a" /* VenuePage */], {
            venue: venue
        });
    };
    return VenueComponent;
}());
VenueComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'venue',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/components/venue/venue.html"*/'<!-- Generated template for the ClubPostComponent component -->\n<div class="venue animated slideInLeft"  *ngFor="let venue of dataService.venues"  [style.background-image]="\' url(\'+venue.backgroundImage+\')\'" style="min-height: 35%" (click)="open(venue)">\n\n  <div class="seperator"></div>\n\n  <div style="height: 100%;">\n\n  <div class="venueInfo" style="height: 100%">\n\n      <div class="custom-avatar" padding-top >\n        <img src="{{venue.image}}"  style="object-fit: cover;"  />\n      </div>\n\n\n    <ion-item no-lines text-center  color="clear">\n\n      <h2 class="animated flipInX" style="font-size: 40px;">{{venue.name}}</h2>\n      <h3 style="font-size: 20px;"> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> <ion-icon name="star"></ion-icon> </h3>\n\n    </ion-item>\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-12 text-right>\n          4500 Followers\n\n        </ion-col>\n\n\n      </ion-row>\n\n      <ion-row>\n\n       <ion-col col-6>\n\n       <ion-icon style="font-size: 20px;" name="eye" color="light"></ion-icon> 16.0 k &nbsp;\n     <ion-icon style="font-size: 20px;" name="sp-fire" color="light"></ion-icon> 13.6 k\n\n       </ion-col>\n\n        <ion-col col-6 text-right>\n          215 Raters\n\n        </ion-col>\n\n\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  </div>\n\n</div>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/components/venue/venue.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_data_service__["a" /* DataService */]])
], VenueComponent);

//# sourceMappingURL=venue.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resetpassword_resetpassword__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, dataService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.resetpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__resetpassword_resetpassword__["a" /* resetpassword */]);
    };
    LoginPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__signup_signup__["a" /* signup */]);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log('login');
        var actionSheet = this.alertCtrl.create({
            title: 'Login Type',
            buttons: [
                {
                    text: 'Individual',
                    handler: function () {
                        _this.dataService.permission = 'individual';
                        var newUser = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]('userCode0', 'individual', 'Chloe', 'Female', 'Auckland', 'NZ', 'M', 'Insurance', 'Single', 'Straight', 1.67, 'Kiwi', true, true, 'Lets meet & drink', 0, '123', '101', 'G', 'A', 'D', 'C', 'Address', 'chloe@gmail.com', 'assets/images/girl3.jpg', 'assets/images/banner4.jpg', 'hashTest');
                        _this.dataService.users.push(newUser);
                        _this.dataService.account = newUser;
                        _this.dataService.getNotificationBadgeNumber();
                        _this.dataService.getMessageBadgeNumber();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                        localStorage.userType = 'individual';
                    }
                }, {
                    text: 'Business',
                    handler: function () {
                        _this.dataService.permission = 'business';
                        var newUser = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]('userCode', 'business', 'Club City', 'G', 'C', 'C', 'M', 'O', 'I', 'O', 'H', 'N', 'D', 'S', 'A', 4, '500', '450', 'Hip Hop', '18+', 'Casual', 150, '34 Forte St', 'test@clubcity.com', 'assets/images/logo1.jpg', 'assets/images/banner5.jpg', 'hashTest');
                        _this.dataService.users.push(newUser);
                        _this.dataService.account = newUser;
                        _this.dataService.getNotificationBadgeNumber();
                        _this.dataService.getMessageBadgeNumber();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                        localStorage.userType = 'business';
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/login/login.html"*/'<ion-content class="login inputForms">\n    <ion-list text-center>\n        <img src="assets/imgs/login-white.png">\n\n        <p> Register today and start enjoying the <span>SwiftVibe</span> experience!</p>\n        \n        <ion-item>\n            <ion-input class="mailIcon" [(ngModel)]="username" type="email" placeholder="Email"></ion-input>\n        </ion-item>\n        \n        <ion-item>\n            <ion-input class="lockIcon" [(ngModel)]="password" type="password" placeholder="Password"></ion-input>\n        </ion-item>\n        \n        <div class="forgotPass">\n            <p (click)="signup();">Register</p>\n\n            <p (click)="resetpassword();">Forgot Password ?</p>\n        </div>\n                \n        <button color="main" ion-button (click)="login()">\n            LOGIN\n        </button>\n\n        <button color="facebook" ion-button (click)="login()">\n            LOGIN WITH FACEBOOK\n        </button>\n        <p class="pPolicy">By signing in to SwiftVibe, you agree to your <span>Terms & Conditions</span> & <span>Privacy Policy</span></p>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__club_club__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__image_image__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the EventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EventPage = (function () {
    function EventPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.eventCode = this.navParams.get('eventCode');
        this.start();
    }
    EventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EventPage');
    };
    EventPage.prototype.start = function () {
        var _this = this;
        this.event = this.dataService.events.filter(function (item) { return item.code == _this.eventCode; })[0];
        this.user = this.dataService.users.filter(function (item) { return item.code == _this.event.userCode; })[0];
        console.log(this.event);
    };
    EventPage.prototype.openProfile = function () {
        console.log('open club ?');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__club_club__["a" /* ClubPage */], {
            user: this.user
        });
    };
    EventPage.prototype.openImage = function (link) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__image_image__["a" /* ImagePage */], {
            link: link
        });
    };
    return EventPage;
}());
EventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-event',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/event/event.html"*/'<!--\n  Generated template for the EventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar padding-left padding-right>\n\n\n\n    <ion-buttons end>\n      <button ion-button icon-only>\n      <ion-icon end style="font-size: 30px;" name="sp-event" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="event" >\n\n  <div class="post animated slideInDown"   [style.background-image]="\' url(\'+event.backgroundImage+\')\'" >\n\n\n    <div class="postInfo">\n\n      <h2 class="animated bounceIn" text-center>{{event.name}}</h2>\n\n\n<div class="eventImage">\n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col>   <img src="{{event.image}}" style="object-fit: cover;" (click)="openImage(event.image)"></ion-col>\n    <ion-col></ion-col>\n\n  </ion-row>\n  </div>\n\n      <ion-grid>\n        <ion-row (click)="openProfile()" >\n          <ion-item no-lines text-left  clear>\n            <ion-avatar item-start >\n              <img src="{{user.image}}" style="object-fit: cover;">\n            </ion-avatar>\n\n            <h2 class="animated flipInX">{{user.name}}</h2>\n\n          </ion-item>\n        </ion-row>\n\n        <ion-row (click)="openProfile()" >\n          <ion-item no-lines text-left  clear>\n\n            <p item-end >\n              <small>\n                <ion-icon style="font-size: 20px;" name="eye" color="light"></ion-icon> {{event.viewCount}} k\n                &nbsp;\n                <ion-icon style="font-size: 20px;" name="sp-ice" color="light"></ion-icon> 16.3 k\n                &nbsp;\n                <ion-icon style="font-size: 20px;" name="sp-fire" color="light"></ion-icon> {{event.engageCount}} k\n              </small>\n            </p>\n          </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-6></ion-col>\n          <ion-col col-6></ion-col>\n        </ion-row>\n\n\n      </ion-grid>\n    </div>\n    <div class="seperator"></div>\n\n  </div>\n\n  <ion-grid  class="post animated slideInUp">\n\n  <ion-row>\n    <ion-col col-5><p style="font-weight: bold;">Event Date:</p></ion-col>\n    <ion-col col-7><p>{{event.date}}  </p></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-5><p style="font-weight: bold;">Time:</p></ion-col>\n    <ion-col col-7><p>{{event.startTime}} - {{event.endTime}}  </p></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-5><p style="font-weight: bold;">Venue Address:</p></ion-col>\n    <ion-col col-7><p>{{event.where}}</p></ion-col>\n  </ion-row>\n\n  <ion-row>\n    <ion-col col-5><p style="font-weight: bold;">Music Genre:</p></ion-col>\n    <ion-col col-7><p>{{event.genre}}</p></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-5><p style="font-weight: bold;">Event Description:</p></ion-col>\n    <ion-col col-7><p>{{event.details}}</p></ion-col>\n    </ion-row>\n  <ion-row>\n    <ion-col col-5><p style="font-weight: bold;">Dress Code:</p></ion-col>\n    <ion-col col-7><p>{{event.dressCode}}</p></ion-col>\n  </ion-row>\n    <ion-row>\n    <ion-col col-5><p style="font-weight: bold;">Guestlist Expiry:</p></ion-col>\n    <ion-col col-7><p>12:00 AM</p></ion-col>\n  </ion-row>\n\n    <ion-row padding-top padding-bottom>\n      <ion-col col-4>\n        <button ion-fab large color="black"  text-center  >\n          <img src="assets/images/cubes.png" style="object-fit: cover;">\n\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-fab large color="black"  text-center  >\n          <img src="assets/images/share.png" style="object-fit: cover;">\n        </button>\n      </ion-col>\n      <ion-col col-4>\n        <button ion-fab large color="black"  text-center  >\n          <img src="assets/images/flame.png" style="object-fit: cover;">\n        </button>\n      </ion-col>\n    </ion-row>\n\n    </ion-grid>\n\n\n  <div class="seperator" ></div>\n\n  <ion-grid padding-top >\n\n  <ion-row >\n\n    <ion-col col-2>\n      <img src="assets/images/ticket.png" style="object-fit: cover;">\n    </ion-col>\n\n    <ion-col col-10 text-left>\n      <h2>BOOK NOW</h2>\n    </ion-col>\n\n\n  </ion-row>\n\n\n  <ion-row >\n\n    <ion-col text-center>\n      <p ><small>DAYS</small></p>\n    </ion-col>\n\n    <ion-col text-center>\n      <p><small>HOURS</small></p>\n    </ion-col>\n\n    <ion-col text-center>\n      <p ><small>MINUTES</small></p>\n    </ion-col>\n\n    <ion-col text-center>\n      <p><small>SECONDS</small></p>\n    </ion-col>\n\n\n  </ion-row>\n\n    <ion-row >\n\n      <ion-col text-center>\n        <h2>05</h2>\n      </ion-col>\n\n      <ion-col text-center>\n        <h2>23</h2>\n      </ion-col>\n\n      <ion-col text-center>\n        <h2>35</h2>\n      </ion-col>\n\n      <ion-col text-center>\n        <h2>06</h2>\n      </ion-col>\n\n\n    </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/event/event.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */]])
], EventPage);

//# sourceMappingURL=event.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConversationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_message_model__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_notification_model__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ConversationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ConversationPage = (function () {
    function ConversationPage(navCtrl, navParams, dataService, camera, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.conversation = this.navParams.get('conversation');
        this.start();
        this.getParticipant();
    }
    ConversationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConversationPage');
    };
    ConversationPage.prototype.start = function () {
        var _this = this;
        //probelm here in
        if (this.dataService.messages.filter(function (item) { return item.code == _this.conversation.code; })) {
            this.messages = this.dataService.messages.filter(function (item) { return item.code == _this.conversation.code; });
        }
        console.log(this.messages);
    };
    ConversationPage.prototype.getParticipant = function () {
        var tempUser;
        if (this.dataService.account.code == this.conversation.participant1) {
            tempUser = this.conversation.participant2;
        }
        else {
            tempUser = this.conversation.participant1;
        }
        this.participant = this.dataService.users.filter(function (item) { return item.code == tempUser; })[0];
    };
    ConversationPage.prototype.getName = function (userCode) {
        var tempUser;
        tempUser = this.dataService.users.filter(function (item) { return item.code == userCode; })[0];
        return tempUser.name;
    };
    ConversationPage.prototype.sendMessage = function () {
        if (this.messageText) {
            var newMessage = new __WEBPACK_IMPORTED_MODULE_4__models_message_model__["a" /* Message */](this.conversation.code, this.dataService.account.code, this.participant.code, this.messageText, '');
            this.messages.push(newMessage);
            this.dataService.messages.push(newMessage);
            this.conversation.lastMessage = this.messageText;
            this.messageText = "";
            var newNotification = new __WEBPACK_IMPORTED_MODULE_5__models_notification_model__["a" /* Notification */](this.dataService.generateCode('notification'), this.dataService.account.code, this.participant.code, 'message', 'has sent you a message', this.conversation.code, false);
            this.dataService.notifications.push(newNotification);
            this.dataService.notificationBadge = this.dataService.notificationBadge + 1;
            console.log(newNotification);
        }
    };
    ConversationPage.prototype.sendAttachment = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Send Image',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    ConversationPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        // Get the data of an image
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            quality: 100
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            _this.image = "data:image/jpeg;base64," + imageData;
            _this.image = _this.image.replace(/(\r\n|\n|\r)/gm, "");
            _this.messageText = " sent a photo.";
            var newMessage2 = new __WEBPACK_IMPORTED_MODULE_4__models_message_model__["a" /* Message */](_this.conversation.code, _this.dataService.account.code, _this.participant.code, _this.messageText, _this.image);
            _this.messages.push(newMessage2);
            _this.dataService.messages.push(newMessage2);
            _this.conversation.lastMessage = _this.messageText;
            _this.messageText = "";
            _this.image = "";
        }, function (err) {
            console.log('error adding photo');
        });
    };
    return ConversationPage;
}());
ConversationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-conversation',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/conversation/conversation.html"*/'<!--\n  Generated template for the ConversationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><small>{{participant.name}}</small></ion-title>\n  </ion-navbar>\n  <div class="seperator"></div>\n\n</ion-header>\n\n\n<ion-content  class="conversation">\n\n  <ion-list no-lines>\n    <ion-item *ngFor="let message of messages" >\n\n      <div  *ngIf="message.user == dataService.account.code" text-right>\n        <div class="sender"  padding>\n          <h2>{{getName(message.user)}}</h2>\n          {{message.message}}\n        </div>\n      </div>\n      <div class="notSender" padding *ngIf="!(message.user == dataService.account.code)" text-left>\n        <h2>{{getName(message.user)}}</h2>\n        {{message.message}}\n      </div>\n\n      <img src="{{message.attachment}}" style="object-fit: cover;">\n\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer class="textarea" >\n  <ion-toolbar>\n    <ion-buttons left padding-left (click)="sendAttachment()">\n      <button ion-button icon-left color="main">\n        <ion-icon style="font-size: 30px;" name="camera"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n    <ion-input left type="text" [(ngModel)]="messageText" placeholder="Write a message...">\n    </ion-input>\n\n    <ion-buttons end padding-right>\n      <button ion-button icon-right color="sender" (click)="sendMessage()">\n        <ion-icon style="font-size: 30px;" name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/conversation/conversation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ConversationPage);

//# sourceMappingURL=conversation.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__venues_venues__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_events__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.options = ['Venues', 'Events', 'Bookings', 'Grab a Drink', 'Meet The Star', 'My Account', 'Friends', 'Contact Us', 'Share App'];
        this.menuIcons = ['sp-venue', 'sp-event', 'pricetag', 'sp-beer', 'star-outline', 'sp-account', 'people', 'paper-plane', 'sp-share'];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage.prototype.open = function (page) {
        if (page == 'Venues') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__venues_venues__["a" /* VenuesPage */]);
        }
        else if (page == 'Events') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__events_events__["a" /* EventsPage */]);
        }
        else if (page == 'Settings') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__settings_settings__["a" /* SettingsPage */]);
        }
    };
    MenuPage.prototype.closeModal = function () {
        this.navCtrl.pop();
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/menu/menu.html"*/'<!--\n  Generated template for the MenuPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n\n</ion-header>\n\n\n<ion-content class="menu">\n\n  <ion-row text-center padding-top>\n    <ion-col col-4 text-center></ion-col>\n    <ion-col col-4 text-center>\n        <div class="custom-avatar">\n            <img src="{{dataService.account.image}}" style="object-fit: cover;" />\n          </div>\n    </ion-col>\n    <ion-col col-4 text-center>\n      <button ion-fab large color="clear" (click)="closeModal()" text-center style="margin-left: auto;margin-right: auto; margin-top:35px;">\n        <ion-icon style="font-size: 40px;" name="settings" color="light" text-center></ion-icon>\n      </button>\n    </ion-col>\n  </ion-row>\n\n\n\n\n  <div style="width: 100%;">\n\n\n    <div class="menuOption" *ngFor="let option of options; let i = index">\n\n      <button ion-button clear large (click)="open(option)" text-center>\n        <ion-icon style="font-size: 5rem;" color="light" name="{{menuIcons[i]}}" text-center></ion-icon>\n      </button>\n      <p class="option-text">{{option}}</p>\n\n    </div>\n\n  </div>\n\n  <ion-fab bottom right class="niceborder">\n      <button ion-fab color="clear" (click)="closeModal()">\n        <ion-icon style="font-size: 30px;" name="menu" color="light" item-end></ion-icon>\n      </button>\n  </ion-fab>\n  \n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/menu/menu.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_event_event__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_conversation_conversation__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_conversation_model__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClubPage = (function () {
    function ClubPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.counter = Array;
        this.user = this.navParams.get('user');
        this.segment = 'info';
        //  console.log(this.club);
        this.start();
    }
    ClubPage.prototype.start = function () {
        var _this = this;
        this.events = this.dataService.events.filter(function (item) { return item.userCode == _this.user.code; });
        console.log(this.events);
    };
    ClubPage.prototype.openEvent = function (eventCode) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_event_event__["a" /* EventPage */], {
            eventCode: eventCode
        });
    };
    ClubPage.prototype.message = function (user) {
        var me = this.dataService.account;
        var conversation2Open;
        if (conversation2Open = this.dataService.conversations.filter(function (item) { return item.participant1 == me.code && item.participant2 == user.code; })[0]) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_conversation_conversation__["a" /* ConversationPage */], {
                conversation: conversation2Open
            });
        }
        else if (conversation2Open = this.dataService.conversations.filter(function (item) { return item.participant1 == user.code && item.participant2 == me.code; })[0]) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_conversation_conversation__["a" /* ConversationPage */], {
                conversation: conversation2Open
            });
        }
        else {
            var newConversation = new __WEBPACK_IMPORTED_MODULE_5__models_conversation_model__["a" /* Conversation */](this.dataService.generateCode('conversation'), me.code, user.code, '');
            this.dataService.conversations.push(newConversation);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_conversation_conversation__["a" /* ConversationPage */], {
                conversation: newConversation
            });
            console.log('new conversation');
        }
        console.log(user);
    };
    return ClubPage;
}());
ClubPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-club',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/club/club.html"*/'<ion-header>\n  <ion-navbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="userProfile">\n  <div class="profileHead"  [style.background-image]="\' url(\'+user.banner+\')\'">\n\n    <div class="profileInfo " >\n\n      <div style="height: 50%" >\n\n        <img src="assets/images/placeholder2.png"  style="object-fit: cover;" />\n\n      </div>\n\n      <div style="height: 50%" >\n\n        <div class="area" no-padding>\n          <ion-grid>\n\n            <ion-row >\n              <ion-item no-lines text-left>\n                <ion-avatar item-start>\n\n                  <img src="{{user.image}}" style="object-fit: cover;width: 80px;height: 80px; ">\n                </ion-avatar>\n                <h2>{{user.name}}</h2>\n                <h3>  <ion-icon *ngFor="let key of counter(user.rating)" name="star" color="main"></ion-icon> </h3>\n                <p>{{user.followersCount}} Followers</p>\n\n              </ion-item>\n            </ion-row>\n\n\n\n            <ion-row>\n              <ion-col text-left>\n\n              </ion-col>\n\n              <ion-col text-right>\n                <button color="light" item-end outline block ion-button class="animated slideInLeft" > <ion-icon name="person-add"></ion-icon> &nbsp; Follow</button>\n\n              </ion-col>\n\n              <ion-col text-right>\n\n\n                <button color="light" item-end outline block ion-button class="animated slideInRight" (click)="message(user)"><ion-icon name="chatboxes"></ion-icon> &nbsp; Message</button>\n              </ion-col>\n            </ion-row>\n\n\n          </ion-grid>\n\n\n          <ion-slides   autoplay="2000" loop="true" speed="2000" slidesPerView="4.5" spaceBetween="2" >\n\n            <ion-slide >\n              <img src="assets/images/gallery.jpg">\n            </ion-slide>\n\n            <ion-slide >\n              <img src="assets/images/gallery1.jpg" >\n            </ion-slide>\n\n            <ion-slide>\n              <img src="assets/images/gallery2.jpg" >\n            </ion-slide>\n\n            <ion-slide>\n              <img src="assets/images/club1.png" >\n            </ion-slide>\n\n          </ion-slides>\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n\n  </div>\n\n  <div class="seperator"></div>\n\n  <div padding-top padding-bottom >\n    <ion-segment [(ngModel)]="segment" color="light">\n\n      <ion-segment-button class="animated zoomInUp" value="events" style="font-family: gilroy;">\n        Events\n      </ion-segment-button>\n\n      <ion-segment-button class="animated zoomInUp" value="news" style="font-family: gilroy;">\n        News Feed\n      </ion-segment-button>\n\n      <ion-segment-button class="animated zoomInUp" value="gallery" style="font-family: gilroy;">\n        Gallery\n      </ion-segment-button>\n      <ion-segment-button class="animated zoomInUp" value="info" style="font-family: gilroy;">\n        Info\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch] ="segment">\n\n    <ion-list *ngSwitchCase="\'news\'" no-lines>\n\n          <club-post></club-post>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'events\'" no-lines>\n\n      <div class="post animated slideInUp"  *ngFor="let event of events"  [style.background-image]="\' url(\'+event.backgroundImage+\')\'" >\n\n        <div class="postInfo">\n          <ion-grid>\n            <ion-row >\n              <ion-item no-lines text-left>\n                <ion-avatar item-start >\n                  <img src="{{user.image}}" style="object-fit: cover;">\n                </ion-avatar>\n                <p item-end>\n                  <ion-icon style="font-size: 20px;" name="time" color="light"></ion-icon> 3h</p>\n              </ion-item>\n            </ion-row>\n\n\n            <ion-row >\n              <ion-col padding (click)="openEvent(event.code)">\n                <h3 class="animated bounceIn">{{event.name}}</h3>\n                <p class="animated flipInX">{{user.name}}</p>\n\n                <ion-row>\n                  <ion-col style="color:#f4f4f4;">  <ion-icon style="font-size: 20px;" name="eye" color="light"></ion-icon> {{event.viewCount}} k</ion-col>\n                  <ion-col style="color:#f4f4f4;">  <ion-icon style="font-size: 20px;" name="sp-fire" color="light"></ion-icon> {{event.engageCount}} k</ion-col>\n                  <ion-col></ion-col>\n                </ion-row>\n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n        </div>\n\n      </div>\n\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'gallery\'" no-lines>\n\n      <div class="gallery"    *ngFor="let image of dataService.assets/images" [style.background-image]="\' url(\'+image+\')\'">\n        <ion-row style="min-height: 100%;">\n          <ion-col col-12 text-right padding >\n            <img src="assets/images/placeholder2.png" >\n\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </ion-list>\n\n\n    <ion-list *ngSwitchCase="\'info\'" no-lines>\n\n\n        <ion-list no-lines padding-top>\n\n\n          <ion-item>\n            <ion-label text-left item-start>Music Genre:</ion-label>\n            <ion-label text-right>{{user.genre}}</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label text-left item-start>Age Group:</ion-label>\n            <ion-label text-right>{{user.ageGroup}}</ion-label>\n          </ion-item>\n\n          <ion-item>\n            <ion-label text-left item-start>Dress Code:</ion-label>\n            <ion-label text-right>{{user.dressCode}}</ion-label> </ion-item>\n\n          <ion-item>\n            <ion-label text-left item-start>Capacity:</ion-label>\n            <ion-label text-right>{{user.capacity}}</ion-label></ion-item>\n\n          <ion-item>\n            <ion-label text-left item-start>Address:</ion-label>\n            <ion-label text-right>{{user.address}}</ion-label>\n          </ion-item>\n\n\n\n        </ion-list>\n\n\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/club/club.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */]])
], ClubPage);

//# sourceMappingURL=club.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncountersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the EncountersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var EncountersPage = (function () {
    function EncountersPage(navCtrl, navParams, dataService, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.zone = zone;
        this.scrollAmount = 0;
        this.dataService.atTop = true;
    }
    EncountersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EncountersPage');
    };
    EncountersPage.prototype.scrollHandler = function (event) {
        var _this = this;
        this.zone.run(function () {
            // since scrollAmount is data-binded,
            // the update needs to happen in zone
            if (_this.content.scrollTop <= 0) {
                console.log('top');
                _this.dataService.atTop = true;
            }
            else {
                _this.dataService.atTop = false;
            }
        });
    };
    EncountersPage.prototype.menu = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
    };
    return EncountersPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], EncountersPage.prototype, "content", void 0);
EncountersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-encounters',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/encounters/encounters.html"*/'<!--\n  Generated template for the EncountersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar padding-left padding-right >\n\n    <ion-row>\n      <ion-col col-3> <img src="{{dataService.account.image}}" class="custom-avatar"  style="object-fit: cover;"  item-start (click)="open()"/> </ion-col>\n      <ion-col text-center col-6>\n        <p style="color: #ffffff;">ENCOUNTERS</p>\n      </ion-col>\n      <ion-col text-right col-3 >\n        <img src="assets/images/wink.png" style="object-fit: cover; width: 35px;">\n      </ion-col>\n\n    </ion-row>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="encounters" (ionScroll)="scrollHandler($event)" >\n\n  <ion-row>\n    <ion-col col-6 text-left padding-left>\n      <h5>MATCHES</h5>\n    </ion-col>\n    <ion-col col-6 text-right padding-right>\n      <ion-icon  style="font-size: 30px;" name="apps"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <div style="height: 35%" class=" animated slideInRight">\n    <ion-slides slidesPerView="3.5" spaceBetween="2"  >\n\n      <ion-slide *ngFor="let match of dataService.matches; let i = index" style="object-fit: cover;height:100%;">\n        <div style="height: 100%">\n          <img src="{{match.image}}" class="encounter-avatar"  style="object-fit: cover;"  />\n\n          <h5><small>{{match.name}}</small></h5>\n        </div>\n\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n\n<div>\n\n  <h5 class="seperator" padding-top padding-bottom>USERS YOU\'VE ENCOUNTERED</h5>\n\n  <div class="people animated flipInY"    *ngFor="let encounter of dataService.encounters; let i = index" [style.background-image]="\' url(\'+encounter.image+\')\'">\n    <ion-grid style="min-height: 100%" padding-top padding-bottom>\n\n      <ion-row><p small>&nbsp; {{i}} h Ago</p></ion-row>\n      <ion-row >\n        <ion-col col-12>\n          <h4 text-center>{{encounter.name}}</h4>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col text-left>\n          <ion-icon style="font-size: 30px;" name="heart" color="light" ></ion-icon>\n        </ion-col>\n        <ion-col text-right>\n          <img src="assets/images/wink.png" style="object-fit: cover; width: 35px;">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</div>\n\n\n\n  <ion-fab bottom right class="menu" >\n    <button ion-fab  color="black"  (click)="menu()"  >\n      <ion-icon style="font-size: 30px;" name="menu" color="light" item-end></ion-icon>\n    </button>\n  </ion-fab>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/encounters/encounters.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], EncountersPage);

//# sourceMappingURL=encounters.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VenuesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the VenuesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var VenuesPage = (function () {
    function VenuesPage(navCtrl, navParams, dataService, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.zone = zone;
        this.scrollAmount = 0;
        this.dataService.atTop = true;
    }
    VenuesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VenuesPage');
    };
    VenuesPage.prototype.scrollHandler = function (event) {
        var _this = this;
        this.zone.run(function () {
            // since scrollAmount is data-binded,
            // the update needs to happen in zone
            if (_this.content.scrollTop <= 0) {
                console.log('top');
                _this.dataService.atTop = true;
            }
            else {
                _this.dataService.atTop = false;
            }
        });
    };
    return VenuesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], VenuesPage.prototype, "content", void 0);
VenuesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-venues',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/venues/venues.html"*/'<!--\n  Generated template for the VenuesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n\n\n    <ion-row>\n\n      <ion-col text-center col-9>\n        <p style="color: #ffffff;">VENUES</p>\n      </ion-col>\n      <ion-col text-right col-3 >\n        <ion-icon style="font-size: 30px;" name="pin" color="light"></ion-icon>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-padding class="venues" (ionScroll)="scrollHandler($event)">\n\n  <div style="height: 25%" class=" animated slideInRight">\n    <ion-slides   autoplay="2000" loop="true" speed="2000" slidesPerView="2.5" spaceBetween="2"  >\n\n\n      <ion-slide *ngFor="let venue of dataService.venues" [style.background-image]="\' url(\'+venue.backgroundImage+\')\'" style="object-fit: cover;height:100%;">\n        <div style="height: 60%">\n          <h2>&nbsp;</h2>\n        </div>\n\n        <div style="height: 40%">\n          <h2>{{venue.name}}</h2>\n        </div>\n\n      </ion-slide>\n\n\n    </ion-slides>\n  </div>\n  <div style="height: 75%">\n    <venue></venue>\n  </div>\n\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/venues/venues.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */]])
], VenuesPage);

//# sourceMappingURL=venues.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PreviewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PreviewPage = (function () {
    function PreviewPage(navCtrl, navParams, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.post = this.navParams.get('post');
        console.log(this.post);
    }
    PreviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreviewPage');
    };
    PreviewPage.prototype.getName = function (userCode) {
        var user = this.dataService.users.filter(function (item) { return item.code == userCode; })[0];
        return user.name;
    };
    PreviewPage.prototype.getAvatar = function (userCode) {
        var user = this.dataService.users.filter(function (item) { return item.code == userCode; })[0];
        return user.image;
    };
    PreviewPage.prototype.save = function () {
        this.dataService.news.splice(0, 0, this.post);
        this.navCtrl.parent.select(0);
    };
    return PreviewPage;
}());
PreviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-preview',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/preview/preview.html"*/'<ion-header class="transparentBG">\n    <ion-navbar>\n        <ion-title>PREVIEW</ion-title>\n    </ion-navbar>\n    <div class="seperator"></div>\n</ion-header>\n\n<ion-content class="preview">\n    <!-- Generated template for the ClubPostComponent component -->\n    <div class="post animated fadeIn" [style.background-image]="\' url(\'+post.backgroundImage+\')\'">\n        <div class="postInfo">\n            <ion-item no-lines text-left color="clear">\n                <ion-avatar item-start>\n                    <img src="{{getAvatar(post.userCode)}}" style="object-fit: cover;">\n                </ion-avatar>\n\n                <p class="animated flipInX">{{getName(post.userCode)}}</p>\n                <p class="timeDisplay" item-end>\n                    <ion-icon name="sp-clock"></ion-icon>Now</p>\n            </ion-item>\n\n            <div *ngIf="image" class="backgroundImg">\n                <img src="{{post.image}}">\n            </div>\n\n            <div class="postRow" *ngIf="post.type == \'business\'">\n                <h3 class="animated">{{post.title}}</h3>\n                <p class="animated flipInX">{{post.description}}</p>\n                <div class="postRowCount">\n                    <ion-icon name="eye"></ion-icon> {{post.viewCount}} k\n                </div>\n                <div class="postRowCount">\n                    <ion-icon name="sp-fire"></ion-icon> {{post.fireCount}} k\n                </div>\n            </div>\n\n            <div class="postRow" *ngIf="post.type == \'individual\'">\n                <p class="animated flipInX">{{post.description}}</p>\n                <div class="postRowCount">\n                    <ion-icon name="sp-ice"></ion-icon>\n                    {{post.viewCount}} k\n                </div>\n                <div class="postRowCount">\n                    <ion-icon name="sp-fire"></ion-icon> {{post.fireCount}} k\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class="removePostButs">\n        <div class="removePostButsInner" (click)="save();">\n            <ion-icon name="ios-leaf-outline"></ion-icon>\n            Post\n        </div>\n    </div>\n</ion-content>\n\n<ion-footer>\n    <div class="seperator"></div>\n</ion-footer>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/preview/preview.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service__["a" /* DataService */]])
], PreviewPage);

//# sourceMappingURL=preview.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__preview_preview__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NewEventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var NewEventPage = (function () {
    function NewEventPage(navCtrl, navParams, dataService, camera, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.today = new Date();
        this.start();
    }
    NewEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewEventPage');
    };
    NewEventPage.prototype.start = function () {
        this.setupTime();
        this.image = "";
        this.background = "";
    };
    NewEventPage.prototype.preview = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__preview_preview__["a" /* PreviewPage */]);
    };
    NewEventPage.prototype.setupTime = function () {
        var tempTime;
        tempTime = new Date();
        tempTime.setMinutes(0);
        this.startTime = tempTime.toISOString();
        this.endTime = tempTime.toISOString();
        this.today.setHours(0, -this.today.getTimezoneOffset(), 0, 0); //removing the timezone offset.
        this.date = this.today.toISOString();
        console.log(this.startTime);
        console.log(this.endTime);
        console.log(this.date);
    };
    NewEventPage.prototype.getPicture = function (type) {
        var _this = this;
        console.log(type);
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY, type);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA, type);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    NewEventPage.prototype.takePicture = function (sourceType, imageType) {
        var _this = this;
        var tempImage;
        console.log(imageType);
        // Get the data of an image
        this.camera.getPicture({
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: sourceType,
            quality: 100
        }).then(function (imageData) {
            // imageData is a base64 encoded string
            tempImage = "data:image/jpeg;base64," + imageData;
            tempImage = tempImage.replace(/(\r\n|\n|\r)/gm, "");
            if (imageType == 'background') {
                _this.background = tempImage;
            }
            else {
                _this.image = tempImage;
            }
        }, function (err) {
            console.log('error adding photo');
        });
    };
    return NewEventPage;
}());
NewEventPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-event',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/new-event/new-event.html"*/'<!--\n  Generated template for the NewEventPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title><small>NEW EVENT</small></ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon end style="font-size: 30px;" name="sp-event" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content class="newPost" >\n\n\n\n\n        <ng-container>\n\n          <ion-row>\n            <ion-col> <h2 text-center class="animated flipInX">Name</h2></ion-col>\n\n          </ion-row>\n\n          <ion-row>\n            <ion-textarea [(ngModel)]="name" rows="2" style="font-family: gilroy-light;" placeholder="e.g Birthday Party" text-center></ion-textarea>\n          </ion-row>\n\n          <ion-row>\n            <ion-col> <h2 text-center class="animated flipInX">Details</h2></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>   <ion-textarea [(ngModel)]="details" rows="3" style="font-family: gilroy-light;" placeholder="Add more info ..." text-center></ion-textarea>\n            </ion-col>\n          </ion-row>\n\n\n\n          <ion-row>\n            <ion-col> <h2 text-center class="animated flipInX">When</h2></ion-col>\n            <ion-col> <h2 text-center class="animated flipInX">Where</h2></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col text-center >  <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]="date" ></ion-datetime>  </ion-col>\n            <ion-col text-center >  <ion-textarea [(ngModel)]="where" rows="3" style="font-family: gilroy-light;" placeholder="Add a place ?" text-center></ion-textarea>\n            </ion-col>\n\n          </ion-row>\n\n          <ion-row>\n\n            <ion-col> <h2 text-center class="animated flipInX">Start</h2></ion-col>\n            <ion-col><h2 text-center class="animated flipInX">End </h2></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>      <ion-datetime displayFormat="HH:mm A"  [(ngModel)]="startTime" text-center></ion-datetime></ion-col>\n            <ion-col>      <ion-datetime displayFormat="HH:mm A"  [(ngModel)]="endTime"  text-center></ion-datetime></ion-col>\n          </ion-row>\n\n\n\n\n          <ion-row>\n            <ion-col> <h2 text-center class="animated flipInX">Genre</h2></ion-col>\n            <ion-col> <h2 text-center class="animated flipInX">Dress Code</h2></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>    <ion-textarea [(ngModel)]="genre" rows="1" style="font-family: gilroy-light; " placeholder="Music genre" text-center></ion-textarea>\n            </ion-col>\n            <ion-col>   <ion-textarea [(ngModel)]="dressCode" rows="2" style="font-family: gilroy-light;" placeholder="Black Tie" text-center></ion-textarea>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col> <h2 text-center class="animated flipInX">Banner</h2></ion-col>\n            <ion-col> <h2 text-center class="animated flipInX">Image</h2></ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col text-center  (click)="getPicture(\'background\')" >\n              <ion-icon  *ngIf="background.length == 0" style="font-size: 30px;" name="camera" color="light" ></ion-icon>\n              <img *ngIf="background.length > 0" src="{{background}}"  style="object-fit: cover;">\n            </ion-col>\n\n            <ion-col text-center (click)="getPicture(\'image\')">\n              <ion-icon  *ngIf="image.length == 0" style="font-size: 30px;" name="camera" color="light"  ></ion-icon>\n              <img *ngIf="image.length > 0" src="{{image}}"   style="object-fit: cover;">\n            </ion-col>\n          </ion-row>\n\n\n        </ng-container>\n\n\n\n    <ion-item class="animated bounceInUp" no-lines>\n      <button color="light" ion-button block  large (click)="preview()">Preview</button>\n    </ion-item>\n\n\n\n\n\n</ion-content>\n\n<ion-footer>\n  <div class="seperator"></div>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/new-event/new-event.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], NewEventPage);

//# sourceMappingURL=new-event.js.map

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_post_model__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user_model__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_event_model__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_venue_model__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_conversation_model__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_message_model__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__models_notification_model__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//MODELS







/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.news = new Array(); // array of all posts
        this.users = new Array(); // array of all users codes
        this.friends = new Array(); // array of all users codes
        this.followers = new Array(); // array of all users codes
        this.encounters = new Array(); // array of all users codes
        this.matches = new Array(); // array of all users codes
        this.events = new Array(); // array of all events codes
        this.venues = new Array(); // array of all venues codes
        this.conversations = new Array(); // array of all events codes
        this.messages = new Array(); // array of all messages
        this.notifications = new Array(); // array of all notifications
        this.images = ['assets/images/gallery1.jpg', 'assets/images/gallery2.jpg', 'assets/images/gallery.jpg', 'assets/images/banner2.jpg', 'assets/images/banner3.jpg'];
        this.girls = ['assets/images/girl1.jpg', 'assets/images/girl2.jpg', 'assets/images/girl3.jpg', 'assets/images/girl4.jpg', 'assets/images/girl5.jpg'];
        console.log('Hello DataServiceProvider Provider');
        this.loadData();
        for (var _i = 0, _a = [1, 2, 3, 4, 5, 6, 7]; _i < _a.length; _i++) {
            var i = _a[_i];
            this.conversations.push(new __WEBPACK_IMPORTED_MODULE_7__models_conversation_model__["a" /* Conversation */]('convo' + (i + 3), 'userCode0', 'userCode' + (i + 1), 'Whatsaaap?'));
        }
        ;
    }
    DataService.prototype.loadData = function () {
        this.atTop = true;
        this.newUserPost = false;
        var newNews1 = new __WEBPACK_IMPORTED_MODULE_3__models_post_model__["a" /* Post */]('testCode1', 'userCode1', 'business', '', 'LADIES NIGHT', 'Arguably the best in central London, the Roxy’s rooftop deck offers stunning views of the midtown city skyline.', 'assets/images/gallery.jpg', '', '12.3', '3.4', '32.1', 'eventCode1');
        var newNews2 = new __WEBPACK_IMPORTED_MODULE_3__models_post_model__["a" /* Post */]('testCode2', 'userCode2', 'business', '', 'HUNTED HALLOWEEN', 'Enjoy a cocktail or two from the comprehensive cocktail list with enticing choices like the Café Le Peche, an espresso martini with a twist.', 'assets/images/club3.jpg', '', '11.3', '10.4', '32.1', 'eventCode2');
        var newNews3 = new __WEBPACK_IMPORTED_MODULE_3__models_post_model__["a" /* Post */]('testCode3', 'userCode3', 'individual', '', '', 'TGIF People, lets meet up and get on it', '', 'assets/images/profile4.jpg', '0', '0', '0', 'eventCode2');
        this.news.push(newNews3);
        this.news.push(newNews1);
        this.news.push(newNews2);
        var newUser1 = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]('userCode1', 'business', 'Deep Dome', 'G', 'C', 'C', 'M', 'O', 'I', 'O', 'H', 'N', 'D', 'S', 'A', 4, 2145, 456, 'Dance', '18+', 'Dress to impress', 500, '234 High Street', 'test@deepdome.com', 'assets/images/logo2.jpg', 'assets/images/gallery.jpg', 'hashTest');
        var newUser2 = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]('userCode2', 'business', 'Pure Night CLub', 'G', 'C', 'C', 'M', 'O', 'I', 'O', 'H', 'N', 'D', 'S', 'A', 5, 2000, 1560, 'Electro', '18+', 'Formal', 500, '1A Vault Drive', 'test@nightclub.com', 'assets/images/logo.jpg', 'assets/images/banner1.jpg', 'hashTest');
        var newUser3 = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]('userCode3', 'individual', 'Paula Rain', 'Female', 'London', 'UK', 'M', 'Accountant', 'Single', 'Straight', 1.75, 'British', true, true, 'Looking for some fun', 0, 350, 150, 'G', 'A', 'D', 'C', 'Address', 'paula@gmail.com', 'assets/images/profile2.jpg', '', 'hashTest');
        var newUser4 = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]('userCode4', 'individual', 'Jemma', 'Female', 'Paris', 'France', 'M', 'Retail', 'Single', 'Straight', 1.80, 'French', true, true, 'Lets drink', 0, 133, 76, 'G', 'A', 'D', 'C', 'Address', 'jemma@gmail.com', 'assets/images/girl5.jpg', '', 'hashTest');
        var newUser5 = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]('userCode5', 'individual', 'Sara Beaz', 'Female', 'Mexico City', 'Mexico', 'M', 'Accountant', 'Single', 'Straight', 1.75, 'British', true, true, 'Looking for some fun', 0, 350, 150, 'G', 'A', 'D', 'C', 'Address', 'paula@gmail.com', 'assets/images/profile5.jpg', '', 'hashTest');
        var newUser6 = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]('userCode6', 'individual', 'James Hussein', 'Male', 'Shenzhen', 'China', 'M', 'Retail', 'Single', 'Straight', 1.80, 'French', true, true, 'Lets drink', 0, 133, 76, 'G', 'A', 'D', 'C', 'Address', 'jemma@gmail.com', 'assets/images/profile6.jpg', '', 'hashTest');
        var newUser7 = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]('userCode7', 'individual', 'Karemiks', 'Male', 'London', 'UK', 'M', 'Accountant', 'Single', 'Straight', 1.75, 'British', true, true, 'Looking for some fun', 0, 350, 150, 'G', 'A', 'D', 'C', 'Address', 'paula@gmail.com', 'assets/images/profile7.jpg', '', 'hashTest');
        var newUser8 = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]('userCode8', 'individual', 'Tiffany Watson', 'Female', 'Apia', 'Samia', 'M', 'Retail', 'Single', 'Straight', 1.80, 'French', true, true, 'Lets drink', 0, 133, 76, 'G', 'A', 'D', 'C', 'Address', 'jemma@gmail.com', 'assets/images/profile8.jpg', '', 'hashTest');
        var newUser9 = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]('userCode9', 'individual', 'Megan Left', 'Auckland', 'New Zealand', 'UK', 'M', 'Accountant', 'Single', 'Straight', 1.75, 'British', true, true, 'Looking for some fun', 0, 350, 150, 'G', 'A', 'D', 'C', 'Address', 'paula@gmail.com', 'assets/images/profile9.jpg', '', 'hashTest');
        var newUser10 = new __WEBPACK_IMPORTED_MODULE_4__models_user_model__["a" /* User */]('userCode10', 'individual', 'Pauline', 'Female', 'Suva', 'Fiji', 'M', 'Retail', 'Single', 'Straight', 1.80, 'French', true, true, 'Lets drink', 0, 133, 76, 'G', 'A', 'D', 'C', 'Address', 'jemma@gmail.com', 'assets/images/profile10.jpg', '', 'hashTest');
        this.users.push(newUser1);
        this.users.push(newUser2);
        this.users.push(newUser3);
        this.users.push(newUser4);
        this.users.push(newUser5);
        this.users.push(newUser6);
        this.users.push(newUser7);
        this.users.push(newUser8);
        this.users.push(newUser9);
        this.users.push(newUser10);
        this.friends.push(newUser3);
        this.friends.push(newUser4);
        this.followers.push(newUser1);
        this.followers.push(newUser2);
        this.encounters.push(newUser6);
        this.encounters.push(newUser7);
        this.matches.push(newUser5);
        this.matches.push(newUser8);
        this.matches.push(newUser9);
        this.matches.push(newUser10);
        var newEvent1 = new __WEBPACK_IMPORTED_MODULE_5__models_event_model__["a" /* Event */]('eventCode1', 'userCode1', 'LADIES NIGHT', 'Arguably the best in central London, the Roxy’s rooftop deck offers stunning views of the midtown city skyline.', '101 The Avenue, Dunedin', 'Dance', 'Formal', 'Friday, 1st September', '10:00', '4:00', 'assets/images/gallery.jpg', 'assets/images/event.jpg', '12.3', '3.4');
        var newEvent2 = new __WEBPACK_IMPORTED_MODULE_5__models_event_model__["a" /* Event */]('eventCode2', 'userCode2', 'HUNTED HALLOWEEN', 'Enjoy a cocktail or two from the comprehensive cocktail list with enticing choices like the Café Le Peche, an espresso martini with a twist.', '34 High Street, Auckland', 'Dance', 'Dress to impress', 'Friday, 1st September', '10:30', '4:00', 'assets/images/club3.jpg', 'assets/images/event1.jpg', '11.3', '10.4');
        this.events.push(newEvent1);
        this.events.push(newEvent2);
        var venue1 = new __WEBPACK_IMPORTED_MODULE_6__models_venue_model__["a" /* Venue */]('venueCode1', 'Venue 1', 0, 'assets/images/venue1.png', 'assets/images/venue1.jpg');
        var venue2 = new __WEBPACK_IMPORTED_MODULE_6__models_venue_model__["a" /* Venue */]('venueCode2', 'Venue 2', 0, 'assets/images/venue4.jpg', 'assets/images/venue2.jpg');
        var venue3 = new __WEBPACK_IMPORTED_MODULE_6__models_venue_model__["a" /* Venue */]('venueCode3', 'Venue 3', 0, 'assets/images/venue2.png', 'assets/images/venue3.jpg');
        this.venues.push(venue2);
        this.venues.push(venue1);
        this.venues.push(venue3);
        var conversation1 = new __WEBPACK_IMPORTED_MODULE_7__models_conversation_model__["a" /* Conversation */]('convo1', 'userCode0', 'userCode3', 'Hey Watsup');
        var conversation2 = new __WEBPACK_IMPORTED_MODULE_7__models_conversation_model__["a" /* Conversation */]('convo2', 'userCode4', 'userCode0', 'Lesssss go');
        var conversation3 = new __WEBPACK_IMPORTED_MODULE_7__models_conversation_model__["a" /* Conversation */]('convo3', 'userCode0', 'userCode2', 'When is your next event?');
        this.conversations.push(conversation1);
        this.conversations.push(conversation2);
        this.conversations.push(conversation3);
        var message1 = new __WEBPACK_IMPORTED_MODULE_8__models_message_model__["a" /* Message */]('convo1', 'userCode0', 'userCode3', 'Hey Watsup', '');
        var message2 = new __WEBPACK_IMPORTED_MODULE_8__models_message_model__["a" /* Message */]('convo2', 'userCode4', 'userCode0', 'Lesssss go', '');
        var message3 = new __WEBPACK_IMPORTED_MODULE_8__models_message_model__["a" /* Message */]('convo3', 'userCode0', 'userCode2', 'When is your next event?', '');
        this.messages.push(message1);
        this.messages.push(message2);
        this.messages.push(message3);
        var notification1 = new __WEBPACK_IMPORTED_MODULE_9__models_notification_model__["a" /* Notification */]('notification1', 'userCode1', 'userCode3', 'new event', 'posted a new event', 'eventCode1', false);
        var notification2 = new __WEBPACK_IMPORTED_MODULE_9__models_notification_model__["a" /* Notification */]('notification2', 'userCode2', 'userCode0', 'new event', 'posted a new event', 'eventCode2', false);
        var notification3 = new __WEBPACK_IMPORTED_MODULE_9__models_notification_model__["a" /* Notification */]('notification3', 'userCode0', 'userCode3', 'message', 'has sent you a message', 'convo1', false);
        var notification4 = new __WEBPACK_IMPORTED_MODULE_9__models_notification_model__["a" /* Notification */]('notification4', 'userCode4', 'userCode0', 'message', 'has sent you a message', 'convo2', false);
        var notification5 = new __WEBPACK_IMPORTED_MODULE_9__models_notification_model__["a" /* Notification */]('notification5', 'userCode0', 'userCode2', 'message', 'has sent you a message', 'convo3', false);
        var notification6 = new __WEBPACK_IMPORTED_MODULE_9__models_notification_model__["a" /* Notification */]('notification6', 'userCode1', 'userCode', 'new event', 'posted a new event', 'eventCode1', false);
        this.notifications.push(notification1);
        this.notifications.push(notification2);
        this.notifications.push(notification3);
        this.notifications.push(notification4);
        this.notifications.push(notification5);
        this.notifications.push(notification6);
    };
    DataService.prototype.getNotificationBadgeNumber = function () {
        var _this = this;
        console.log('checking for new notifications');
        var temp = this.notifications.filter(function (item) { return item.recipient == _this.account.code; });
        if (temp) {
            this.notificationBadge = temp.length;
            if (this.notificationBadge == 0) {
                this.messageBadge = null;
            }
        }
        else {
            this.notificationBadge = null;
        }
    };
    DataService.prototype.getMessageBadgeNumber = function () {
        var _this = this;
        console.log('checking for new messages');
        var temp = this.notifications.filter(function (item) { return item.recipient == _this.account.code && item.action == 'message'; });
        if (temp) {
            this.messageBadge = temp.length;
            if (this.messageBadge == 0) {
                this.messageBadge = null;
            }
        }
        else {
            this.messageBadge = null;
        }
    };
    DataService.prototype.generateCode = function (type) {
        //new user code
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 50; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        text = type + text;
        return text;
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DataService);

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_post_new_post__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_event_new_event__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var HomePage = (function () {
    function HomePage(navCtrl, dataService, alertCtrl, app, zone, modalCtrl) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.zone = zone;
        this.modalCtrl = modalCtrl;
        this.scrollAmount = 0;
        this.dataService.newUserPost = false;
        this.dataService.atTop = true;
        this.situationLabel = "NEWS FEED";
    }
    HomePage.prototype.open = function () {
        var _this = this;
        var actionSheet = this.alertCtrl.create({
            title: 'User',
            buttons: [
                {
                    text: 'Profile',
                    handler: function () {
                        console.log(_this.dataService.account.code);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__user_profile_user_profile__["a" /* UserProfilePage */], {
                            userCode: _this.dataService.account.code
                        });
                    }
                }, {
                    text: 'Logout',
                    handler: function () {
                        _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.scrollHandler = function (event) {
        var _this = this;
        this.zone.run(function () {
            // since scrollAmount is data-binded,
            // the update needs to happen in zone
            if (_this.content.scrollTop <= 0) {
                console.log('top');
                _this.dataService.atTop = true;
            }
            else {
                _this.dataService.atTop = false;
            }
        });
    };
    HomePage.prototype.scrollUp = function () {
        console.log('scroll up baby');
        this.content.scrollToTop();
    };
    HomePage.prototype.new = function () {
        if (this.dataService.account.type == 'club') {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__new_event_new_event__["a" /* NewEventPage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__new_post_new_post__["a" /* NewPostPage */]);
        }
    };
    HomePage.prototype.search = function () {
        // console.log(this.searchTerm);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */], {
            search: this.searchTerm
        });
    };
    HomePage.prototype.menu = function () {
        //let modal = this.modalCtrl.create(MenuPage);
        // modal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
        // this.navCtrl.parent.select('tab5Root');
    };
    HomePage.prototype.close = function () {
        console.log('close please');
        this.dataService.newUserPost = false;
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], HomePage.prototype, "content", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-navbar padding-left hideBackButton>\n        <img *ngIf="!(dataService.newUserPost)" src="{{dataService.account.image}}" class="custom-avatar" style="object-fit: cover;" item-start (click)="open()" />\n\n        <ion-title>{{situationLabel}}</ion-title>\n\n        <ion-buttons end class="rightIcons">\n            <button ion-button (click)="search();">\n                <ion-icon name="search"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="home" (ionScroll)="scrollHandler($event)">\n\n\n    <ion-item class="searchForm">\n        <ion-input type="text" placeholder="Whats on your mind {{dataService.account.name}}?"></ion-input>\n        <button item-end ion-button color="black" (click)="new()">\n            <img src="assets/images/newPost-white.png">\n        </button>\n    </ion-item>\n\n    <club-post></club-post>\n\n    <ion-fab bottom right class="menu">\n        <button ion-fab color="black" (click)="menu()">\n          <ion-icon style="font-size: 30px;" name="menu" color="light" item-end></ion-icon>\n        </button>\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signupverification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signupsteps_signupsteps__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var signupverification = (function () {
    function signupverification(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    signupverification.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad signup verification');
    };
    signupverification.prototype.signupsteps = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signupsteps_signupsteps__["a" /* signupsteps */]);
    };
    return signupverification;
}());
signupverification = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'signupverification',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/signupverification/signupverification.html"*/'<ion-header class="transparentBG">\n    <ion-navbar>\n        <ion-title>USER REGISTEATION</ion-title>\n    </ion-navbar>\n    <div class="seperator"></div>\n</ion-header>\n\n<ion-content >\n    <img src="assets/imgs/signUpverification.png">\n\n    <ion-list id="digits">\n            <ion-item *ngFor="let digit of [1,2,3,4,5]" class="digit">\n                    <ion-input ion-text color="dark" type="number" placeholder="*" ></ion-input>\n            </ion-item>\n    </ion-list>\n\n    <div class="welcoming">\n        <h6 ion-text color="main">WELCOME TO SWIFTVIBE</h6>\n        <p ion-text color="light">we sent you a verification <br> code to your mobile, please insert the code</p>\n    </div>    \n    <div class="bottomText">\n        <button class="appgradient" ion-button (click)="signupsteps()">\n        CONFIRM VERIFICATION CODE\n    </button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/signupverification/signupverification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], signupverification);

//# sourceMappingURL=signupverification.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return signupsteps; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var signupsteps = (function () {
    function signupsteps(navCtrl, navParams, userData, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.interests = ['Clubbing', 'Dancing', 'Hiking'];
        this.intentions = ['Stablish business', 'Arranging hangouts'];
        this.businessInterests = ['Clubbing', 'Dancing', 'Hiking'];
        this.foods = ['Alcohol', 'Soft Drink'];
    }
    signupsteps.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad signupsteps');
        console.log(this.user);
    };
    signupsteps.prototype.addMore = function (arr, name) {
        var title = this.capitalize(name);
        var msg = "Enter a new value for the " + name;
        this.showAddMorePrompt(title, msg).then(function (item) {
            arr.push(item);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    signupsteps.prototype.removeFromArr = function (arr, item) {
        arr.splice(arr.indexOf(item), 1);
    };
    signupsteps.prototype.capitalize = function (str) {
        return str[0].toUpperCase() + str.slice(1);
    };
    signupsteps.prototype.showAddMorePrompt = function (title, message) {
        var _this = this;
        return new Promise(function (res, rej) {
            var prompt = _this.alertCtrl.create({
                title: title,
                message: message,
                inputs: [
                    {
                        name: title.toLowerCase(),
                        placeholder: title
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                            rej('canceled');
                        }
                    },
                    {
                        text: 'Save',
                        handler: function (data) {
                            console.log('saved', data, data[0]);
                            res(data[title.toLowerCase()]);
                        }
                    }
                ]
            });
            prompt.present();
        });
    };
    signupsteps.prototype.openBusinessSignup = function () {
        this.user = this.userData.users[0]; //config to be business user
        this.nextstep();
    };
    signupsteps.prototype.nextstep = function () {
        this
            .slides
            .slideNext();
    };
    signupsteps.prototype.login = function () {
        this
            .navCtrl
            .setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return signupsteps;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
], signupsteps.prototype, "slides", void 0);
signupsteps = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ selector: 'signupsteps',template:/*ion-inline-start:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/signupsteps/signupsteps.html"*/'<ion-header class="transparentBG">\n    <ion-navbar>\n        <ion-title>USER PROFILE</ion-title>\n    </ion-navbar>\n    <div class="seperator"></div>\n</ion-header>\n\n<ion-content class="login inputForms">\n\n\n    <ion-slides pager>\n        <ion-slide>\n            <h3>Choose Your Account type:</h3>\n\n            <ion-list text-center>\n                <button color="individual" ion-button (click)="nextstep()">\n                    Individual\n                </button>\n                <button color="business" ion-button (click)="openBusinessSignup()">\n                    Business\n                </button>\n                <button margin-top class="next" color="secondary" ion-button (click)="nextstep()">\n                    Next\n                </button>\n            </ion-list>\n\n        </ion-slide>\n        <!--start ng-logic-->\n        <ng-container *ngIf="!user || user?.type !== \'business\'">\n            <ion-slide>\n                <form>\n                    <div class="profilePicUpload">\n                        <ion-icon name="ios-camera"></ion-icon>\n                        <p>Add Photo</p>\n                    </div>\n\n                    <ion-list text-center>\n                        <ion-item>\n                            <ion-input class="userIcon" type="text" placeholder="Name"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-input class="birthdayIcon" type="text" placeholder="Birthday"></ion-input>\n                        </ion-item>\n                        <div class="genderInfo" radio-group>\n                            <ion-item class="radioIcon">\n                                <ion-radio name="gender" checked="true" value="Male"></ion-radio>\n                                <ion-label>Male</ion-label>\n                            </ion-item>\n\n                            <ion-item class="radioIcon">\n                                <ion-radio name="gender" value="Female"></ion-radio>\n                                <ion-label>Female</ion-label>\n                            </ion-item>\n                        </div>\n                        <button class="next" color="main" ion-button (click)="nextstep()">\n                            Next\n                        </button>\n                    </ion-list>\n                </form>\n            </ion-slide>\n\n            <ion-slide>\n                <div class="musicSelection">\n                    <p>For best experience, please select your music genre preference</p>\n                    <ion-searchbar placeholder="Search Music Genre"></ion-searchbar>\n\n                    <div class="musicList" style="background:url(assets/imgs/musicBG1.jpg)">\n                        <div class="musicListInner">\n                            <img src="../assets/imgs/musicIcon.png">\n                            <h6>HipHop</h6>\n                            <div class="seperator"></div>\n                        </div>\n                    </div>\n\n                    <div class="musicList" style="background:url(assets/imgs/musicBG2.jpg)">\n                        <div class="musicListInner">\n                            <img src="../assets/imgs/musicIcon.png">\n                            <h6>Trap</h6>\n                            <div class="seperator"></div>\n                        </div>\n                    </div>\n\n                    <div class="musicList" style="background:url(assets/imgs/musicBG3.jpg)">\n                        <div class="musicListInner">\n                            <img src="../assets/imgs/musicIcon.png">\n                            <h6>R &amp; B</h6>\n                            <div class="seperator"></div>\n                        </div>\n                    </div>\n\n                    <div class="musicList" style="background:url(assets/imgs/musicBG2.jpg)">\n                        <div class="musicListInner">\n                            <img src="../assets/imgs/musicIcon.png">\n                            <h6>electro</h6>\n                            <div class="seperator"></div>\n                        </div>\n                    </div>\n\n                    <button class="next" color="main" ion-button (click)="nextstep()">\n                        Next\n                    </button>\n                </div>\n            </ion-slide>\n\n            <ion-slide>\n                <form class="moreInfoabout">\n                    <p>Share some more info about you\n                        <span>You may skip this step for now</span>\n                    </p>\n                    <ion-list text-center>\n                        <ion-item>\n                            <ion-label>Nationality</ion-label>\n                            <ion-select>\n                                <ion-option value="Indian">Indian</ion-option>\n                                <ion-option value="Italian" selected>Italian</ion-option>\n                                <ion-option value="German">German</ion-option>\n                                <ion-option value="Australian">Australian</ion-option>\n                                <ion-option value="Japanese">Japanese</ion-option>\n\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Occupation</ion-label>\n                            <ion-select>\n                                <ion-option value="Operations Manager" selected>Operations Manager</ion-option>\n                                <ion-option value="Operations Head">Operations Head</ion-option>\n                                <ion-option value="Marketing">Marketing</ion-option>\n                                <ion-option value="Freelancer">Freelancer</ion-option>\n                                <ion-option value="Human Resource">Human Resource</ion-option>\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Orientation</ion-label>\n                            <ion-select>\n                                <ion-option value="Straight" selected>Straight</ion-option>\n                                <ion-option value="Horizontal">Horizontal</ion-option>\n                                <ion-option value="Vertical">Vertical</ion-option>\n\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Intentions</ion-label>\n                            <ion-select>\n                                <ion-option value="Wants to make friends" selected>Wants to make friends</ion-option>\n                                <ion-option value="For enjoying free times">For enjoying free times</ion-option>\n                                <ion-option value="For hangouts">For hangouts</ion-option>\n                            </ion-select>\n                        </ion-item>\n\n\n                        <ion-item>\n                            <ion-label>Height</ion-label>\n                            <ion-select>\n                                <ion-option value="5”0" selected>5”0</ion-option>\n                                <ion-option value="5”3">5”3</ion-option>\n                                <ion-option value="5”7">5”7</ion-option>\n                                <ion-option value="5”12">5”12</ion-option>\n                                <ion-option value="5”12">6”0</ion-option>\n                            </ion-select>\n                        </ion-item>\n\n\n\n                        <div class="signUpIntrest">\n                            <ion-label>Interests\n                                <ion-icon name="md-add-circle" (click)="addMore(interests,\'interests\')"></ion-icon>\n                            </ion-label>\n                            <ion-badge *ngFor="let interest of interests" (click)="removeFromArr(interests,interest)">{{interest}}</ion-badge>\n                        </div>\n\n                        <ion-item>\n                            <ion-label>Drinking</ion-label>\n                            <ion-select>\n                                <ion-option value="Socially" selected>Socially</ion-option>\n                                <ion-option value="Occasionally">Occasionally</ion-option>\n                                <ion-option value="Regularly">Regularly</ion-option>\n                                <ion-option value="Party time">Party time</ion-option>\n                                <ion-option value="Relaxation">Relaxation</ion-option>\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Smoking</ion-label>\n                            <ion-select>\n                                <ion-option value="Socially" selected>Socially</ion-option>\n                                <ion-option value="Occasionally">Occasionally</ion-option>\n                                <ion-option value="Regularly">Regularly</ion-option>\n                                <ion-option value="Party time">Party time</ion-option>\n                                <ion-option value="Relaxation">Relaxation</ion-option>\n                            </ion-select>\n                        </ion-item>\n\n                        <button class="skipLast" color="main" ion-button (click)="login()">\n                            Skip\n                        </button>\n\n                        <button class="nextLast" color="main" ion-button (click)="login()">\n                            Next\n                        </button>\n                    </ion-list>\n                </form>\n            </ion-slide>\n        </ng-container>\n        <ng-container *ngIf="user?.type === \'business\'">\n            <ion-slide>\n                <form>\n                    <div class="profilePicUpload">\n                        <ion-icon name="ios-camera"></ion-icon>\n                        <p>Business\n                            <br> Photo</p>\n                    </div>\n\n                    <ion-list text-center>\n                        <ion-item>\n                            <ion-input class="userIcon" type="text" placeholder="Business Name"></ion-input>\n                        </ion-item>\n                        <ion-item>\n                            <ion-input class="birthdayIcon" type="text" placeholder="Founding Date"></ion-input>\n                        </ion-item>\n                        <button class="next" color="main" ion-button (click)="nextstep()">\n                            Next\n                        </button>\n                    </ion-list>\n                </form>\n            </ion-slide>\n\n            <ion-slide>\n                <div class="musicSelection">\n                    <p>For best experience, please select your music genre preference</p>\n                    <ion-searchbar placeholder="Search Music Genre"></ion-searchbar>\n\n                    <div class="musicList" style="background:url(assets/imgs/musicBG1.jpg)">\n                        <div class="musicListInner">\n                            <img src="../assets/imgs/musicIcon.png">\n                            <h6>HipHop</h6>\n                            <div class="seperator"></div>\n                        </div>\n                    </div>\n\n                    <div class="musicList" style="background:url(assets/imgs/musicBG2.jpg)">\n                        <div class="musicListInner">\n                            <img src="../assets/imgs/musicIcon.png">\n                            <h6>Trap</h6>\n                            <div class="seperator"></div>\n                        </div>\n                    </div>\n\n                    <div class="musicList" style="background:url(assets/imgs/musicBG3.jpg)">\n                        <div class="musicListInner">\n                            <img src="../assets/imgs/musicIcon.png">\n                            <h6>R &amp; B</h6>\n                            <div class="seperator"></div>\n                        </div>\n                    </div>\n\n                    <div class="musicList" style="background:url(assets/imgs/musicBG2.jpg)">\n                        <div class="musicListInner">\n                            <img src="../assets/imgs/musicIcon.png">\n                            <h6>electro</h6>\n                            <div class="seperator"></div>\n                        </div>\n                    </div>\n\n                    <button class="next" color="main" ion-button (click)="nextstep()">\n                        Next\n                    </button>\n                </div>\n            </ion-slide>\n\n\n            <ion-slide>\n                <form class="moreInfoabout">\n                    <p>Share some more info about your business\n                        <span>You may skip this step for now</span>\n                    </p>\n                    <ion-list text-center>\n                        <ion-item>\n                            <ion-label>Location</ion-label>\n                            <ion-select>\n                                <ion-option value="Indian">India</ion-option>\n                                <ion-option value="Italian" selected>Itali</ion-option>\n                                <ion-option value="German">German</ion-option>\n                                <ion-option value="Australian">Australia</ion-option>\n                                <ion-option value="Japanese">Japan</ion-option>\n\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Business Type</ion-label>\n                            <ion-select>\n                                <ion-option value="Operations Manager" selected>Club</ion-option>\n                                <ion-option value="Marketing">Bar</ion-option>\n                                <ion-option value="Freelancer">Restaurant</ion-option>\n                                <ion-option value="Human Resource">Strip Club</ion-option>\n                            </ion-select>\n                        </ion-item>\n\n                        <ion-item>\n                            <ion-label>Orientation</ion-label>\n                            <ion-select>\n                                <ion-option value="Straight" selected>Any</ion-option>\n                                <ion-option value="Horizontal">Straight</ion-option>\n                                <ion-option value="Vertical">Gay</ion-option>\n\n                            </ion-select>\n                        </ion-item>\n\n\n                        <div class="signUpIntrest">\n                            <ion-label>Intentions\n                                <ion-icon name="md-add-circle" (click)="addMore(intentions,\'intentions\')"></ion-icon>\n                            </ion-label>\n                            <ion-badge *ngFor="let intention of intentions" (click)="removeFromArr(intentions,intention)">{{intention}}</ion-badge>\n                        </div>\n\n\n                        <div class="signUpIntrest">\n                            <ion-label>Business Interests\n                                <ion-icon name="md-add-circle" (click)="addMore(businessInterests,\'businessinterests\')"></ion-icon>\n                            </ion-label>\n                            <ion-badge *ngFor="let interest of businessInterests" (click)="removeFromArr(businessInterests,interest)">{{interest}}</ion-badge>\n                        </div>\n\n                        <div class="signUpIntrest">\n                            <ion-label>Food and Drinks\n                                <ion-icon name="md-add-circle" (click)="addMore(foods,\'foods\')"></ion-icon>\n                            </ion-label>\n                            <ion-badge *ngFor="let food of foods" (click)="removeFromArr(foods,food)">{{food}}</ion-badge>\n                        </div>\n\n\n                        <button class="skipLast" color="main" ion-button (click)="login()">\n                            Skip\n                        </button>\n\n                        <button class="nextLast" color="main" ion-button (click)="login()">\n                            Next\n                        </button>\n                    </ion-list>\n                </form>\n            </ion-slide>\n        </ng-container>\n\n\n    </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/Users/osama/Documents/GitHub/SwiftVibe/src/pages/signupsteps/signupsteps.html"*/ }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], signupsteps);

//# sourceMappingURL=signupsteps.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.js.map