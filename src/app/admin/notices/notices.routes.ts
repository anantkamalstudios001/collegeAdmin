
import { Route } from '@angular/router';
import { Page404Component } from '../../authentication/page404/page404.component';
import { ContactInformationEditorComponent } from '../hostel/contact-information-editor/contact-information-editor.component';
import { ContactFormSubmissionViewerComponent } from './contact-form-submission-viewer/contact-form-submission-viewer.component';
import { CampusMapEmbedEditorComponent } from './campus-map-embed-editor/campus-map-embed-editor.component';

export const NOTICES_ROUTES: Route[] = [
  {
    path: 'contact-information-editor',
    component: ContactInformationEditorComponent,
  },
  {
    path: 'contact-form-submission-viewer',
    component: ContactFormSubmissionViewerComponent,
  },
  {
    path: 'campus-map-embed-editor',
    component: CampusMapEmbedEditorComponent,
  },
  { path: '**', component: Page404Component },
];
