import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';
import { Role } from '@core/models/role';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private users = [
    {
      id: 1,
      img: 'assets/images/user/admin.jpg',
      username: 'admin@school.org',
      password: 'admin@123',
      firstName: 'Sarah',
      lastName: 'Smith',
      role: Role.Admin,
      token: 'admin-token',
    },
    // {
    //   id: 2,
    //   img: 'assets/images/user/teacher.jpg',
    //   username: 'teacher@school.org',
    //   password: 'teacher@123',
    //   firstName: 'Ashton',
    //   lastName: 'Cox',
    //   role: Role.Teacher,
    //   token: 'teacher-token',
    // },
    // {
    //   id: 3,
    //   img: 'assets/images/user/student.jpg',
    //   username: 'student@school.org',
    //   password: 'student@123',
    //   firstName: 'Ashton',
    //   lastName: 'Cox',
    //   role: Role.Student,
    //   token: 'student-token',
    // },
    {
      id: 2,
      img: 'assets/images/user/student.jpg',
      username: 'username@bed',
      password: 'password@bed',
      firstName: 'User_First_name',
      lastName: 'User_last_name',
      role: Role.Bed,
      token: 'bed-token',
    },
    {
      id: 3,
      img: 'assets/images/user/student.jpg',
      username: 'username@engineering',
      password: 'password@engineering',
      firstName: 'User_First_name',
      lastName: 'User_last_name',
      role: Role.Engineering,
      token: 'engineering-token',
    },
    {
      id: 4,
      img: 'assets/images/user/student.jpg',
      username: 'username@iti',
      password: 'password@iti',
      firstName: 'User_First_name',
      lastName: 'User_last_name',
      role: Role.Iti,
      token: 'iti-token',
    },
    {
      id: 5,
      img: 'assets/images/user/student.jpg',
      username: 'username@pharmacy',
      password: 'password@pharmacy',
      firstName: 'User_First_name',
      lastName: 'User_last_name',
      role: Role.Pharmacy,
      token: 'pharmacy-token',
    },
    {
      id: 6,
      img: 'assets/images/user/student.jpg',
      username: 'username@polytechnic',
      password: 'password@polytechnic',
      firstName: 'User_First_name',
      lastName: 'User_last_name',
      role: Role.Polytechnic,
      token: 'polytechnic-token',
    },
    {
      id: 7,
      img: 'assets/images/user/student.jpg',
      username: 'username@publicschool',
      password: 'password@publicschool',
      firstName: 'User_First_name',
      lastName: 'User_last_name',
      role: Role.Publicschool,
      token: 'publicschool-token',
    },
    {
      id: 8,
      img: 'assets/images/user/student.jpg',
      username: 'username@mba',
      password: 'password@mba',
      firstName: 'User_First_name',
      lastName: 'User_last_name',
      role: Role.Mba,
      token: 'mba-token',
    },


    





  ];

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser') || '{}')
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {

    const user = this.users.find((u) => u.username === username && u.password === password);

    if (!user) {
      return this.error('Username or password is incorrect');
    } else {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return this.ok({
        id: user.id,
        img: user.img,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        token: user.token,
      });
    }
  }
  ok(body?: {
    id: number;
    img: string;
    username: string;
    firstName: string;
    lastName: string;
    token: string;
  }) {
    return of(new HttpResponse({ status: 200, body }));
  }
  error(message: string) {
    return throwError(message);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(this.currentUserValue);
    return of({ success: false });
  }
}
