import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalVariables } from '../utility/global-variables';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  // private baseUrl="http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  getAllCourses():Observable<any>{
     return this.httpClient.get(`${GlobalVariables.baseUrl}/courses`);
  }

  getEnrolledCourseOfUser(userId:number):Observable<any>{
    return this.httpClient.get(`${GlobalVariables.baseUrl}/courses/enrolled/${userId}`);
  }
  getBoughtCourseOfUser(userId: number):Observable<any> {
    return this.httpClient.get(`${GlobalVariables.baseUrl}/courses/bought/${userId}`);

  }

}
