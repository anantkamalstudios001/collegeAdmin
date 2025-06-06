import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-principal-message',
    imports: [ReactiveFormsModule, FormsModule],
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
