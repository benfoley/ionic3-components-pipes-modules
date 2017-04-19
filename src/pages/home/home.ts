import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class Home {

  text: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.text = "asdkahskjdash"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
  }

}
