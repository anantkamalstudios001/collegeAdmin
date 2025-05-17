import { Route } from '@angular/router';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { AllUserComponent } from './all-user/all-user.component';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';

export const ADMIN_STUDENT_ROUTE: Route[] = [
  {
    path: 'all-user',
    component: AllUserComponent,
  },
  {
    path: 'add-new-user',
    component: AddNewUserComponent,
  },
  { path: '**', component: Page404Component },
];
