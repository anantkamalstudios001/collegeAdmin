import { Route } from '@angular/router';
import { AllHolidaysComponent } from './all-holidays/all-holidays.component';
import { AddHolidayComponent } from './add-holiday/add-holiday.component';
import { EditHolidayComponent } from './edit-holiday/edit-holiday.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { PhotoAlbumsComponent } from './photo-albums/photo-albums.component';
import { VideoManagerComponent } from './video-manager/video-manager.component';
import { RecruitersListComponent } from './recruiters-list/recruiters-list.component';
import { StudentPlacementsRecordComponent } from './student-placements-record/student-placements-record.component';
import { PlacementDrivesComponent } from './placement-drives/placement-drives.component';

export const HOLIDAY_ROUTE: Route[] = [
  {
    path: 'recruiters-list',
    component: RecruitersListComponent,
  },
  {
    path: 'student-placements-record',
    component: StudentPlacementsRecordComponent,
  },
  {
    path: 'placement-drives',
    component: PlacementDrivesComponent,
  },
  { path: '**', component: Page404Component },
];
