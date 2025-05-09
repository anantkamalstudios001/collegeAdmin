import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { HostelRoomListComponent } from './hostel-room-list/hostel-room-list.component';
import { HostelRoomTypeComponent } from './hostel-room-type/hostel-room-type.component';
import { ContactFormSubmissionViewerComponent } from './contact-form-submission-viewer/contact-form-submission-viewer.component';
import { CampusMapEmbedEditorComponent } from './campus-map-embed-editor/campus-map-embed-editor.component';

export const HOSTEL_ROUTE: Route[] = [
  {
    path: 'contact-information-editor',
    component: HostelRoomListComponent,
  },
  {
    path: 'contact-form-submission-viewer',
    component:ContactFormSubmissionViewerComponent,
  },
  {
    path: 'campus-map-embed-editor',
    component:CampusMapEmbedEditorComponent,
  },
  
  { path: '**', component: Page404Component },
];
