import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Importing firebase core library.
import * as firebase from 'firebase/app';

//Initializing the required variable for firebase configuration.
let config = {
  apiKey: "AIzaSyBBrWioeCukZ1zXSwKR-Gctia4dJGw_11c",
  authDomain: "weather-1ac0a.firebaseapp.com",
  databaseURL: "https://weather-1ac0a.firebaseio.com",
  projectId: "weather-1ac0a",
  storageBucket: "weather-1ac0a.appspot.com",
  messagingSenderId: "468514350373",
  appId: "1:468514350373:web:a260ea2d1e547ed736e6cc",
  measurementId: "G-M14D4QKEHQ"
};
//Integrating firebase SDK with our/in our angular application.
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientJsonpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
