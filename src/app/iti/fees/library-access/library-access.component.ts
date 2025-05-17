import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatError } from '@angular/material/select';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-library-access',
  imports: [
        CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatError,
    BreadcrumbComponent

  ],
  templateUrl: './library-access.component.html',
  styleUrl: './library-access.component.scss'
})
export class LibraryAccessComponent {

    form: FormGroup;
  libraryEntries: string[] = [];
  breadscrumbs = [
    {
      title: 'E-Resources',
      items: ['Resources'],
      active: 'Library Access',
    }
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      entry: ['', Validators.required],
    });
  }

  addEntry() {
    if (this.form.valid) {
      this.libraryEntries.push(this.form.value.entry);
      this.form.reset();
    }
  }

  removeEntry(index: number) {
    this.libraryEntries.splice(index, 1);
  }

}
