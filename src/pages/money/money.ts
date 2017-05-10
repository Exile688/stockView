import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CurrencyService } from '../../providers/currency-service';

@Component({
  selector: 'page-money',
  templateUrl: 'money.html'
})
export class MoneyPage {
 currentMoney:any;

  constructor(public navCtrl: NavController, public moneySvc: CurrencyService) {

  }

updateMoney(){
  if (!this.moneySvc.currentPrice)
  this.moneySvc.getMoney().subscribe(res=>this.moneySvc.currentPrice=res);
  if (this.moneySvc.currentPrice)
  this.currentMoney=this.moneySvc.currentPrice;
}

}
