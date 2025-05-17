import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // ✅ OK to keep
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-add-notice',
  standalone: true,
imports: [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatDatepickerModule,
  MatButtonModule,
  BreadcrumbComponent
],
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.scss']
})
export class AddNoticeComponent {
      breadscrums = [
    {
      title: 'Add notice',
      items: ['Notices'],
      active: 'Add notice',
    },
  ];

  noticeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.noticeForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      content: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.noticeForm.valid) {
      console.log(this.noticeForm.value);
      // Add logic to send data to backend
    }
  }

}
