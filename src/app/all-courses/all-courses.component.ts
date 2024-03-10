import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { CourseSharedDataService } from '../services/course-shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent {
  constructor(private courseService:CourseService,private courseSharedData:CourseSharedDataService,private router:Router){
    console.log("inside all course constructor");
    this.getAllCourses();
   
  }
  courseArr:any[]=[];

  getAllCourses(){
    console.log("in get all courses");
    this.courseService.getAllCourses().subscribe({next:data=> {
      //console.log(data);
      this.courseArr=data;
      console.log(this.courseArr);
      if(this.courseArr!=null&&this.courseArr!=undefined)
      this.courseSharedData.setCourseArr(this.courseArr);
      console.log(this.courseSharedData.getCourseArr());


    },error:err=> {
      console.log("errror from backend ",err);
    },
   
    });
  }
  handleViewCourse(courseId:any){
    console.log(courseId)
    for(let course of this.courseArr){
      console.log(course)

      if(course.courseId==courseId){
        console.log(course)
        
        this.router.navigate(['dashboard/viewcourse'],{queryParams:{cId:courseId}});
        break;
      }
    }
  }


}
