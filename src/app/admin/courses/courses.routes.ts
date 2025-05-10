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
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { AllFacultyComponent } from './all-faculty/all-faculty.component';

export const COURSE_ROUTE: Route[] = [
  {
    path: 'add-faculty',
    component: AddFacultyComponent,
  },
  {
    path: 'all-faculty',
    component: AllFacultyComponent,
  },
  
  { path: '**', component: Page404Component },
];
