import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../models/userLogin';
import { UserSignup } from '../models/userSignup';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 private baseUrl="http://localhost:8080";



  constructor(private httpClient:HttpClient,private router:Router) { }

  // getAllUsers():User[]{
  // 
  // }

  // getUserById(id:number):User|undefined{
  //   
  // }

  getUserById(userId:Number):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}/user/${userId}`);
  }

  login(userLogin:UserLogin):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/login`,userLogin);
  }
  signup(userSignup:UserSignup):Observable<any>{
    return this.httpClient.post(`${this.baseUrl}/signup`,userSignup);
  }

  currentlyLoggedInUser():any{
    console.log("checking currently loggedin user");
    const loggedUser = localStorage.getItem('loggedinuser');
    console.log("user is ");
    console.log(loggedUser);
    if(loggedUser!='false' || loggedUser!=undefined || loggedUser!=null) return loggedUser;

    else{ 
      console.log("no user logged in")
      this.router.navigate(['login'])
  }

  }


}
