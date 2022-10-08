import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ListingService{
    private url = "https://devflipapi.herokuapp.com";

    constructor(private http: HttpClient) {}

    getDataWrtC(catName:string):Observable<any[]>{
        return this.http.get<any[]>(`${this.url}/item/${catName}`)
    }
}