import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable()

export class FormService{
    private EmpUrl = "http://localhost:8300/employee";

    constructor(private http: HttpClient){}

    postEmp(employee:any[]): Observable<any[]>{
        return this.http.post<any[]>(this.EmpUrl,employee)
    }
}