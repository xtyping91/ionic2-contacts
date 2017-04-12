import { Component } from '@angular/core';
import { Platform, LoadingController, NavController } from 'ionic-angular';
import { Contacts, Contact } from '@ionic-native/contacts';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [Contacts]
})
export class ContactPage {
  isContacts: Boolean = false;
  contactlist: Contact[];

  constructor(public platform: Platform, private loadingCtrl: LoadingController, private sanitizer:DomSanitizer, public contacts: Contacts, public navCtrl: NavController) {
      
      platform.ready().then(()=>{
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
        if(!platform.is('mobileweb') && (platform.is('android') || platform.is('ios'))) {
          this.isContacts = true;
          this.init();
        }
      });
  }

  init() {
    let loadingPopup = this.loadingCtrl.create({
      content: 'Loading data...'
    });
    // Loading 화면
    loadingPopup.present();


    // 연락처 정보를 가져온다. find 속성은 Contact 정보값
    this.contacts.find([ '*' ]).then((pcontact: Contact[]) => {

      // 연락처 정보 
      this.contactlist = pcontact.sort(this.contactsSort);

      // Loading 닫기
      loadingPopup.dismiss()
    });
  }

  // photo image에 접근하기위해 필요하다 (content:// 프로토콜 접근)
  sanitize(url:string){    return this.sanitizer.bypassSecurityTrustUrl(url); }

  // 정렬한다.
  contactsSort(a: Contact, b: Contact) {
      return a.displayName < b.displayName ? -1 : (a.displayName == b.displayName ? 0 : 1);
  }

  // 검색 삭제시
  onClear(event){
    event.target.value = "";
  }

  // 입력시
  onInput(event) {
    let val = event.target.value;
    let option = { filter : '' };
    if (val && val.trim() != '') {
        option.filter = val;
    }

    // 연락처 정보를 검색한다.
    this.contacts.find([ 'displayName', 'phoneNumbers' ], option).then((pcontact: Contact[]) => {
      this.contactlist = pcontact.sort(this.contactsSort);
    });
  }
}
