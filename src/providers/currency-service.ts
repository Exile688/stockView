import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Currency provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CurrencyService {

  BaseCurrencyUrl="http://apilayer.net/api/live?access_key=b2054ee85e5ffa1db11e4d5feb023b53";
  currentPrice: any;

  constructor(public http: Http) {
    console.log('Hello Currency Provider');
  }

getMoney(){
 return this.http.get(this.BaseCurrencyUrl)
  .map(res=>res.json())
}

getPrice(){
  this.getMoney().subscribe(res=>this.currentPrice=res)
}

}
