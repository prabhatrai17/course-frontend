import { Component } from '@angular/core';
import { UserLogin } from '../models/userLogin';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(private userService:UserServiceService,private router:Router){
  console.log("inside login constructor")
  const loggedInUser= userService.currentlyLoggedInUser();
  if(loggedInUser!='false') router.navigate(['dashboard/allCourses']);
}

 userLogin:UserLogin={
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

//login
userlogin(userLogin:UserLogin){
this.userService.login(this.userLogin).subscribe({
  next:data=>{
  console.log("login component method");
  console.log(data);
  if(data!=false || data!=undefined || data!=null){
    localStorage.setItem("loggedinuser",JSON.stringify(data));
   this.router.navigate(['dashboard/allCourses']);
   this.msgFromBackend=data;
  }
  else{
    //localStorage.setItem("error",JSON.stringify(error));
   this.msgFromBackend=data;
   console.log(data.error);
   
  }
},
  error:error=>{
    localStorage.setItem("error",JSON.stringify(error.error));
    console.error('there is error recieved from backend,',error.error);
    //this.msgFromBackend= JSON.stringify(error.error);
    this.msgFromBackend="error occured, try again later"
  }
});
}
//form submit method
onSubmit(submit:any){
  console.log("inside onsubmit");
  console.log(submit);
  console.log(submit.form.value)
  console.log(this.userLogin)
  this.userlogin(this.userLogin);
}
}
