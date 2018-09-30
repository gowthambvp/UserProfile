import { Component, OnInit } from '@angular/core';
import { UserProfileServiceService } from '../../services/user-profile-service.service';
import { AppComponent } from '../../app.component';
import { registrationDto } from '../../models/app.model';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public data: any
  public userData:any;
  constructor(private userProfileService: UserProfileServiceService, private appComponent: AppComponent) {
    this.appComponent.loginScreen = "";
  }

  ngOnInit() {
    // this.data = [{ 'name': 'Anil', 'anil.singh581@gmail.com': 'ssd', 'age': '34', 'city': 'Noida, UP, India' },
    // { 'name': 'Anil', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'Sunil', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'Alok', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'Tinku', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'XYZ', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'asas', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'erer', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' },
    // { 'name': 'jhjh', 'email': 'anil.singh581@gmail.com', 'age': '34', 'city': 'Noida' }
    // ]
    this.getUserList();
  }
  /**
   * getUserList
   */
  public getUserList() {
    this.userProfileService.getUserList().then(p => {
      debugger;
      this.data = p;
    })
  }
  /**
   * editUser
   */
  public editUser(editUserData) {
    this.userProfileService.updateUser(editUserData).then(p => {
      alert("Update user successfully");
    });
  }
  /**
   * getUserById
   */
  public editUserById(id) {
    debugger;
    this.userProfileService.editUserById(id).then(p => {
      this.userData = p;
      this.editUser( this.userData);
    });
  }

}
