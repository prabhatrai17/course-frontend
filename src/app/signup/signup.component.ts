import { Component } from '@angular/core';
import { UserSignup } from '../models/userSignup';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
value="clear me";
constructor(private userService:UserServiceService,private router:Router){
  console.log("inside signup constructor")
  const loggedInUser=userService.currentlyLoggedInUser();
  if(loggedInUser!=false) router.navigate(['dashboard/allCourses'])
}

 userSignup:UserSignup={
  };
inputName="";
msgFromBackend="";
errorMsgFromBackend="";

//method to handle input of form
 eventHandle(event:any) {
  this.inputName=event.target.value;
  //console.log(event.target);
  console.log(this.inputName);
}

//signup
userSignupFunc(userSignup:UserSignup){
this.userService.signup(this.userSignup).subscribe({
  next:data=>{
  console.log("login component method");
  console.log(data);
  if(data==true){
   
   this.msgFromBackend="signup Success";
   this.router.navigate(['login']);
  }
  else{
   this.msgFromBackend=data;
   console.log(data.error);
   
  }},
  error:error=>{
    console.error('there is error recieved from backend,',error.error);
    this.msgFromBackend=error.error;
  }
});
}
//form submit method
onSubmit(submit:any){
  console.log("inside onsubmit");
  console.log(submit);
  console.log(submit.form.value)
  console.log(this.userSignup)
  this.userSignupFunc(this.userSignup);
}
}
