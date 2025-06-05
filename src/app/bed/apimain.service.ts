import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class APIMAINService {
 private baseUrl = 'http://localhost:5000/api/collegeadmin';

 getAuthHeaders() {
  const department = localStorage.getItem('department') || '';
  return {
    headers: new HttpHeaders({
      'X-Department': department
    })
  };
}


  constructor(private http : HttpClient) { }


  addGoverningBody(formData:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add-governing`,formData);
  }

  addStaffUser(formData:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add-staff`,formData, this.getAuthHeaders());
  }

  addFaculty(array:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add-faculty-member`,array, this.getAuthHeaders());
  }

    addNotice(array:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add-notice`,array, this.getAuthHeaders());
  }

  fetchNotices():Observable<any>
  {
    return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  }

  addCollegeContactInfo(formData:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add-contact`,formData, this.getAuthHeaders());
  }
  
  addAlumni(formData:any):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/add-alumni`,formData, this.getAuthHeaders());
  }
  
    // addCollegeContactInfo():Observable<any>
  // {
  //   return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  // }
  
    // addCollegeContactInfo():Observable<any>
  // {
  //   return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  // }
  
    // addCollegeContactInfo():Observable<any>
  // {
  //   return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  // }
  
    // addCollegeContactInfo():Observable<any>
  // {
  //   return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  // }
  
    // addCollegeContactInfo():Observable<any>
  // {
  //   return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  // }
  
    // addCollegeContactInfo():Observable<any>
  // {
  //   return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  // }
  
    // addCollegeContactInfo():Observable<any>
  // {
  //   return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  // }
  
    // addCollegeContactInfo():Observable<any>
  // {
  //   return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  // }
  
    // addCollegeContactInfo():Observable<any>
  // {
  //   return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  // }
  
    // addCollegeContactInfo():Observable<any>
  // {
  //   return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  // }
  
    // addCollegeContactInfo():Observable<any>
  // {
  //   return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  // }
  
    // addCollegeContactInfo():Observable<any>
  // {
  //   return this.http.get(`${this.baseUrl}/fetch-notices`, this.getAuthHeaders());
  // }
  
  

  // addHistory(formData:any):Observable<any>
  // {
  //   return this.http.post(`${this.baseUrl}/add-history`,formData);
  // }


}
