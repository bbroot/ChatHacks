import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddRoomPage } from '../pages/add-room/add-room';
import { SigninPage } from '../pages/signin/signin';
import { RoomPage } from '../pages/room/room';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { config } from '../environment';
import { RelativeTime } from '../pipes/relative-time';
import { LocationServicesProvider } from '../providers/location-services/location-services';
import { Geolocation } from '@ionic-native/geolocation';
import { AccountInfoPage } from '../pages/account-info/account-info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    RoomPage,
    AddRoomPage,
    TabsPage,
    RelativeTime,
    AccountInfoPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    RoomPage,
    TabsPage,
    AddRoomPage,
    AccountInfoPage
  ],
  providers: [
    StatusBar,
    GooglePlus,
    SplashScreen,
    Geolocation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthServiceProvider,
    LocationServicesProvider
  ]
})
export class AppModule { }
