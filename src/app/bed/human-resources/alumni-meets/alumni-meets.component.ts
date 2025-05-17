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
  selector: 'app-alumni-meets',
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
  templateUrl: './alumni-meets.component.html',
  styleUrl: './alumni-meets.component.scss'
})
export class AlumniMeetsComponent {
  breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];
  alumniMeetForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder) {
    this.alumniMeetForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      venue: ['', Validators.required],
      description: [''],
      coordinator: ['', Validators.required],
      status: ['Upcoming', Validators.required]
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  submitForm() {
    if (this.alumniMeetForm.valid) {
      const formData = new FormData();
      formData.append('title', this.alumniMeetForm.value.title);
      formData.append('date', this.alumniMeetForm.value.date);
      formData.append('time', this.alumniMeetForm.value.time);
      formData.append('venue', this.alumniMeetForm.value.venue);
      formData.append('description', this.alumniMeetForm.value.description || '');
      formData.append('coordinator', this.alumniMeetForm.value.coordinator);
      formData.append('status', this.alumniMeetForm.value.status);

      if (this.selectedFile) {
        formData.append('poster', this.selectedFile);
      }

      console.log('Alumni Meet Form Submitted:', formData);
      // Submit to backend API
    } else {
      this.alumniMeetForm.markAllAsTouched();
    }
  }
}
