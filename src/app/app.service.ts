import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ZoomMtg } from '@zoomus/websdk';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getDetailsById(id){
    console.log(id);
    return this.http.get(environment.apiBaseUrl + '/api/profile/' + id)
  }

  updateProfile(id:any, data: any){
    return this.http.put(environment.apiBaseUrl + '/api/profile/'+ id, data)
  }

  updatePassword(data: any) {
    return this.http.put(environment.apiBaseUrl + '/api/change-password', data)
  }

  getprofile(){
    return this.http.get(environment.apiBaseUrl + '/api/profile')
  }

  createProfile(data: any){
    return this.http.post(environment.apiBaseUrl + '/api/profile', data)
  }

  deleteProfile(id:any): any{
    return this.http.delete(environment.apiBaseUrl + '/api/profile/'+ id)
  }
  
  leaveDetail(data:any){
    return this.http.post('http://localhost:8081/api/leave-request',data);
  }

  getLeave(){
    return this.http.get('http://localhost:8081/api/leave-request');
  }

  getPublisher() {
    return this.http.get(environment.apiBaseUrl + '/publishers')
  }
}