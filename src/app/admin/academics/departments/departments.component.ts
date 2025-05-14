import { CommonModule } from '@angular/common';
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
  selector: 'app-departments',
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
  templateUrl: './departments.component.html',
  styleUrl: './departments.component.scss'
})
export class DepartmentsComponent {
  departmentForm: FormGroup;
  breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];

  constructor(private fb: FormBuilder) {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
      hod: ['', Validators.required],
      description: [''],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10,15}$')]],
      status: ['Active', Validators.required]
    });
  }

  submitForm() {
    if (this.departmentForm.valid) {
      console.log('Department Data:', this.departmentForm.value);
      // TODO: Send to backend
    } else {
      this.departmentForm.markAllAsTouched();
    }
  }
}
