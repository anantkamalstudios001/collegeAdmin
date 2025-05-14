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
  selector: 'app-category',
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
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent {

  categoryForm: FormGroup;
  breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];
  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      status: ['Active', Validators.required],
      displayOrder: [1, [Validators.required, Validators.min(1)]]
    });
  }

  submitForm() {
    if (this.categoryForm.valid) {
      console.log('Academic Category:', this.categoryForm.value);
      // TODO: Send to backend API
    } else {
      this.categoryForm.markAllAsTouched();
    }
  }
}
