import { Component, OnInit } from '@angular/core';
import { LoginFormService } from '../login-form/login.service';
import { Router } from '@angular/router';
import { UserRes } from '../login-form/loginForm.model';

@Component({
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  constructor(
    private loginFormService:LoginFormService,
    private router:Router
  ) { }

  token:string|null = '';
  userInfo:UserRes = {
    "_id":'',
    "name":'',
    "email":'',
    "phone":'',
    "role":'',
    "__v":0
  };

  ngOnInit(): void {
    this.token = localStorage.getItem('Token_Number');
    this.loginFormService.getUserInfo(this.token?this.token:'')
      .subscribe((res:UserRes) =>  this.userInfo = res)
  }

  logoutUser():void{
    localStorage.removeItem('Token_Number');
    localStorage.removeItem('Role_Type');
    this.router.navigate(['/login']);
  }

}
