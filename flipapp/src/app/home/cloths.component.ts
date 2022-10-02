import { Component,OnInit } from '@angular/core';
import { ICloth } from '../models/topStrip.model';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HomeService } from '../services/home.service';


@Component({
    selector:'app-cloths',
    templateUrl:'./cloths.component.html',
    styleUrls:['./cloths.component.css']
})

export class ClothsComponent implements OnInit {

    constructor(private homeService:HomeService){}

    cloths:ICloth[]=[]

    ngOnInit(){
      this.homeService.getCloths()
        .subscribe((data:ICloth[]) => this.cloths = data)
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