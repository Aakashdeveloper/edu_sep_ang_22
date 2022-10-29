import { Component } from '@angular/core';
import { IOrder } from './place.model';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DetailService } from '../services/details.service';
import { OrderService } from '../services/order.service';

@Component({
    templateUrl: './placeOrder.component.html'
})

export class PlaceOrderComponent{

    catName: string|null = '';
    id: number = 0;
    orderid: number = Math.floor(Math.random()* 100000)
    price: number = 0;
    prodName: string = ''
    url:string = ''


    constructor(private route:ActivatedRoute,
        private detailService:DetailService,
        private orderService:OrderService) { }

    userInfo:string|null= sessionStorage.getItem('userResponse');

    name = this.userInfo?this.userInfo.split(',')[1]:""
    email = this.userInfo?this.userInfo.split(',')[2]:""
    phone = this.userInfo?this.userInfo.split(',')[3]:""
    
    myOrder = new IOrder(this.name,this.email,'Hno 76 Delhi West',Number(this.phone),this.price,this.orderid,this.prodName)

    ngOnInit(): void {
            this.catName = this.route.snapshot.params['catName'];
            this.id = Number(this.route.snapshot.params['id']);
            this.detailService.getDetails(this.catName,this.id)
              .subscribe((data:any[]) => {
                  this.price = data[0].new_price;
                  this.prodName = data[0].description
              } )
    }

    submitForm(Form:NgForm):void{
        console.log(Form.value)
        this.orderService.placeOrder(Form.value)
            .subscribe((res:any[]) => {console.log(`Form Submitted`)})

        this.url = 'http://localhost:4000/paynow?amount='+Form.value.cost+'&orderId='+Form.value.id+'&email='+Form.value.email+'&phone='+Form.value.phone;
    }
    
}