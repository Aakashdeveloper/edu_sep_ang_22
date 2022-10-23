import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './view-order.component.html'
})
export class ViewOrderComponent implements OnInit {

  constructor(
    private orderService:OrderService,
    private route: ActivatedRoute
  ) { }

  orders:any[] = []
  email = 'kritika@gmail.com'

  ngOnInit(): void {

    this.orderService.getOrder(this.email)
        .subscribe((data:any[]) => {
          this.orders= data
        })

  }

}
