import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
      platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      /*
      if(platform.is('android')) console.log("android");
      if(platform.is('cordova')) console.log("cordova");
      if(platform.is('core')) console.log("core");
      if(platform.is('ios')) console.log("ios");
      if(platform.is('ipad')) console.log("ipad");
      if(platform.is('iphone')) console.log("iphone");
      if(platform.is('mobile')) console.log("mobile");
      if(platform.is('mobileweb')) console.log("mobileweb");
      if(platform.is('phablet')) console.log("phablet");
      if(platform.is('tablet')) console.log("tablet");
      if(platform.is('windows')) console.log("windows");
      */
    });
  }
}
