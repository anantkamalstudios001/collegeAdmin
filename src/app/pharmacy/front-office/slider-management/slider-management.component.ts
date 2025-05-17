import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-slider-management',
  imports: [
        CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    BreadcrumbComponent

  ],
  templateUrl: './slider-management.component.html',
  styleUrl: './slider-management.component.scss'
})
export class SliderManagementComponent {
        breadscrums = [
    {
      title: 'Banner Management',
      items: ['Hone'],
      active: 'Banner Management',
    },
  ];

  bannerForm: FormGroup;
  previewUrl: string | ArrayBuffer | null = null;
  selectedImage: File | null = null;

  constructor(private fb: FormBuilder) {
    this.bannerForm = this.fb.group({
      title: ['', Validators.required],
      link: [''],
      order: [1],
      isActive: [true],
      image: [null],
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.bannerForm.patchValue({ image: file });

      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    if (this.bannerForm.valid) {
      const formData = new FormData();
      Object.entries(this.bannerForm.value).forEach(([key, value]) => {
        // formData.append(key, value);
      });
      if (this.selectedImage) {
        formData.append('bannerImage', this.selectedImage);
      }
      console.log('Form Data Ready to Submit', formData);
      // Call your backend API here
    }
  }

}
