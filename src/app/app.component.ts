import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';

import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ReportPage } from "../pages/report/report";
import { HistoryPage } from "../pages/history/history";
import { ProfilePage } from "../pages/profile/profile";
import { SchedulePage } from "../pages/schedule/schedule";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) 
  {
    this.rootPage = LoginPage; 
  }

  ngOnInit(): void {
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  goHome(){
    this.nav.setRoot(HomePage);
  }

  goSchedule(){
    this.nav.setRoot(SchedulePage);
  }
  
  goReport(){
    this.nav.setRoot(ReportPage);  
  }

  goHistory(){
    this.nav.setRoot(HistoryPage);  
  }
 
  goProfile(){
    this.nav.setRoot(ProfilePage);
  }
<<<<<<< HEAD

  goLogin(){
    this.nav.setRoot(LoginPage);
  }

  goLogout(){
    this.nav.setRoot(LoginPage);
  }
=======
>>>>>>> dcf6ecf44083a2a1cb2b6907baa514c2aa82160e
}
