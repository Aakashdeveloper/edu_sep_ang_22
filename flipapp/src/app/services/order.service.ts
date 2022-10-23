import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()


export class OrderService {

    private OrderUrl = "http://localhost:7600/orders";

    constructor(private http: HttpClient) {}

    placeOrder(order:any[]):Observable<any[]>{
        return this.http.post<any[]>(this.OrderUrl,order)
    }

    getOrder(email:string):Observable<any[]>{
        return this.http.get<any[]>(`${this.OrderUrl}?email=${email}`)
    }

}