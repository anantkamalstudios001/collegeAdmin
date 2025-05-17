import { Route } from '@angular/router';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AboutStudentComponent } from './about-student/about-student.component';
import { StudentAttendanceComponent } from './student-attendance/student-attendance.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { MachanicalEngineeringComponent } from './machanical-engineering/machanical-engineering.component';
import { ComputerEngineeringComponent } from './computer-engineering/computer-engineering.component';
import { CivilEngineeringComponent } from './civil-engineering/civil-engineering.component';
import { ElectricalEngineeringComponent } from './electrical-engineering/electrical-engineering.component';
import { FirstYearEngineeringComponent } from './first-year-engineering/first-year-engineering.component';
import { MbaProgramComponent } from './mba-program/mba-program.component';
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
