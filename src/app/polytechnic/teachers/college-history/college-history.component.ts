import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-college-history',
  imports: [ReactiveFormsModule],
  templateUrl: './college-history.component.html',
  styleUrl: './college-history.component.scss'
})
export class CollegeHistoryComponent {
  historyForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.historyForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required, Validators.minLength(50)]]
    });

  }
  onSubmit() {
    console.log(this.historyForm);
  }
}
