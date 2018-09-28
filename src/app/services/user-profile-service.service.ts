import { Injectable } from '@angular/core';
import { registrationDto } from '../models/app.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class UserProfileServiceService {
  result: any;
  // public registrationDto:registrationDto;
  constructor(private http: HttpClient) { }

  login(registrationDto): Observable<any> {
    const uri = 'http://localhost:3000/registerRoutes/login';
    return this.http.post(uri, registrationDto);
  }

  registration(registrationDto):Observable<any>{
    debugger;
    const uri = 'http://localhost:3000/registerRoutes/registration';
    return this.http.post(uri, registrationDto);
  }

  userExist(registrationDto):Observable<any>{
    debugger;
    const uri = 'http://localhost:3000/registerRoutes/userExist';
    return this.http.post(uri, registrationDto);
  }
  getUserList(){
    const uri = 'http://localhost:3000/registerRoutes/userList';
    return this.http.get(uri).toPromise().then(p=>{
      return p;
    });
  }
}
