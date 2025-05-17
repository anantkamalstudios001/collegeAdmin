
import { Route } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { QuickStatsComponent } from './quick-stats/quick-stats.component';
import { RecentUpdatesComponent } from './recent-updates/recent-updates.component';
import { MajorSectionsComponent } from './major-sections/major-sections.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
export const DASHBOARD_ROUTE: Route[] = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path : 'demo-page',
    component : DemoPageComponent
  },
  {
    path: 'quick-stats',
    component: QuickStatsComponent,
  },
  {
    path: 'recent-updates',
    component: RecentUpdatesComponent,
  },
  {
    path: 'major-sections',
    component: MajorSectionsComponent,
  },
  

  
  // {
  //   path: 'main',
  //   component: MainComponent,
  // },
  // {
  //   path: 'dashboard2',
  //   component: Dashboard2Component,
  // },
  // {
  //   path: 'teacher-dashboard',
  //   component: DashboardComponent,
  // },
  // {
  //   path: 'student-dashboard',
  //   component: StudentDashboard,
  // },
  { path: '**', component: Page404Component },
];
