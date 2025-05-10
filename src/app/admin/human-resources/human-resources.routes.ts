import { Route } from '@angular/router';
import { Page404Component } from '../../authentication/page404/page404.component';
import { LeaveRequestsComponent } from './leave-requests/leave-requests.component';
import { LeaveBalanceComponent } from './leave-balance/leave-balance.component';
import { LeaveTypesComponent } from './leave-types/leave-types.component';
import { AllHolidayComponent } from './all-holidays/all-holidays.component';
import { TodaysAttendanceComponent } from './todays-attendance/todays-attendance.component';
import { AttendanceSheetComponent } from './attendance-sheet/attendance-sheet.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { PayslipComponent } from './payslip/payslip.component';
import { AttendanceDetailComponent } from './attendance-detail/attendance-detail.component';
import { FooterNavigationComponent } from './footer-navigation/footer-navigation.component';
import { CollegeAddressEditorComponent } from './college-address-editor/college-address-editor.component';
import { HelplineNumbersEditorComponent } from './helpline-numbers-editor/helpline-numbers-editor.component';
import { PrivacyDesclaimerEditorComponent } from './privacy-desclaimer-editor/privacy-desclaimer-editor.component';
import { RegisterAlumniComponent } from './register-alumni/register-alumni.component';
import { AlumniStoriesComponent } from './alumni-stories/alumni-stories.component';
import { AlumniMeetsComponent } from './alumni-meets/alumni-meets.component';
export const HR_ROUTE: Route[] = [
  {
    path: 'register-alumni',
    component: RegisterAlumniComponent,
  },
  {
    path: 'alumni-stories',
    component: AlumniStoriesComponent,
  },
  {
    path: 'alumni-meets',
    component: AlumniMeetsComponent,
  },
  { path: '**', component: Page404Component },
];
