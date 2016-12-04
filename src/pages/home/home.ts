import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SmsService } from '../../providers/sms-service';
import { PeopleList } from '../../providers/people-list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [SmsService,PeopleList]
})

export class HomePage {
  telNo: string;
  public msg: string;
  public people: any;


  constructor(public navCtrl: NavController, public smsService: SmsService, public peopleList: PeopleList) {
     this.loadPeople();
  }

sendSms(){
  if (typeof this.telNo!='undefined' && this.telNo && typeof this.msg!='undefined' && this.msg) {
    console.log('telNo:'+this.telNo+', message:'+this.msg)
    console.log(JSON.stringify(this.smsService.send(this.telNo,this.msg)))
  } else {
    console.log('not enough data to send sms')
  }
}

  loadPeople() {
    this.peopleList.load()
      .then(data1 => { 
        this.people = data1;
      });
  }    
  itemSelected(phone,first,last) {

    this.telNo = phone
    this.msg = "Dear "+first.charAt(0).toUpperCase()+first.slice(1)+" "+last.charAt(0).toUpperCase()+last.slice(1)+". Don't you think it's time to buy new <blablabla>?"

  }


}
