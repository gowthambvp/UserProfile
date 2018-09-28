import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRouteModule } from '../app/app.routes';
import { AppComponent } from './app.component';
import { UserProfileServiceService } from '../app/services/user-profile-service.service';
import { ConfigService } from '../app/services/config-service';
import { RegistrationComponent } from './pages/registration/registration.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DataTableModule} from 'angular-6-datatable';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider,
  VkontakteLoginProvider,
} from "angular-6-social-login-v2";
import { LoginComponent } from './pages/login/login.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LoginNewComponent } from './pages/login-new/login-new.component';
import { UserListComponent } from './pages/user-list/user-list.component';


var facebook_AppId = "";
var google_ClientId = "";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider(facebook_AppId)//Your-Facebook-app-id
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider(google_ClientId) //Your-Google-Client-Id
      }
    ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    BlogComponent,
    LoginNewComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    DataTableModule
  ],
  providers: [
    ConfigService,
    {
      provide: APP_INITIALIZER, useFactory: (config: ConfigService) => () =>
        config.getConfig().then(obj => {
          if (obj) {
            let data = <any>(obj);
            facebook_AppId = data.facebook.App_Id;
            google_ClientId = data.google.Client_Id;
          }
        }
        ), deps: [ConfigService], multi: true
    },
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    UserProfileServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
