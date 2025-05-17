import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-governing-body',
  imports:[ReactiveFormsModule],
  templateUrl: './governing-body.component.html',
  styleUrl: './governing-body.component.scss'
})
export class GoverningBodyComponent {
  governingBodyForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.governingBodyForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.minLength(50)]]
    });

  }
  onSubmit() {
    console.log(this.governingBodyForm);
}
}
