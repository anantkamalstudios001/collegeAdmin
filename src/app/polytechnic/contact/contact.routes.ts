import { Route } from '@angular/router';
import { Page404Component } from '../../authentication/page404/page404.component';
import { CollegeContactInfoComponent } from './college-contact-info/college-contact-info.component';
import { FeedbackInfoComponent } from './feedback-info/feedback-info.component';

export const CONTACT_ROUTES: Route[] = [
  {
    path: 'college-contact-info',
    component: CollegeContactInfoComponent,
  },
  {
    path: 'feedback-info',
    component: FeedbackInfoComponent,
  },
  { path: '**', component: Page404Component },
];
