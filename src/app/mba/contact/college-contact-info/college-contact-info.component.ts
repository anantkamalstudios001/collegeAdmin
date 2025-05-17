import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-college-contact-info',
  imports: [
    ReactiveFormsModule,
    CommonModule,
        BreadcrumbComponent,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatSelectModule,
            MatOptionModule,
            MatDatepickerModule,
            MatButtonModule,
  ],
  templateUrl: './college-contact-info.component.html',
  styleUrl: './college-contact-info.component.scss'
})
export class CollegeContactInfoComponent {

    collegeContactForm!: FormGroup;
      breadscrums = [
    {
      title: 'College Contact Info',
      items: ['Contact'],
      active: 'College Contact Info',
    },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.collegeContactForm = this.fb.group({
      collegeName: ['', Validators.required],
      email: ['', [Validators.required]],
      phone: ['', Validators.required],
      altPhone: [''],
      website: [''],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required],
      mapLocation: ['']
    });
  }

  onSubmit(): void {
    if (this.collegeContactForm.valid) {
      console.log(this.collegeContactForm.value);
      // Add logic to send data to backend
    }
  }

}
