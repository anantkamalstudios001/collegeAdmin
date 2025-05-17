import { Route } from '@angular/router';
import { MainLayoutComponent } from './layout/app-layout/main-layout/main-layout.component';
import { AuthGuard } from '@core/guard/auth.guard';
import { AuthLayoutComponent } from './layout/app-layout/auth-layout/auth-layout.component';
import { Page404Component } from './authentication/page404/page404.component';
import { Role } from '@core';

export const APP_ROUTE: Route[] = [
  { path: '', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
      { path: '', redirectTo: '/authentication/signin', pathMatch: 'full' },
      { path: 'admin', canActivate: [AuthGuard], data: { role: Role.Admin, }, loadChildren: () =>   import('./admin/admin.routes').then((m) => m.ADMIN_ROUTE),},
      // { path: 'teacher', canActivate: [AuthGuard], data: {role: Role.Teacher,}, loadChildren: () => import('./teacher/teacher.routes').then((m) => m.TEACHER_ROUTE), },
      // { path: 'student', canActivate: [AuthGuard], data: {role: Role.Student, }, loadChildren: () =>   import('./student/student.routes').then((m) => m.STUDENT_ROUTE), },

      { path: 'mba', canActivate: [AuthGuard], data: {role: Role.Mba, }, loadChildren: () =>   import('./mba/mba.routes').then((m) => m.MBA_ROUTE), },

      { path: 'bed', canActivate: [AuthGuard], data: {role: Role.Bed, }, loadChildren: () =>   import('./bed/bed.routes').then((m) => m.BED_ROUTE), },
      { path: 'engineering', canActivate: [AuthGuard], data: {role: Role.Engineering, }, loadChildren: () =>   import('./engineering/engineering.routes').then((m) => m.ENGINEERING_ROUTE), },
      { path: 'iti', canActivate: [AuthGuard], data: {role: Role.Iti, }, loadChildren: () =>   import('./iti/iti.routes').then((m) => m.ITI_ROUTE), },
      { path: 'pharmacy', canActivate: [AuthGuard], data: {role: Role.Pharmacy, }, loadChildren: () =>   import('./pharmacy/pharmacy.routes').then((m) => m.PHARMACY_ROUTE), },
      { path: 'polytechnic', canActivate: [AuthGuard], data: {role: Role.Polytechnic, }, loadChildren: () =>   import('./polytechnic/polytechnic.routes').then((m) => m.POLYTECHNIC_ROUTE), },
      { path: 'publicschool', canActivate: [AuthGuard], data: {role: Role.Publicschool, }, loadChildren: () =>   import('./publicschool/publicschool.routes').then((m) => m.PUBLICSCHOOL_ROUTE), },



      { path: 'calendar', loadChildren: () => import('./calendar/calendar.routes').then((m) => m.CALENDAR_ROUTE),},
      // {
      //   path: 'task',
      //   loadChildren: () =>
      //     import('./task/task.routes').then((m) => m.TASK_ROUTE),
      // },
      {
        path: 'contacts',
        loadChildren: () =>
          import('./contacts/contacts.routes').then((m) => m.CONTACT_ROUTE),
      },
      {
        path: 'email',
        loadChildren: () =>
          import('./email/email.routes').then((m) => m.EMAIL_ROUTE),
      },
      // {
      //   path: 'apps',
      //   loadChildren: () =>
      //     import('./apps/apps.routes').then((m) => m.APPS_ROUTE),
      // },
      // {
      //   path: 'widget',
      //   loadChildren: () =>
      //     import('./widget/widget.routes').then((m) => m.WIDGET_ROUTE),
      // },
      // {
      //   path: 'ui',
      //   loadChildren: () => import('./ui/ui.routes').then((m) => m.UI_ROUTE),
      // },
      {
        path: 'extra-pages',
        loadChildren: () =>
          import('./extra-pages/extra-pages.routes').then(
            (m) => m.EXTRA_PAGES_ROUTE
          ),
      },
      {
        path: 'maps',
        loadChildren: () =>
          import('./maps/maps.routes').then((m) => m.MAPS_ROUTE),
      },
      // {
      //   path: 'multilevel',
      //   loadChildren: () =>
      //     import('./multilevel/multilevel.routes').then(
      //       (m) => m.MULTILEVEL_ROUTE
      //     ),
      // },
    ],
  },
  {
    path: 'authentication',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./authentication/auth.routes').then((m) => m.AUTH_ROUTE),
  },
  { path: '**', component: Page404Component },
];
