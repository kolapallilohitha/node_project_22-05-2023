import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http:HttpClient) { }

  register(data){
    return this.http.post(environment.apiBaseUrl + '/api/signup/',data)
  }

  login(email,password){
    return this.http.post(environment.apiBaseUrl + '/api/signin/',{email,password})
  }
  forget(data){
    return this.http.post('http://localhost:8081/api/forgot-password',data)
  }
  newPassword(data){
    return this.http.post('http://localhost:8081/api/reset-password',data)
  }
}
