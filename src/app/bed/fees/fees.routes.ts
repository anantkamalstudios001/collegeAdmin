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
import { LibraryAccessComponent } from './library-access/library-access.component';
import { OnlineJournalsComponent } from './online-journals/online-journals.component';
import { StudyMaterialUploadComponent } from './study-material-upload/study-material-upload.component';

export const FEES_ROUTE: Route[] = [
  {
    path: 'library-access',
    component: LibraryAccessComponent,
  },
  {
    path: 'online-journals',
    component: OnlineJournalsComponent,
  },
  {
    path: 'study-material-upload',
    component: StudyMaterialUploadComponent,
  },
  { path: '**', component: Page404Component },
];
