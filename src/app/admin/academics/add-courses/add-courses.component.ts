import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-add-courses',
  imports: [
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
  
  templateUrl: './add-courses.component.html',
  styleUrl: './add-courses.component.scss'
})
export class AddCoursesComponent {
  courseForm: FormGroup;
    breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      courseName: ['', Validators.required],
      department: ['', Validators.required],
      courseType: ['UG', Validators.required],
      duration: ['', Validators.required],
      intake: [0, [Validators.required, Validators.min(1)]],
      eligibility: ['', Validators.required],
      description: [''],
      status: ['Active', Validators.required]
    });
  }

  submitForm() {
    if (this.courseForm.valid) {
      console.log('Course Data:', this.courseForm.value);
      // TODO: Send to backend API
    } else {
      this.courseForm.markAllAsTouched();
    }
  }
}
