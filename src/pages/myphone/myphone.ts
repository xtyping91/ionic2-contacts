import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Sim } from '@ionic-native/sim';

@Component({
  selector: 'page-myphone',
  templateUrl: 'myphone.html',
  providers: [Sim]
})
export class MyPhone {
  simInfo: any;
  constructor(private sim: Sim, public navCtrl: NavController) {
    this.sim.getSimInfo().then(
      (info) => { this.simInfo = info; console.log('Sim info: ', info); },
      (err) => console.log('Unable to get sim info: ', err)
    );

    this.sim.hasReadPermission().then(
      (info) => console.log('Has permission: ', info)
    );

    this.sim.requestReadPermission().then(
      () => console.log('Permission granted'),
      () => console.log('Permission denied')
    );
  }
}
