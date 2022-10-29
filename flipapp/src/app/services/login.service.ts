import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRes, UserRes } from '../models/loginForm.model';

@Injectable()

export class LoginFormService{
    private loginUrl = "https://developerjwt.herokuapp.com/api/auth"

    constructor(private http: HttpClient){}

    loginUser(user:LoginRes):Observable<LoginRes>{
        return this.http.post<LoginRes>(`${this.loginUrl}/login`,user)
    }

    getUserInfo(token:string):Observable<UserRes>{
        localStorage.setItem('Token_Number',token)
        return this.http.get<UserRes>(`${this.loginUrl}/userinfo`,
                                    {headers:{'x-access-token':token}})
    }
}