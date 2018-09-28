import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promise } from 'q';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get("/src/config.json").toPromise();
  }
}
