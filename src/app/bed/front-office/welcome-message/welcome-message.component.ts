import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { APIService } from 'app/bed/frount-office/api.service';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-welcome-message',
  imports: [
        MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BreadcrumbComponent,
    MatSlideToggleModule

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


  constructor(private fb: FormBuilder, private APIService: APIService) {
      this.welcomeForm = this.fb.group({
        heading: ['', Validators.required],
        message: ['', Validators.required],
        isActive: [true],
      });
  }

  onSubmit() {
    if (this.welcomeForm.valid) {
      console.log(this.welcomeForm.value);
      this.APIService.addWelcomeMessage(this.welcomeForm.value).subscribe((res:any) => {
        console.log(res);
      })
    }
    else
    {
      alert('fill the all details');
    }
  }

}
