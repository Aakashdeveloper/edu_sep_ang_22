import { Component,OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../services/home.service';
import { IMobile } from '../models/topStrip.model'

@Component({
    selector: 'app-mobile',
    templateUrl: './mobile.component.html',
    styleUrls:['./cloths.component.css']

})


export class MobileComponent implements OnInit{

    mobiles:IMobile[]=[]

    constructor(private homeService:HomeService){}

    ngOnInit(){
      this.homeService.getMobiles()
        .subscribe((data:IMobile[]) => this.mobiles = data)
    }

    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
          0: {
            items: 1
          },
          400: {
            items: 2
          },
          740: {
            items: 3
          },
          940: {
            items: 4
          }
        },
        nav: true
      }
}