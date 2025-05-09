import { Route } from '@angular/router';
import { AllFeesComponent } from './all-fees/all-fees.component';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { EditFeesComponent } from './edit-fees/edit-fees.component';
import { FeeReceiptComponent } from './fee-receipt/fee-receipt.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { FeesTypeComponent } from './fees-type/fees-type.component';
import { FeesDiscountComponent } from './fees-discount/fees-discount.component';
import { NewsArticlesComponent } from './news-articles/news-articles.component';
import { CategorizeAdmissionResultsEventsComponent } from './categorize-admission-results-events/categorize-admission-results-events.component';

export const FEES_ROUTE: Route[] = [
  {
    path: 'news-articles',
    component: NewsArticlesComponent,
  },
  {
    path: 'categorize-admission-results-events',
    component: CategorizeAdmissionResultsEventsComponent,
  },
  { path: '**', component: Page404Component },
];
