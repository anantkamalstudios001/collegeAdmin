import { Route } from '@angular/router';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { EditBoardOfMembersComponent } from './edit-board-of-members/edit-board-of-members.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';
import { PrincipalMessageComponent } from './principal-message/principal-message.component';
import { CollegeHistoryComponent } from './college-history/college-history.component';
import { GoverningBodyComponent } from './governing-body/governing-body.component';

export const ADMIN_TEACHER_ROUTE: Route[] = [
  {
    path: 'vision-mission',
    component: VisionMissionComponent,
  },
  {
    path: 'principals-message',
    component: PrincipalMessageComponent,
  },
  {
    path: 'college-history',
    component: CollegeHistoryComponent,
  },
  {
    path: 'governing-body',
    component: GoverningBodyComponent,
  },
  { path: '**', component: Page404Component },
];
