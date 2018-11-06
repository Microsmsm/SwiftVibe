import {Component, ViewChild} from '@angular/core';
import { NavController, NavParams, Slides, AlertController } from 'ionic-angular';
import {LoginPage} from '../login/login';
import {User} from '../../models/user-model';
import {DataService} from '../../providers/data-service';

@Component({selector: 'signupsteps', templateUrl: 'signupsteps.html'})
export class signupsteps {

  @ViewChild(Slides)slides : Slides;
  user : User; //initial business
  interests : String[] = ['Clubbing', 'Dancing', 'Hiking']
  intentions: String[] = ['Stablish business','Arranging hangouts']
  businessInterests: String[] = ['Clubbing','Dancing','Hiking']
  foods: String[] = ['Alcohol','Soft Drink']

  constructor(public navCtrl : NavController, public navParams : NavParams, public userData : DataService,public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad signupsteps');
    console.log(this.user);
  }

  addMore(arr:String[],name:String){
    let title = this.capitalize(name);
    let msg =`Enter a new value for the ${name}`;
    this.showAddMorePrompt(title,msg).then(item=>{
      arr.push(item)
    })
    .catch(err=>{
      console.log(err);
    })
  }
  removeFromArr(arr:String[],item:String){
    arr.splice(arr.indexOf(item),1)
  }
  capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }

  showAddMorePrompt(title,message):Promise<String>{
    return new Promise((res,rej)=>{
      let prompt = this.alertCtrl.create({
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
            handler: data => {
              console.log('Cancel clicked');
              rej('canceled');
            }
          },
          {
            text: 'Save',
            handler: data => {
              console.log('saved',data,data[0]);
              res(data[title.toLowerCase()])
            }
          }
        ]
      });
      prompt.present();
    });
    
  }

  openBusinessSignup() {
    this.user = this.userData.users[0] //config to be business user
    this.nextstep();
  }

  nextstep() {
    this
      .slides
      .slideNext();
  }

  login() {
    this
      .navCtrl
      .setRoot(LoginPage);
  }

}
