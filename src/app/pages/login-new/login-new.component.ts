import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileServiceService } from '../../services/user-profile-service.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  VkontakteLoginProvider
} from 'angular-6-social-login-v2';
import { LoginTypes } from '../../enums/basic-enums';
import {registrationDto} from '../../models/app.model';
import {AppComponent} from '../../app.component';
@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.component.html',
  styleUrls: ['./login-new.component.css']
})
export class LoginNewComponent implements OnInit {

  constructor(private router: Router, private socialAuthService: AuthService, private loginservice: UserProfileServiceService,
   private appComponent:AppComponent ) { 
    this.appComponent.loginScreen="userProfile";
  }
  public registrationDto: registrationDto = new registrationDto();
  ngOnInit() {
  }

  fun_LogIn() {
   // this.spinner.show();
   debugger;
    this.registrationDto.loginType = LoginTypes.UserProfile.toString();
    this.loginservice.login(this.registrationDto).subscribe(obj => {
      if (obj && obj.length > 0) {
     //   this.spinner.hide();
        this.router.navigate(["userList"]);
      }
      else {
        alert("Invalid UserName or Password")
      //  this.spinner.hide();
      }
    });
  }

  fun_SignUp() {
    this.router.navigate(["registration"]);
  }

  public socialSignIn(socialPlatform: string) {
    debugger;
    // this.spinner.show();
    let socialPlatformProvider;
    if (socialPlatform == "facebook") {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    //  else if (socialPlatform == "linkedin") {
    //   socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    // } else if (socialPlatform == "vkontakte") {
    //   socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
    // }

    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        // this.spinner.show();
        // Now sign-in with userData
        this.registrationDto.Email = userData.email;
        this.registrationDto.Id = userData.id;
        this.registrationDto.IdToken = userData.idToken;
        this.registrationDto.Image = userData.image;
        this.registrationDto.Name = userData.name;
        this.registrationDto.Provider = userData.provider;
        this.registrationDto.Token = userData.token;
        this.registrationDto.FirstName = userData.name;
        this.registrationDto.UserName = userData.email;
        if (userData.provider.toUpperCase() == "FACEBOOK")
          this.registrationDto.loginType = LoginTypes.FaceBook.toString();
        else if (userData.provider.toUpperCase() == "GOOGLE")
          this.registrationDto.loginType = LoginTypes.Google.toString();
        // this.paymentStatus == "CANCEL" ? IntermediateOrderStatus.Canceled.toString() : IntermediateOrderStatus.Declined.toString()
        //EventTicketProcessTypes[EventTicketProcessTypes.Hold];
        this.loginservice.registration(this.registrationDto).subscribe(obj => {
          if (obj && obj.length > 0) {
           // this.spinner.hide();
            this.router.navigate(["home"]);
          }
          else
            alert("failed to register...");
          //this.spinner.hide();
        });
        console.log(socialPlatform + " sign in data : ", userData);
      }
    );
  }

}
