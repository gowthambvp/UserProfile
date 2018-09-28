import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from '../app/pages/registration/registration.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { BlogComponent } from '../app/pages/blog/blog.component';
import { LoginNewComponent } from '../app/pages/login-new/login-new.component';
import {UserListComponent} from '../app/pages/user-list/user-list.component';
const routes: Routes = [
  { path: '', component: LoginNewComponent },
  //{ path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'loginNew', component: LoginNewComponent },
  {path:'userList',component:UserListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteModule { }
