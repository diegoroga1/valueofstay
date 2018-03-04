import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import {SelectFormPage} from '../pages/select-form/select-form';
import {CustomFormPage} from '../pages/custom-form/custom-form';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth-service/auth-service';


import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebase={
  apiKey: "AIzaSyDbKcpLeKHXeO8hXkcmg67sKRawOClv4XI",
  authDomain: "valueofstay-fa44f.firebaseapp.com",
  databaseURL: "https://valueofstay-fa44f.firebaseio.com",
  projectId: "valueofstay-fa44f",
  storageBucket: "valueofstay-fa44f.appspot.com",
  messagingSenderId: "217921251961"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SelectFormPage,
    CustomFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SelectFormPage,
    CustomFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
