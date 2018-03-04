import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CustomFormPage} from "../custom-form/custom-form";

/**
 * Generated class for the SelectFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-form',
  templateUrl: 'select-form.html',
})
export class SelectFormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectFormPage');
  }


  createForm(type){
      this.navCtrl.push(CustomFormPage,type)

  }

}
