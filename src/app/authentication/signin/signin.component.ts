import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { UntypedFormBuilder, UntypedFormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService, Role } from '@core';
import { UnsubscribeOnDestroyAdapter } from '@shared';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    imports: [
        RouterLink,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        CommonModule
    ]
})
export class SigninComponent
  extends UnsubscribeOnDestroyAdapter
  implements OnInit {
  authForm!: UntypedFormGroup;
  submitted = false;
  loading = false;
  selectedRole: string = '';

  error = '';
  hide = true;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
    super();
  }

ngOnInit() {
  this.authForm = this.formBuilder.group({
    role: ['', Validators.required], // ADD THIS
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
}

  get f() {
    return this.authForm.controls;
  }
  adminSet() {
    this.authForm.get('username')?.setValue('admin@school.org');
    this.authForm.get('password')?.setValue('admin@123');
  }
  teacherSet() {
    this.authForm.get('username')?.setValue('teacher@school.org');
    this.authForm.get('password')?.setValue('teacher@123');
  }
  studentSet() {
    this.authForm.get('username')?.setValue('student@school.org');
    this.authForm.get('password')?.setValue('student@123');
  }

  // MBA 
  mbaSet() {
    this.authForm.get('username')?.setValue('username@mba');
    this.authForm.get('password')?.setValue('password@mba');
  }
    // MBA 
  bedSet() {
    this.authForm.get('username')?.setValue('username@bed');
    this.authForm.get('password')?.setValue('password@bed');
  }
    engineeringSet() {
    this.authForm.get('username')?.setValue('username@engineering');
    this.authForm.get('password')?.setValue('password@engineering');
  }
    itiSet() {
    this.authForm.get('username')?.setValue('username@iti');
    this.authForm.get('password')?.setValue('password@iti');
  }
    pharmacySet() {
    this.authForm.get('username')?.setValue('username@pharmacy');
    this.authForm.get('password')?.setValue('password@pharmacy');
  }
  polytechnicSet() {
    this.authForm.get('username')?.setValue('username@polytechnic');
    this.authForm.get('password')?.setValue('password@polytechnic');
  }
  publicschoolSet() {
    this.authForm.get('username')?.setValue('username@publicschool');
    this.authForm.get('password')?.setValue('password@publicschool');
  }


onSubmit() {
  this.submitted = true;
  this.loading = true;
  this.error = '';

  const role = this.authForm.get('role')?.value;

  // Set credentials dynamically
  if (role === 'admin') this.adminSet();
  else if (role === 'teacher') this.teacherSet();
  else if (role === 'student') this.studentSet();
  else if (role === 'mba') this.mbaSet();
  else if (role === 'bed') this.bedSet();
  else if (role === 'engineering') this.engineeringSet();
  else if (role === 'iti') this.itiSet();
  else if (role === 'pharmacy') this.pharmacySet();
  else if (role === 'polytechnic') this.polytechnicSet();
  else if (role === 'publicschool') this.publicschoolSet();

  if (this.authForm.invalid) {
    this.error = 'Username and Password not valid !';
    this.loading = false;
    return;
  }

  this.subs.sink = this.authService
    .login(this.f['username'].value, this.f['password'].value)
    .subscribe({
      next: (res) => {
        if (res) {
          setTimeout(() => {
            const role = this.authService.currentUserValue.role;
            if (role === Role.All || role === Role.Admin) {
              this.router.navigate(['/admin/dashboard/main']);
            } else if (role === Role.Teacher) {
              this.router.navigate(['/teacher/dashboard']);
            } else if (role === Role.Student) {
              this.router.navigate(['/student/dashboard']);
            } else if (role === Role.Mba) {
              this.router.navigate(['/mba/dashboard']);
              
            }  else if (role === Role.Bed) {
              this.router.navigate(['/bed/dashboard']);
            }  else if (role === Role.Engineering) {
              this.router.navigate(['/engineering/dashboard']);
            }  else if (role === Role.Iti) {
              this.router.navigate(['/iti/dashboard']);
            }  else if (role === Role.Pharmacy) {
              this.router.navigate(['/pharmacy/dashboard']);
            }  else if (role === Role.Polytechnic) {
              this.router.navigate(['/polytechnic/dashboard']);
            }  else if (role === Role.Publicschool) {
              this.router.navigate(['/publicschool/dashboard']);
            } 
            else {
              this.router.navigate(['/authentication/signin']);
            }
            this.loading = false;
          }, 1000);
        } else {
          this.error = 'Invalid Login';
          this.loading = false;
        }
      },
      error: (error) => {
        this.error = error;
        this.submitted = false;
        this.loading = false;
      },
    });
}




}
