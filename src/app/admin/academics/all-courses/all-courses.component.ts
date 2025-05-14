import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-all-courses',
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
        CommonModule
  ],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.scss'
})
export class AllCoursesComponent {
  coursesForm: FormGroup;
     breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];
  constructor(private fb: FormBuilder) {
    this.coursesForm = this.fb.group({
      courses: this.fb.array([this.createCourseGroup()])
    });
  }

  get courses(): FormArray {
    return this.coursesForm.get('courses') as FormArray;
  }

  createCourseGroup(): FormGroup {
    return this.fb.group({
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

  addCourse(): void {
    this.courses.push(this.createCourseGroup());
  }

  removeCourse(index: number): void {
    this.courses.removeAt(index);
  }

  submitForm(): void {
    if (this.coursesForm.valid) {
      console.log('All Courses:', this.coursesForm.value);
      // TODO: Submit to backend
    } else {
      this.coursesForm.markAllAsTouched();
    }
  }
}
