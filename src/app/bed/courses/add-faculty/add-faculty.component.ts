import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { APIMAINService } from 'app/bed/apimain.service';
import { Validators } from 'ngx-editor';

@Component({
  selector: 'app-add-faculty',
  imports: [
      BreadcrumbComponent,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatDatepickerModule,
        MatButtonModule,
  ],
  templateUrl: './add-faculty.component.html',
  styleUrl: './add-faculty.component.scss'
})
export class AddFacultyComponent {
  breadscrums = [
    {
      title: 'Add Staff',
      items: ['Staff'],
      active: 'Add Staff',
    },
  ];
facultyForm!: FormGroup;

  constructor(private fb: FormBuilder, private APIService: APIMAINService) {}

  ngOnInit(): void {
    this.facultyForm = this.fb.group({
      name: ['', Validators.required],
      designation: ['', Validators.required],
      department: ['', Validators.required],
      qualification: ['', Validators.required],
      experience: ['', Validators.required],
      isActive: [true]
    });
  }

  onSubmit() {
    if (this.facultyForm.valid) {
      console.log(this.facultyForm.value);
      this.APIService.addFaculty(this.facultyForm.value).subscribe((res:any) => {
        console.log('Faculty added:', res);
      });
    }
  }
}
