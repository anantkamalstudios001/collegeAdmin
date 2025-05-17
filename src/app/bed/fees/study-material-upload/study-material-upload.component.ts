import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-study-material-upload',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './study-material-upload.component.html',
  styleUrl: './study-material-upload.component.scss'
})
export class StudyMaterialUploadComponent {
   materialForm: FormGroup;
  selectedFile: File | null = null;

  departments = ['Computer Science', 'Physics', 'Mathematics', 'Chemistry'];
  semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'];

  constructor(private fb: FormBuilder) {
    this.materialForm = this.fb.group({
      title: ['', Validators.required],
      department: ['', Validators.required],
      subject: ['', Validators.required],
      semester: ['', Validators.required],
      description: ['']
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  onSubmit() {
    if (this.materialForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('title', this.materialForm.value.title);
      formData.append('department', this.materialForm.value.department);
      formData.append('subject', this.materialForm.value.subject);
      formData.append('semester', this.materialForm.value.semester);
      formData.append('description', this.materialForm.value.description);
      formData.append('file', this.selectedFile);

      console.log('Form Data Ready to Send:', formData);
      // Make API call here to upload the formData
    } else {
      console.log('Form is invalid or no file selected');
      this.materialForm.markAllAsTouched();
    }
  }
}
