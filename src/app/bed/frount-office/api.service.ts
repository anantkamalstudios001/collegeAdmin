import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {

    private baseUrl = 'http://localhost:5000/api/collegeadmin';

  constructor(private http : HttpClient) { }


  addBanner(formData:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/addbanner`,formData);
  }

  addWelcomeMessage(formData:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add-welcome-msg`,formData);
  }

  addMissionVision(array:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add-vision-mission`,array);
  }

  addPrincipalMessage(formData:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add-principal-message`,formData);
  }

  addHistory(formData:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add-history`,formData);
  }
}
