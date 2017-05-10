import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { QuotesPage } from '../pages/quotes/quotes';
import { MoneyPage } from '../pages/money/money';
import { LookupPage } from '../pages/lookup/lookup';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FlashCard } from '../components/flash-card/flash-card';
import { LookupService} from '../providers/lookup-service';
import { QuoteService} from '../providers/quote-service';
import { CurrencyService } from '../providers/currency-service';

@NgModule({
  declarations: [
    MyApp,
    QuotesPage,
    MoneyPage,
    LookupPage,
    TabsPage, 
    FlashCard
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  QuotesPage,
    MoneyPage,
    LookupPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LookupService,
    QuoteService,
    CurrencyService
  ]
})
export class AppModule {}
  