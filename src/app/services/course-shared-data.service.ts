import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseSharedDataService {

  constructor() { }
  private offlineCourseArr:any=[]
  setCourseArr(courseArr:any){
    this.offlineCourseArr=courseArr;
  }
  getCourseArr():any{
  return this.offlineCourseArr;
  }
}
