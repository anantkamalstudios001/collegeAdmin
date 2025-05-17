import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { HostelRoomListComponent } from './hostel-room-list/hostel-room-list.component';
import { HostelRoomTypeComponent } from './hostel-room-type/hostel-room-type.component';
import { ContactFormSubmissionViewerComponent } from './contact-form-submission-viewer/contact-form-submission-viewer.component';
import { CampusMapEmbedEditorComponent } from './campus-map-embed-editor/campus-map-embed-editor.component';
import { ClubsAndCommitteesComponent } from './clubs-and-committees/clubs-and-committees.component';
import { EventsComponent } from './events/events.component';
import { FacilitiesComponent } from './facilities/facilities.component';


export const HOSTEL_ROUTE: Route[] = [
  {
    path: 'clubs-and-committees',
    component: ClubsAndCommitteesComponent,
  },
  {
    path: 'events',
    component: EventsComponent,
  },
  {
    path: 'facilities',
    component: FacilitiesComponent,
  },
  
  { path: '**', component: Page404Component },
];
