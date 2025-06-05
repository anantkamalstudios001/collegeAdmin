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
        CommonModule
  ],
  templateUrl: './alumni-stories.component.html',
  styleUrl: './alumni-stories.component.scss'
})
export class AlumniStoriesComponent {
  breadscrums = [
    {
      title: 'Alumni Stories',
      items: ['Alumni'],
      active: 'Alumni Stories',
    },
  ];
 storyForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.storyForm = this.fb.group({
      fullName: ['', Validators.required],
      batch: ['', [Validators.required, Validators.pattern(/^\d{4}$/)]],
      title: ['', Validators.required],
      story: ['', [Validators.required, Validators.minLength(50)]]
    });
  }

  onSubmit(): void {
    if (this.storyForm.valid) {
      console.log('Alumni Story Submitted:', this.storyForm.value);
      // TODO: Send data to backend service
    } else {
      this.storyForm.markAllAsTouched();
    }
  }

}
