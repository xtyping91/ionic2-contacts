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

    // 권한 획득하기
    this.sim.requestReadPermission().then(
      () => {
        console.log('Permission granted');

        // 권한 획득후 핸드폰번호 획득
        return this.sim.getSimInfo();
      },
      () => {
        console.log('Permission denied');
      }
    ).then(
      (info) => { this.simInfo = info; console.log('Sim info: ', info); },
      (err) => console.log('Unable to get sim info: ', err)
    );


/*
    this.sim.getSimInfo().then(
      (info) => { this.simInfo = info; console.log('Sim info: ', info); },
      (err) => console.log('Unable to get sim info: ', err)
    );

    this.sim.hasReadPermission().then(
      (info) => console.log('Has permission: ', info)
    );

*/
  }
}
