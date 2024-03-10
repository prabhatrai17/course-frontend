import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  userLogged:any;

  constructor(private router:Router,private userService:UserServiceService){
    this.userLogged= userService.currentlyLoggedInUser()
    this.userLogged=JSON.parse(this.userLogged)
   if(this.userLogged!=false){
    console.log(this.userLogged);
   }

  }

  

  handleLogout(){
    console.log("logout")
    if(localStorage.getItem('loggedinuser')!='false') localStorage.removeItem('loggedinuser')
    this.router.navigate(['login'])
  }

}
