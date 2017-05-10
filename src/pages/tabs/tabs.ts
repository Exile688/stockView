import { Component } from '@angular/core';

import { QuotesPage } from '../quotes/quotes';
import { MoneyPage } from '../money/money';
import { LookupPage } from '../lookup/lookup';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LookupPage;
tab2Root = QuotesPage;
  tab3Root = MoneyPage;

  constructor() {

  }
}
