import { Component, EventEmitter, Output } from '@angular/core';
import { CourseService } from '../services/course.service';
import { UserServiceService } from '../services/user-service.service';
import { every } from 'rxjs';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-enrolledcourses',
  templateUrl: './enrolledcourses.component.html',
  styleUrls: ['./enrolledcourses.component.css']
})
export class EnrolledcoursesComponent {

  currentUserId: any;
  constructor(private userService: UserServiceService, private courseService: CourseService) {

    // @Output() 
    // selectedIndexChange:EventEmitter<number>

    var user = userService.currentlyLoggedInUser();
    console.log(JSON.parse(user).id);
    user = JSON.parse(user);
    console.log(user);

    if (user != false) {
      this.currentUserId = user.id;
      console.log("currently logged user");
      console.log(this.currentUserId);
      this.getAllEnrolledCourseOfUser(this.currentUserId);
      this.getAllBoughtCourseOfUser(this.currentUserId);
    }
    else {
      this.currentUserId = false;
    }

  }



  // selectedValue:any;
  // onSelectedIndexChanged(index:number){
  //  // console.log(event)
  //  console.log(index);
  // }
  enrolledArrSetFlag = false;
  boughtArrSetFlag = false;
  inactiveCourseArr: any = [];
  onSelectedTabChanged(changeEvent: MatTabChangeEvent) {
    console.log(changeEvent.index)
    //console.log(changeEvent.tab)

    if (changeEvent.index == 0) {
      console.log("active course called")
      if (this.currentUserId != false && this.enrolledArrSetFlag == false)
        this.getAllEnrolledCourseOfUser(this.currentUserId)

    }
    if (changeEvent.index == 1) {
      console.log("inactive course called")
      if (this.currentUserId != false && this.boughtArrSetFlag == false)
        this.getAllBoughtCourseOfUser(this.currentUserId)
      this.inactiveCourseArr.splice(0, this.inactiveCourseArr.length)

      for (var i = 0; i < this.boughtCourseArr.length; i++) {
        var foundFlag = 0;
        for (var j = 0; j < this.enrolledCourseArr.length; j++) {
          if (this.boughtCourseArr[i].courseId == this.enrolledCourseArr[j].courseId) foundFlag = 1;
        }
        if (foundFlag == 0) this.inactiveCourseArr.push(this.boughtCourseArr[i])
      }
      console.log("inactive course arr")
      console.log(this.inactiveCourseArr)
    }
  }

  enrolledCourseArr: any = [];
  boughtCourseArr: any = [];
  getAllEnrolledCourseOfUser(userId: number) {
    this.courseService.getEnrolledCourseOfUser(userId).subscribe(
      {
        next: value => {
          console.log("data recieved")
          console.log(value);
          this.enrolledCourseArr = value;
          this.enrolledArrSetFlag = true;
          console.log(this.enrolledCourseArr);

        },
        error: error => {
          console.log("some error occured when calling get all enrolled courses of user")
          console.log(error)

        },
        complete: () => {
          console.log("enrolled course of user executed successfully");
        }
      }
    )


  }

  getAllBoughtCourseOfUser(userId: number) {
    this.courseService.getBoughtCourseOfUser(userId).subscribe(
      {
        next: value => {
          console.log("data recieved")
          console.log(value);
          this.boughtCourseArr = value;
          this.boughtArrSetFlag = true;
          console.log(this.boughtCourseArr);

        },
        error: error => {
          console.log("some error occured when calling get all bought courses of user")
          console.log(error)

        },
        complete: () => {
          console.log("bought course of user executed successfully");
        }
      }
    )


  }

}
