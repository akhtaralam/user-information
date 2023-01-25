import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private user_info_api = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.user_info_api);
  }
}
