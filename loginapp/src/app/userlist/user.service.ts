import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class UserService {
    private userUrl = "https://developerjwt.herokuapp.com/api/auth/users";

    constructor(private http: HttpClient) {}

    userList():Observable<any[]>{
        return this.http.get<any[]>(this.userUrl)
    }
}