import { Route } from '@angular/router';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { AboutTeacherComponent } from './about-teacher/about-teacher.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { TeacherTimetableComponent } from './teacher-timetable/teacher-timetable.component';
import { AssignClassTeacherComponent } from './assign-class-teacher/assign-class-teacher.component';
import { EditBoardOfMembersComponent } from './edit-board-of-members/edit-board-of-members.component';
import { PresidentsDeskMessageEditorComponent } from './presidents-desk-message-editor/presidents-desk-message-editor.component';
import { PrincipalsDeskMessageEditorComponent } from './principals-desk-message-editor/principals-desk-message-editor.component';
import { LocalCommitteeManagementComponent } from './local-committee-management/local-committee-management.component';
import { CollegeCommitteesManagerComponent } from './college-committees-manager/college-committees-manager.component';
import { VisionMissionComponent } from './vision-mission/vision-mission.component';

export const ADMIN_TEACHER_ROUTE: Route[] = [
  {
    path: 'vision-mission',
    component: VisionMissionComponent,
  },
  { path: '**', component: Page404Component },
];
