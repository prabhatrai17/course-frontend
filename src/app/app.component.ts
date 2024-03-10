import { Component,inject } from '@angular/core';
// import { HomeComponent } from './home/home.component';
import { User } from './models/user';
import { UserServiceService } from './services/user-service.service';
import { Router } from '@angular/router';

@Component(
  {
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // userArr:User[]=[];
  // userService:UserServiceService=inject(UserServiceService);
  loggedInUser:any;

  constructor(private userService:UserServiceService,private router:Router){
    //this.userArr=this.userService.getAllUsers();
    console.log("inside app component constructor")
    this.loggedInUser=userService.currentlyLoggedInUser();
    //console.log(this.loggedInUser)
        if(this.loggedInUser!='true')
          router.navigate(['login'])
  }


  title = 'course-frontend';
 
}
