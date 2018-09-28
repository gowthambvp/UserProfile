import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { registrationDto } from '../../models/app.model';
import { UserProfileServiceService } from '../../services/user-profile-service.service';
import { LoginTypes } from '../../enums/basic-enums';
//import { NgxSpinnerService } from 'ngx-spinner';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registrationDto: registrationDto;
  registerForm: FormGroup;
  constructor(public userProfileService: UserProfileServiceService, public router: Router, private appComponent: AppComponent) {
    this.registrationDto = new registrationDto();
    this.appComponent.loginScreen = "userProfile";
  }

  ngOnInit() {
  }
  fun_SignUp() {
    debugger
    // this.spinner.show();
    this.registrationDto.loginType = LoginTypes.UserProfile.toString();
    // this.userProfileService.userExist(this.registrationDto).subscribe(user => {
    //   if (user && user.length > 0) {
    //     alert("User already exist...");
    //    // this.spinner.hide();
    //   }
    //   else {
    this.userProfileService.registration(this.registrationDto).subscribe(obj => {
      if (obj && obj.length > 0) {
        // this.spinner.hide();
        this.router.navigate(["loginNew"]);
      }
      else {
        alert("Something went wrong...");
        //this.spinner.hide();
      }
    });
    //}
    //});
  }
}
