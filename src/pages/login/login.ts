import {Component, Inject} from '@angular/core';
import { IonicPage,AlertController, NavController, ToastController,NavParams,Events,LoadingController  } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {FirebaseApp} from "angularfire2";
import {HomePage} from "../home/home";
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: any;
  password: any;
  userKey: any;
  userProfile: any;
  userEmail: any;
  formLogin: FormGroup;
  rolSelect: any;
  storageRef: any;
  logotipo: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public afAuth: AngularFireAuth,
              public af: AngularFireDatabase,
              public events: Events,
              public formBuilder: FormBuilder,
              public loadingCtrl: LoadingController,
              public alert: AlertController,
              public toast: ToastController) {
    this.formLogin = this.createForm();

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');

  }
  private createForm(){
    return this.formBuilder.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
  ionViewDidEnter() {

  }

  submitLogin(form) {
    this.email = this.formLogin.value.email;
    this.password = this.formLogin.value.password;
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then((success) => {
      console.log(success);
      localStorage.setItem("user_uid", success.uid);
      sessionStorage.setItem("user_uid", success.uid);
      this.events.publish('useractual:changed', success.uid);
      this.events.publish('rol:changed', success.uid);
      this.userKey = success.uid;
      this.userEmail = success.email;
      let toast = this.toast.create({
        message: 'Sesión iniciada. Bienvenido a FYT.',
        duration: 3000,
        position: 'bottom'
      });


      toast.present();
      this.navCtrl.setRoot(HomePage);
    }).catch(
      (error) => {
        switch (error.message) {
          case "There is no user record corresponding to this identifier. The user may have been deleted.":
            // Cambiar por toast
            break;
          case "The password is invalid or the user does not have a password.":
            // Cambiar por toast
            break;
        }
      }
    );
  }
}
