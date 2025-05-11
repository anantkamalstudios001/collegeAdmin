import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-college-contact-info',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './college-contact-info.component.html',
  styleUrl: './college-contact-info.component.scss'
})
export class CollegeContactInfoComponent {

    collegeContactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.collegeContactForm = this.fb.group({
      collegeName: ['', Validators.required],
      email: ['', [Validators.required]],
      phone: ['', Validators.required],
      altPhone: [''],
      website: [''],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      country: ['', Validators.required],
      mapLocation: ['']
    });
  }

  onSubmit(): void {
    if (this.collegeContactForm.valid) {
      console.log(this.collegeContactForm.value);
      // Add logic to send data to backend
    }
  }

}
