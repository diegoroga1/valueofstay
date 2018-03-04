import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import {Observable} from "rxjs/Observable";

/**
 * Generated class for the CustomFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custom-form',
  templateUrl: 'custom-form.html',
})
export class CustomFormPage {
  titulo="";
  hotel="";
  formulario="";
  todo = {}
  tasks: Observable<any[]>;
  data:[];
  formBooking=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public af:AngularFireDatabase) {
    this.getData();
  }
  getData(){
    if(this.navParams.data=='booking') {
      this.titulo = "Booking"
     this.data= this.af.object('/booking_asks/clasificacion/en/modo_viaje');
      console.log(this.data)

    }else if(this.navParams.data=='tripadvisor'){
      this.titulo="TripAdvisor";
    }else if(this.navParams.data=='holiday'){
      this.titulo="Holiday Check";
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomFormPage');
  }
  submitForm(){

  }

}
