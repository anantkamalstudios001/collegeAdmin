import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-principal-message',
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
