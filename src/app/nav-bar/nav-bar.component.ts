import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  loggedInUser:any;

  constructor(private userService:UserServiceService){
      this.loggedInUser=userService.currentlyLoggedInUser();
     
  }

}
