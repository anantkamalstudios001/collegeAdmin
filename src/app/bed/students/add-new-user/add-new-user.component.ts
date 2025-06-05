import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
import { APIMAINService } from 'app/bed/apimain.service';

@Component({
  selector: 'app-add-new-user',
  imports: [
    BreadcrumbComponent,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatDatepickerModule,
        FileUploadComponent,
        MatButtonModule,
        CommonModule
  ],
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.scss'
})
export class AddNewUserComponent {

  breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];
staffForm = this.fb.group({
    first: ['', Validators.required],
    last: [''],
    gender: ['', Validators.required],
    mobile: ['', Validators.required],
    password: ['', Validators.required],
    conformPassword: ['', Validators.required],
    designation: [''],
    department_name: ['', Validators.required],
    address: [''],
    email: ['', [Validators.required, Validators.email]],
    dob: ['', Validators.required],
    education: [''],
    uploadFile: [null],
    department : ['bed']
  });

  constructor(private fb: UntypedFormBuilder, private APIservice : APIMAINService) {}

onSubmit() {
  if (this.staffForm.valid) {
    const rawForm = this.staffForm.value;
    const formData = new FormData();

    // Convert date if needed
    const dob = rawForm.dob?._d ? rawForm.dob._d : rawForm.dob;

    // Append all fields except the file
    formData.append('first', rawForm.first);
    formData.append('last', rawForm.last);
    formData.append('gender', rawForm.gender);
    formData.append('mobile', rawForm.mobile);
    formData.append('password', rawForm.password);
    formData.append('conformPassword', rawForm.conformPassword);
    formData.append('designation', rawForm.designation);
    formData.append('department_name', rawForm.department_name);
    formData.append('address', rawForm.address);
    formData.append('email', rawForm.email);
    formData.append('dob', dob);
    formData.append('education', rawForm.education);

    // Append file
    if (rawForm.uploadFile) {
      formData.append('uploadFile', rawForm.uploadFile);
    }

    // Send as multipart/form-data
    this.APIservice.addStaffUser(formData).subscribe((res: any) => {
      console.log(res);
    });
  } else {
    console.log('Form Invalid');
  }
}



}
