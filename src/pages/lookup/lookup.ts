import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, NavParams } from 'ionic-angular';
import { LookupService } from '../../providers/lookup-service';
import { QuoteService } from '../../providers/quote-service'; 
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-lookup',
  templateUrl: 'Lookup.html'
})
export class LookupPage {
  myInput: any;
  searchData: any;
  

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public lookup: LookupService, public qSvc: QuoteService) {

  }

 getSearch(){
   return this.lookup.companyLookup(this.myInput).subscribe(res=>this.searchData=res)
 }

 comPush(com){
   this.qSvc.getQuote(com.Symbol).subscribe(res=>{
     this.navCtrl.push(QuotesPage,{res:res})
   })
 }

 test(){
   console.log(this.searchData);
   console.log(this.myInput);
 }
 
}
