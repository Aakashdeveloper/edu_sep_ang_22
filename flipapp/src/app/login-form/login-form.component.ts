import { Component } from '@angular/core';
import { ILogin } from '../models/loginForm.model';
import { NgForm } from '@angular/forms';
import { LoginFormService } from '../services/login.service';
import { LoginRes, UserRes } from '../models/loginForm.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginError:string='';

  constructor(
    private loginFormService:LoginFormService,
    private router:Router
  ) { }

  myEmployee = new ILogin('kritika@gmail.com','12345678')

  submitForm(Form:NgForm):void{
    this.loginFormService.loginUser(Form.value)
      .subscribe((res:LoginRes) => {
          this.loginError = '';
          this.loginFormService.getUserInfo(res['token'])
          .subscribe((response:UserRes) => (this.validateUser(response['role'],response['name'],response['email'],response['phone'])))
      },
        (err:any[]) => {
          this.loginError = "Please Enter Correct Details"
        }
      )
  }

  validateUser(roleType:string,name:string,email:string,phone:string):void{
    let userResponse = `${roleType},${name},${email},${phone}`
    sessionStorage.setItem('userResponse',userResponse)
    localStorage.setItem('Role_Type',roleType)
    this.router.navigate(['/'])
  }



}
