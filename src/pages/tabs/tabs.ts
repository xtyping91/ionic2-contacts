import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { MyPhone } from '../myphone/myphone';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyPhone;
  tab3Root = ContactPage;

  constructor() {

  }
}
