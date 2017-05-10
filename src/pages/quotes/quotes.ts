import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { QuoteService } from '../../providers/quote-service';
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
  exchangeRates: any;
  selectedStockPrice: any;


  constructor(public navCtrl: NavController, public qSvc: QuoteService, public navParams: NavParams, public moneySvc: CurrencyService) {
    this.selectedCom = navParams.get("res");

  }

  getQuote() {
    return this.qSvc.getQuote(this.mySymbol).subscribe(res => {
      this.quoteData = res;
      this.selectedStockPrice=this.quoteData.LastPrice;
      
    })
  }

  ngOnInit() {
    if (this.selectedCom) {
      this.mySymbol = this.selectedCom.Symbol;
      this.getQuote();
     

    }
    this.moneyType=this.moneySvc.selectedCurrency;
    this.moneySvc.getMoney().subscribe(res => this.exchangeRates = res);
  }

  onChange(money) {
    if (!this.moneySvc.currentPrice) {
      // this.moneySvc.getMoney().subscribe(res => this.moneySvc.currentPrice = res);
    }
   this.updateStockPrice(); 
    console.log(money);
  }

  updateStockPrice(){
    let exchangeRate=this.exchangeRates.quotes["USD"+this.moneyType];
    this.selectedStockPrice=this.quoteData.LastPrice * exchangeRate;
  }
}
