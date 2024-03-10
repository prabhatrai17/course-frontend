import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseSharedDataService } from '../services/course-shared-data.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent {

  queryValueRecieved:any;
  courseArr:any=[]
  currentCourseId:any;
  currentCourse:any={};
  currentCourseModules:any=[];
  currentCourseModulesTopics:any=[];
  moduleFetched=false;
  topicsFetched=false;

  constructor(private activatedRoutes:ActivatedRoute,private courseSharedData:CourseSharedDataService){
    console.log("in view course")    
    console.log(this.courseSharedData.getCourseArr());

    this.queryValueRecieved=this.activatedRoutes.snapshot.queryParams;
    this.currentCourseId=this.queryValueRecieved.cId;
    console.log(this.currentCourseId)
   this.courseArr= courseSharedData.getCourseArr();
   console.log(this.courseArr)
   this.getCurrentCourse();
  }

  getCurrentCourse(){
    
  for(let course of this.courseArr){
    //console.log(course)
    // console.log(course.courseId)
    // console.log(this.currentCourseId)
    if(course.courseId==this.currentCourseId){
      console.log(course)
      this.currentCourse=course;
      console.log("course found")
      break;
    }
  }
  console.log(this.currentCourse);
  this.currentCourseModules=this.currentCourse.courseModule;
  if(this.currentCourseModules==null||this.currentCourseModules==undefined||this.currentCourseModules.length==0)
      this.moduleFetched=false
      else
      this.moduleFetched=true
  console.log(this.currentCourseModules);
  }

  
getAllModuleTopics(moduleId:any){

  if(moduleId!=null&&moduleId!=undefined)
  for(let module of this.currentCourseModules){
    if(module.id==moduleId){
      this.currentCourseModulesTopics=module.moduleTopics;
      console.log(this.currentCourseModulesTopics);
      if(this.currentCourseModulesTopics==null||this.currentCourseModulesTopics==undefined||this.currentCourseModulesTopics.length==0)
      this.topicsFetched=false;
     else
      this.topicsFetched=true;
      break;
    }
  }
}





}
