import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { SMS } from 'ionic-native';

/*
  Generated class for the SmsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SmsService {

    constructor() {
         
    }
  
send(telNo: string, message: string) {
       return SMS.send(telNo, message);
    }
}





