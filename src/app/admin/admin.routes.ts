import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';

export const ADMIN_ROUTE: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTE),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./frount-office/frount-office.routes').then(
        (m) => m.FROUNT_OFFICE_ROUTE
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./teachers/admin-teachers.routes').then(
        (m) => m.ADMIN_TEACHER_ROUTE
      ),
  },
  {
    path: 'user-manage',
    loadChildren: () =>
      import('./students/admin-students.routes').then(
        (m) => m.ADMIN_STUDENT_ROUTE
      ),
  },
  {
    path: 'faculty',
    loadChildren: () =>
      import('./courses/courses.routes').then((m) => m.COURSE_ROUTE),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./library/library.routes').then((m) => m.LIBRARY_ROUTE),
  },
  {
    path: 'staff-users',
    loadChildren: () =>
      import('./departments/departments.routes').then(
        (m) => m.DEPARTMENT_ROUTE
      ),
  },
  {
    path: 'admission',
    loadChildren: () =>
      import('./staff/staff.routes').then((m) => m.STAFF_ROUTE),
  },
  {
    path: 'placements',
    loadChildren: () =>
      import('./holidays/holidays.routes').then((m) => m.HOLIDAY_ROUTE),
  },
  {
    path: 'e-resources',
    loadChildren: () => import('./fees/fees.routes').then((m) => m.FEES_ROUTE),
  },
  {
    path: 'campus-life',
    loadChildren: () =>
      import('./hostel/hostel.routes').then((m) => m.HOSTEL_ROUTE),
  },
  {
    path: 'downloads',
    loadChildren: () =>
      import('./class/class.routes').then((m) => m.CLASS_ROUTE),
  },
  {
    path: 'alumni',
    loadChildren: () =>
      import('./human-resources/human-resources.routes').then(
        (m) => m.HR_ROUTE
      ),
  },
  {
    path: 'notices',
    loadChildren: () => import('./notices/notices.routes').then((m) => m.NOTICES_ROUTES),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.routes').then(
        (m) => m.CONTACT_ROUTES
      ),
  },
  { path: '**', component: Page404Component },
];
