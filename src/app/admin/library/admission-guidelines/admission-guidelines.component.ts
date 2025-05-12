import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatError } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-admission-guidelines',
 standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatError,
    BreadcrumbComponent
  ],
  templateUrl: './admission-guidelines.component.html',
  styleUrl: './admission-guidelines.component.scss'
})
export class AdmissionGuidelinesComponent {

    form: FormGroup;
  guidelines: string[] = [];
  breadscrumbs = [
    {
      title: 'Admission Guidelines',
      items: ['Admissions'],
      active: 'Admission Guidelines',
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      guideline: ['', Validators.required],
    });
  }

  addGuideline() {
    if (this.form.valid) {
      this.guidelines.push(this.form.value.guideline);
      this.form.reset();
    }
  }

  removeGuideline(index: number) {
    this.guidelines.splice(index, 1);
  }

}
