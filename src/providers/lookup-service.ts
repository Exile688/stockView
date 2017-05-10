import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LookupService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class LookupService {

BaseLookupURL = "http://dev.markitondemand.com/Api/v2/Lookup";

  constructor(public http: Http) {
    console.log('Hello LookupService Provider');
  }

  companyLookup(name){
    return this.http.get(`${this.BaseLookupURL}${"/json?input="}${name}`)
      .map(res=>{
       let jsonRes= res.json();
       return jsonRes;
      });
  }

}
