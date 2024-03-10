import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
  loggedUser:any;

  constructor(private courseService: CourseService,private userService:UserServiceService) {
    console.log("inside dashboard constructor");
     this.loggedUser = userService.currentlyLoggedInUser();
    //console.log(this.loggedUser);
    
   // this.getAllCourses();
  }

  courseArr: any[] = [];

  getAllCourses() {
    console.log("in get all courses");
    this.courseService.getAllCourses().subscribe({
      next: data => {
        //console.log(data);
        this.courseArr = data;
        console.log(this.courseArr);


      }, error: err => {
        console.log("errror from backend ", err);
      },

    });
  }

}
