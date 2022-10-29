import { Component } from '@angular/core';
import { IRegister } from '../models/registerForm.model';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/registerForm.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent{

 
  constructor(
    private registerService:RegisterService,
    private router:Router
  ) { }

  myEmployee = new IRegister('','','','');

  submitForm(Form:NgForm):void{
    this.registerService.postEmp(Form.value)
      .subscribe((res:any[]) => {console.log('Form Submitted')})
    this.router.navigate(['/login'],{
      queryParams:{
        msg:"Registration Succesfull"
      }
    })
  }

}
