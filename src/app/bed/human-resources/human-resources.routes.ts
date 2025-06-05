import { Route } from '@angular/router';
import { Page404Component } from '../../authentication/page404/page404.component';
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
