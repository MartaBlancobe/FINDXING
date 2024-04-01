import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class UserAppService {
 
  BACK_URL = 'http://localhost:3000/backOffice/';
  constructor(private http: HttpClient) { }

  createFormContact(contactForm: FormGroup){
    return this.http.put(`${this.BACK_URL}formContact`, contactForm.value);
  }

  registerUser(user:User){
    return this.http.put(`${this.BACK_URL}registerUser`, user);
  }

  login(user:User) {
    return this.http.post(`${this.BACK_URL}login`, user);
  }
  
}
