
import { Route } from '@angular/router';
import { Page404Component } from '../../authentication/page404/page404.component';
import { ContactInformationEditorComponent } from '../hostel/contact-information-editor/contact-information-editor.component';
import { ContactFormSubmissionViewerComponent } from './contact-form-submission-viewer/contact-form-submission-viewer.component';
import { CampusMapEmbedEditorComponent } from './campus-map-embed-editor/campus-map-embed-editor.component';
import { AddNoticeComponent } from './add-notice/add-notice.component';
import { ViewNoticesComponent } from './view-notices/view-notices.component';
import { ExpiredNoticesComponent } from './expired-notices/expired-notices.component';

export const NOTICES_ROUTES: Route[] = [
  {
    path: 'add-notice',
    component: AddNoticeComponent,
  },
  {
    path: 'view-notices',
    component: ViewNoticesComponent,
  },
  {
    path: 'expired-notices',
    component: ExpiredNoticesComponent,
  },
  { path: '**', component: Page404Component },
];
