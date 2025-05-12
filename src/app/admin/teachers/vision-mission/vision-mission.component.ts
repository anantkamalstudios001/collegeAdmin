import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,

    BreadcrumbComponent
  ],
  templateUrl: './vision-mission.component.html',
  styleUrl: './vision-mission.component.scss'
})
export class VisionMissionComponent {

  // Breadcrumbs
  breadscrumbs = [
    {
      title: 'About Section',
      items: ['About'],
      active: 'Vision & Mission',
    },
  ];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      vision: this.fb.array([this.createParagraph()]),
      mission: this.fb.array([this.createParagraph()])
    });
  }

  createParagraph(): FormGroup {
    return this.fb.group({
      text: ['', Validators.required]
    });
  }

  get vision(): FormArray {
    return this.form.get('vision') as FormArray;
  }

  get mission(): FormArray {
    return this.form.get('mission') as FormArray;
  }

  addParagraph(type: 'vision' | 'mission') {
    (this.form.get(type) as FormArray).push(this.createParagraph());
  }

  removeParagraph(type: 'vision' | 'mission', index: number) {
    (this.form.get(type) as FormArray).removeAt(index);
  }

  submit() {
    if (this.form.valid) {
      console.log('Submitted data:', this.form.value);
      // TODO: Send to backend
    }
  }

}
