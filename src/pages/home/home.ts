import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SelectFormPage} from '../select-form/select-form';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  goForm(hotel){
    this.navCtrl.push(SelectFormPage,hotel);
  }

}
