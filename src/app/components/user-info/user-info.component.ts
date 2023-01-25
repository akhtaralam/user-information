import { Component, OnInit } from '@angular/core';
import { UserInfoService } from 'src/app/services/user-info.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userInfo: any;
  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userInfoService.getUsers().subscribe(res => {
      this.userInfo = res;
      console.log('user Details', this.userInfo);
    });
  }

}