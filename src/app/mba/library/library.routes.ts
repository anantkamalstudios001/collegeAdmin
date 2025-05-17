import { Route } from '@angular/router';
import { AllAssetsComponent } from './all-assets/all-assets.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { EditAssetComponent } from './edit-asset/edit-asset.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { BookStatusComponent } from './book-status/book-status.component';
import { AboutPlacementDepartmentEditorComponent } from './about-placement-department-editor/about-placement-department-editor.component';
import { PlacementActivitiesManagerComponent } from './placement-activities-manager/placement-activities-manager.component';
import { RecruitersListManagerComponent } from './recruiters-list-manager/recruiters-list-manager.component';
import { PlacementStatisticsComponent } from './placement-statistics/placement-statistics.component';
import { PlacementOficersMessageEditorComponent } from './placement-oficers-message-editor/placement-oficers-message-editor.component';
import { AddStudentComponent } from '../students/add-student/add-student.component';
import { AllStudentComponent } from './all-student/all-student.component';

export const LIBRARY_ROUTE: Route[] = [
  {
    path: 'add-student',
    component: AddStudentComponent,
  },
  {
    path: 'all-student',
    component: AllStudentComponent,
  },
  
  { path: '**', component: Page404Component },
];
