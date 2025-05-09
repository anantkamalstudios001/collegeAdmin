import { Route } from '@angular/router';
import { AllHolidaysComponent } from './all-holidays/all-holidays.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { EditHolidayComponent } from './edit-holiday/edit-holiday.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { PhotoAlbumsComponent } from './photo-albums/photo-albums.component';
import { VideoManagerComponent } from './video-manager/video-manager.component';

export const HOLIDAY_ROUTE: Route[] = [
  {
    path: 'photo-albums',
    component: PhotoAlbumsComponent,
  },
  {
    path: 'video-manager',
    component: VideoManagerComponent,
  },
  { path: '**', component: Page404Component },
];
