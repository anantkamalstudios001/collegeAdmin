import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-online-journals',
  imports: [ReactiveFormsModule],
  templateUrl: './online-journals.component.html',
  styleUrl: './online-journals.component.scss'
})
export class OnlineJournalsComponent {
  journalForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.journalForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.minLength(50)]]
    });

  }
  onSubmit() {
    console.log(this.journalForm);
}
}
