import { AllCourseComponent } from './all-course/all-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { AboutCourseComponent } from './about-course/about-course.component';
import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { AdmissionSectionComponent } from './admission-section/admission-section.component';
import { ScholarshipSectionComponent } from './scholarship-section/scholarship-section.component';
import { FeeStructureComponent } from './fee-structure/fee-structure.component';
import { DownloadManagerComponent } from './download-manager/download-manager.component';
import { LibraryManagerComponent } from './library-manager/library-manager.component';
import { FacilitiesManagementComponent } from './facilities-management/facilities-management.component';
import { GrievanceRedressalComponent } from './grievance-redressal/grievance-redressal.component';
import { AcadamicCalenderComponent } from './acadamic-calender/acadamic-calender.component';

export const COURSE_ROUTE: Route[] = [
  {
    path: 'admission-section',
    component: AdmissionSectionComponent,
  },
  {
    path: 'scholarship-section',
    component: ScholarshipSectionComponent,
  },
  {
    path: 'fee-structure',
    component: FeeStructureComponent,
  },
  {
    path: 'download-manager',
    component: DownloadManagerComponent,
  },

  {
    path: 'library-manager',
    component: LibraryManagerComponent,
  },
  {
    path: 'facilities-management',
    component: FacilitiesManagementComponent,
  },
  {
    path: 'grievance-redressal',
    component: GrievanceRedressalComponent,
  },
  {
    path: 'acadamic-calender',
    component: AcadamicCalenderComponent,
  },
  { path: '**', component: Page404Component },
];
