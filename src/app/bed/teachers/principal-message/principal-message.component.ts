import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APIService } from 'app/bed/frount-office/api.service';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-principal-message',
    imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './principal-message.component.html',
  styleUrls: ['./principal-message.component.scss']
})
export class PrincipalMessageComponent {
  messageForm: FormGroup;

  constructor(private fb: FormBuilder, private APIService : APIService) {
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
    const formData = this.messageForm.value;
    this.APIService.addPrincipalMessage(formData).subscribe((res:any) => {
      console.log(res);
    });

  }
}
