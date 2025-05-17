import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-welcome-message',
  imports: [
        MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BreadcrumbComponent

  ],
  templateUrl: './welcome-message.component.html',
  styleUrl: './welcome-message.component.scss'
})
export class WelcomeMessageComponent {
welcomeForm: FormGroup;

breadscrumbs = [
  {
    title: 'College Welcome Info',
    items: ['Welcome'],
    active: 'College Welcome Message',
  },
];


  constructor(private fb: FormBuilder) {
    this.welcomeForm = this.fb.group({
      heading: ['', Validators.required],
      message: ['', Validators.required],
      isActive: [true],
    });
  }

  onSubmit() {
    if (this.welcomeForm.valid) {
      console.log(this.welcomeForm.value);
    }
  }

}
