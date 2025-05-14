import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';


@Component({
  selector: 'app-principal-message',
  imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatDatepickerModule,
       
        MatButtonModule,
  ],
  templateUrl: './principal-message.component.html',
  styleUrls: ['./principal-message.component.scss']
})
export class PrincipalMessageComponent {
  messageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      title: [''],
      principalName: [''],
      designation: ['Principal'],
      message: ['']
    });
  }

  submitForm() {
    console.log(this.messageForm.value);
    // Handle saving logic (API call or local storage)
  }
}
