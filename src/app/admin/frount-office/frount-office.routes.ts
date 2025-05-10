import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { AdmissionInquiryComponent } from './admission-inquiry/admission-inquiry.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { SliderManagementComponent } from '../front-office/slider-management/slider-management.component';
import { EventsHighlightEditorComponent } from '../front-office/events-highlight-editor/events-highlight-editor.component';
import { AdmissionStatusToggleComponent } from '../front-office/admission-status-toggle/admission-status-toggle.component';
import { AnnouncementManagementComponent } from '../front-office/announcement-management/announcement-management.component';
import { WelcomeMessageComponent } from '../front-office/welcome-message/welcome-message.component';

export const FROUNT_OFFICE_ROUTE: Route[] = [
  {
    path: 'banner-management',
    component: SliderManagementComponent,
  },
  {
    path: 'welcome-message',
    component: WelcomeMessageComponent,
  },
  {
    path: 'announcement-management',
    component: AnnouncementManagementComponent,
  },
  {
    path: 'admission-status-toggle',
    component: AdmissionStatusToggleComponent,
  },
  { path: '**', component: Page404Component },
];
