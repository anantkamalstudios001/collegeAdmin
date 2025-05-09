import { Route } from '@angular/router';
import { AllDepartmentsComponent } from './all-departments/all-departments.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { Page404Component } from 'app/authentication/page404/page404.component';
import { IiqaUploadEditorComponent } from './iiqa-upload-editor/iiqa-upload-editor.component';
import { IqacMembersActivitiesManagerComponent } from './iqac-members-activities-manager/iqac-members-activities-manager.component';
import { BestPracticesEditorComponent } from './best-practices-editor/best-practices-editor.component';
import { FeedbackFormsComponent } from './feedback-forms/feedback-forms.component';
import { NaacSsrDocumentsManagerComponent } from './naac-ssr-documents-manager/naac-ssr-documents-manager.component';
import { NaacDocumentsUploadComponent } from './naac-documents-upload/naac-documents-upload.component';
import { AqarReportsSupportingDocumentsUploadComponent } from './aqar-reports-supporting-documents-upload/aqar-reports-supporting-documents-upload.component';

export const DEPARTMENT_ROUTE: Route[] = [
  {
    path: 'admission-guidelines',
    component:IiqaUploadEditorComponent,
  },
  {
    path: 'apply-now-form-setup',
    component:IqacMembersActivitiesManagerComponent,
  },
  {
    path: 'fee-structure',
    component:BestPracticesEditorComponent,
  },
  { path: '**', component: Page404Component },
];
