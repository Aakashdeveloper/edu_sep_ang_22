import { Component } from '@angular/core';
import { ILogin } from './loginForm.model';
import { NgForm } from '@angular/forms';
import { LoginFormService } from './login.service';
import { LoginRes, UserRes } from './loginForm.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  loginError:string='';

  constructor(
    private loginFormService:LoginFormService,
    private router:Router
  ) { }

  myEmployee = new ILogin('','')

  submitForm(Form:NgForm):void{
    this.loginFormService.loginUser(Form.value)
      .subscribe((res:LoginRes) => {
          this.loginError = '';
          this.loginFormService.getUserInfo(res['token'])
          .subscribe((response:UserRes) => (this.validateUser(response['role'])))
      },
        (err:any[]) => {
          this.loginError = "Please Enter Correct Details"
        }
      )
  }

  validateUser(roleType:string):void{
    localStorage.setItem('Role_Type',roleType)
    this.router.navigate(['/profile'])
  }



}
