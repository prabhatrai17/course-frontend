import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
//import {MatInputModule} from '@angular/material'
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FilterAndViewRowComponent } from './filter-and-view-row/filter-and-view-row.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { EnrolledcoursesComponent } from './enrolledcourses/enrolledcourses.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting-c/setting.component';
import { CartComponent } from './cart/cart.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import {MatExpansionModule} from '@angular/material/expansion';









@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    ForgetpasswordComponent,
    UserDashboardComponent,
    FilterAndViewRowComponent,
    SideBarComponent,
    NavBarComponent,
    EnrolledcoursesComponent,
    ProfileComponent,
    SettingComponent,
    CartComponent,
    AllCoursesComponent,
    ViewcourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,
    MatToolbarModule,
   MatSidenavModule,
   MatMenuModule,
   MatListModule,
   MatProgressBarModule,
   MatTabsModule,
   MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
