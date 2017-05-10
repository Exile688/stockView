import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuoteService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class QuoteService {

  BaseQuoteUrl="http://dev.markitondemand.com/Api/v2/Quote";
  QuoteReturn: any;

  constructor(public http: Http) {
    console.log('Hello QuoteService Provider');
  }

getQuote(symbol){
  return this.http.get(`${this.BaseQuoteUrl}${"/json?symbol="}${symbol}`)
  .map(res=> res.json());

}

}

// /** 
//  * Version 1.0, Jan 2012
//  */

// var Markit = {};
// /**
// * Define the QuoteService.
// * First argument is symbol (string) for the quote. Examples: AAPL, MSFT, JNJ, GOOG.
// * Second argument is fCallback, a callback function executed onSuccess of API.
// */
// Markit.QuoteService = function(sSymbol, fCallback) {
//     this.symbol = sSymbol;
//     this.fCallback = fCallback;
//     this.DATA_SRC = "http://dev.markitondemand.com/Api/v2/Quote/jsonp";
//     this.makeRequest();
// };
// /**
// * Ajax success callback. fCallback is the 2nd argument in the QuoteService constructor.
// */
// Markit.QuoteService.prototype.handleSuccess = function(jsonResult) {
//     this.fCallback(jsonResult);
// };
// /**
// * Ajax error callback
// */
// Markit.QuoteService.prototype.handleError = function(jsonResult) {
//     console.error(jsonResult);
// };
// /** 
// * Starts a new ajax request to the Quote API
// */
// Markit.QuoteService.prototype.makeRequest = function() {
//     //Abort any open requests
//     if (this.xhr) { this.xhr.abort(); }
//     //Start a new request
//     this.xhr = $.ajax({
//         data: { symbol: this.symbol },
//         url: this.DATA_SRC,
//         dataType: "jsonp",
//         success: this.handleSuccess,
//         error: this.handleError,
//         context: this
//     });
// };

// new Markit.QuoteService("AAPL", function(jsonResult) {

//     //Catch errors
//     if (!jsonResult || jsonResult.Message){
//         console.error("Error: ", jsonResult.Message);
//         return;
//     }

//     //If all goes well, your quote will be here.
//     console.log(jsonResult);

//     //Now proceed to do something with the data.
//     $("h1").first().text(jsonResult.Name);

//     /**
//     * Need help? Visit the API documentation at:
//     * http://dev.markitondemand.com
//     */
// });