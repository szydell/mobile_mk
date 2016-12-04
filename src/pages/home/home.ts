import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SmsService } from '../../providers/sms-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SmsService]
})

export class HomePage {
  telNo: string;
  msg: string;

  constructor(public navCtrl: NavController, public smsService: SmsService) {
    
  }

sendSms(){
  if (typeof this.telNo!='undefined' && this.telNo && typeof this.msg!='undefined' && this.msg) {
    console.log('telNo:'+this.telNo+', message:'+this.msg)
    console.log(JSON.stringify(this.smsService.send(this.telNo,this.msg)))
  } else {
    console.log('not enough data to send sms')
  }
}


}
