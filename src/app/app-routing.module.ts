import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
// import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EnrolledcoursesComponent } from './enrolledcourses/enrolledcourses.component';
import { SettingComponent } from './setting-c/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
{ path: 'signup', component: SignupComponent },
// { path: 'allCourses', component: AllCoursesComponent },
{
  path: 'dashboard', component: UserDashboardComponent, children: [
    {
      path: 'allCourses', component: AllCoursesComponent
    },
    { path: 'viewcourse', component: ViewcourseComponent },
    { path: 'enrolledCourses', component: EnrolledcoursesComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'setting', component: SettingComponent },
  ]
},
{ path: 'cart', component: CartComponent },

{ path: 'forgetpassword', component: ForgetpasswordComponent },
{ path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
