import { Component } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { APIMAINService } from 'app/bed/apimain.service';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-governing-body',
  imports:[ReactiveFormsModule],
  templateUrl: './governing-body.component.html',
  styleUrl: './governing-body.component.scss'
})
export class GoverningBodyComponent {
governingBodyForm!: FormGroup;

  constructor(private fb: FormBuilder, private APIService: APIMAINService) {}

  ngOnInit(): void {
    this.governingBodyForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      details: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  onSubmit() {
    if (this.governingBodyForm.valid) {
      console.log(this.governingBodyForm.value);
      this.APIService.addGoverningBody(this.governingBodyForm.value).subscribe(res => {
        console.log(res);
      });
    }
  }

}
