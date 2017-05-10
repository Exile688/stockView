import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuoteService} from '../../providers/quote-service';
import { CurrencyService } from '../../providers/currency-service';
import { MoneyPage } from '../money/money';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html'
})
export class QuotesPage implements OnInit {
    mySymbol: any;
  quoteData: any;
  selectedCom: any;
  moneyType: any;
  currencyCalc: any;

  constructor(public navCtrl: NavController, public qSvc: QuoteService, public navParams: NavParams, public moneySvc: CurrencyService) {
    this.selectedCom=navParams.get("res");

  }

 getQuote(){
   return this.qSvc.getQuote(this.mySymbol).subscribe(res=>this.quoteData=res)
 }

 ngOnInit(){
   if(this.selectedCom){
     this.mySymbol=this.selectedCom.Symbol;
     this.getQuote(); 
   }
 }

onChange(money){
  if (!this.moneySvc.currentPrice){
    this.moneySvc.getMoney().subscribe(res=>this.moneySvc.currentPrice=res);
  }
  this.currencyCalc=this.moneySvc.currentPrice.quotes.USD+money
}

}
