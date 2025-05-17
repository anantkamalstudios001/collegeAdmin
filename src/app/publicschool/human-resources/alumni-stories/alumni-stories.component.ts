import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { FileUploadComponent } from '@shared/components/file-upload/file-upload.component';

@Component({
  selector: 'app-alumni-stories',
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
  templateUrl: './alumni-stories.component.html',
  styleUrl: './alumni-stories.component.scss'
})
export class AlumniStoriesComponent {
  breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];
 alumniForm: FormGroup;
  selectedPhoto: File | null = null;

  constructor(private fb: FormBuilder) {
    this.alumniForm = this.fb.group({
      name: ['', Validators.required],
      batch: ['', Validators.required],
      position: ['', Validators.required],
      organization: [''],
      title: ['', Validators.required],
      story: ['', Validators.required],
      status: ['Published', Validators.required]
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedPhoto = file;
    }
  }

  submitForm() {
    if (this.alumniForm.valid) {
      const formData = new FormData();
      formData.append('name', this.alumniForm.value.name);
      formData.append('batch', this.alumniForm.value.batch);
      formData.append('position', this.alumniForm.value.position);
      formData.append('organization', this.alumniForm.value.organization || '');
      formData.append('title', this.alumniForm.value.title);
      formData.append('story', this.alumniForm.value.story);
      formData.append('status', this.alumniForm.value.status);

      if (this.selectedPhoto) {
        formData.append('photo', this.selectedPhoto);
      }

      console.log('Alumni Story Ready for Submission:', formData);
      // Submit to backend API using HttpClient
    } else {
      this.alumniForm.markAllAsTouched();
    }
  }
}
