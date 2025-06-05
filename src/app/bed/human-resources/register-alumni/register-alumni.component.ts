import { CommonModule } from '@angular/common';
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
import { APIMAINService } from 'app/bed/apimain.service';

@Component({
  selector: 'app-register-alumni',
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
  templateUrl: './register-alumni.component.html',
  styleUrl: './register-alumni.component.scss'
})
export class RegisterAlumniComponent {
  alumniForm!: FormGroup;

  breadscrums = [
    {
      title: 'Register Alumni',
      items: ['Alumni'],
      active: 'Register Alumni',
    },
  ];

  constructor(private fb: FormBuilder, private APIService : APIMAINService) {}

  ngOnInit(): void {
    this.alumniForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      course: ['', Validators.required],
      passingYear: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      currentOccupation: [''],
      location: ['']
    });
  }

  onSubmit(): void {
    if (this.alumniForm.valid) {
      console.log('Alumni Registered:', this.alumniForm.value);
      this.APIService.addAlumni(this.alumniForm.value).subscribe((res:any) => {
        console.log(res);
        
      })
    } else {
      this.alumniForm.markAllAsTouched();
    }
  }

}
