import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { Contacts, Contact } from '@ionic-native/contacts';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers: [Contacts]
})
export class ContactPage {
  contactlist: Contact[];

  constructor(private loadingCtrl: LoadingController, private sanitizer:DomSanitizer, public contacts: Contacts, public navCtrl: NavController) {
    this.init();
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
}
