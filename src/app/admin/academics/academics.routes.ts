import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CategoryComponent } from './category/category.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CalendarComponent } from 'app/calendar/calendar.component';


export const ACADEMICS_ROUTE: Route[] = [
  {
    path: 'add-courses',
    component: AddCoursesComponent,
  },
  {
    path: 'all-courses',
    component: AllCoursesComponent,
  },
  {
    path: 'category',
    component: CategoryComponent,
  },
  {
    path: 'departments',
    component: DepartmentsComponent,
  },
  {
    path: 'academic-calendar',
    component: CalendarComponent,
  },
  { path: '**', component: Page404Component },
];
