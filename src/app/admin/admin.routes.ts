import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';

export const ADMIN_ROUTE: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.routes').then((m) => m.DASHBOARD_ROUTE),
  },
  {
    path: 'home-page-management',
    loadChildren: () =>
      import('./frount-office/frount-office.routes').then(
        (m) => m.FROUNT_OFFICE_ROUTE
      ),
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./teachers/admin-teachers.routes').then(
        (m) => m.ADMIN_TEACHER_ROUTE
      ),
  },
  {
    path: 'departments-management',
    loadChildren: () =>
      import('./students/admin-students.routes').then(
        (m) => m.ADMIN_STUDENT_ROUTE
      ),
  },
  {
    path: 'student-section',
    loadChildren: () =>
      import('./courses/courses.routes').then((m) => m.COURSE_ROUTE),
  },
  {
    path: 'placement-cell',
    loadChildren: () =>
      import('./library/library.routes').then((m) => m.LIBRARY_ROUTE),
  },
  {
    path: 'naac-accreditation',
    loadChildren: () =>
      import('./departments/departments.routes').then(
        (m) => m.DEPARTMENT_ROUTE
      ),
  },
  {
    path: 'rti-section',
    loadChildren: () =>
      import('./staff/staff.routes').then((m) => m.STAFF_ROUTE),
  },
  {
    path: 'gallery-management',
    loadChildren: () =>
      import('./holidays/holidays.routes').then((m) => m.HOLIDAY_ROUTE),
  },
  {
    path: 'news-updates',
    loadChildren: () => import('./fees/fees.routes').then((m) => m.FEES_ROUTE),
  },
  {
    path: 'contact-page',
    loadChildren: () =>
      import('./hostel/hostel.routes').then((m) => m.HOSTEL_ROUTE),
  },
  {
    path: 'footer-links-editor',
    loadChildren: () =>
      import('./class/class.routes').then((m) => m.CLASS_ROUTE),
  },
  {
    path: 'footer-link-editor',
    loadChildren: () =>
      import('./human-resources/human-resources.routes').then(
        (m) => m.HR_ROUTE
      ),
  },
  { path: '**', component: Page404Component },
];
