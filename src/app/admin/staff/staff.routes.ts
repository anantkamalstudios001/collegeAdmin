import { Route } from '@angular/router';
import { AllstaffComponent } from './all-staff/all-staff.component';
import { AddStaffComponent } from './add-staff/add-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AboutStaffComponent } from './about-staff/about-staff.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { StaffAttendanceComponent } from './staff-attendance/staff-attendance.component';
import { RtiDeclarationEditorComponent } from './rti-declaration-editor/rti-declaration-editor.component';
import { RtiCommitteeMemberManagerComponent } from './rti-committee-member-manager/rti-committee-member-manager.component';
export const STAFF_ROUTE: Route[] = [
  {
    path: 'rti-declaration-editor',
    component: RtiDeclarationEditorComponent,
  },
  {
    path: 'rti-committee-member-manager',
    component: RtiCommitteeMemberManagerComponent,
  },
  { path: '**', component: Page404Component },
];
