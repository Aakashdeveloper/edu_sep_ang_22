import { Component,OnInit } from '@angular/core';
import { UserRes } from '../models/loginForm.model';
import { LoginFormService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})

export class HeaderComponent implements OnInit{
    constructor(private loginFormService:LoginFormService,
        private router: Router,
        private route:ActivatedRoute) {}
    
    token:string|null = '';
    userInfo:UserRes = {
        "_id":'',
        "name":"",
        "email":"",
        "phone":"",
        "role":"",
        "__v":0,
    }

    loginStatus:boolean = false;

    ngOnInit(){
        this.token = localStorage.getItem('Token_Number');
        this.loginFormService.getUserInfo(this.token?this.token:'')
        .subscribe((res:UserRes) => {
            this.userInfo = res;
            this.loginStatus = true
        })
        console.log(">>>",this.token)

    }

    logoutUser():void{
        localStorage.removeItem('Token_Number');
        sessionStorage.removeItem('userResponse');
        localStorage.removeItem('Role_Type');
        this.loginStatus = false;
        this.router.navigate(['/']);
        window.location.reload()
    }
}
