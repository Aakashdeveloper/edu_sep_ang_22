import { Component } from '@angular/core';
import { ICloth } from '../models/topStrip.model';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
    selector:'app-cloths',
    templateUrl:'./cloths.component.html',
    styleUrls:['./cloths.component.css']
})

export class ClothsComponent {

    cloths:ICloth[]=[
        {
          "_id": "62e01595d27d3d5b00ac4bf1",
          "image": "https://i.ibb.co/Zc2vYBP/989e52b7acbe.jpg",
          "brand": "VERO LIE",
          "description": "Color Block Men Black Track Pants",
          "new_price": 359,
          "old_price": 1599,
          "discount": 77,
          "delivery_type": "Free delivery",
          "hidden_stars": 4.2,
          "item_id": 12
        },
        {
          "_id": "62e01595d27d3d5b00ac4bfd",
          "image": "https://i.ibb.co/bNRPLZv/2c7fd28b6ae0.jpg",
          "brand": "VERO LIE",
          "description": "Color Block Men Black Track Pants",
          "new_price": 359,
          "old_price": 1599,
          "discount": 77,
          "delivery_type": "Free delivery",
          "hidden_stars": 3.8,
          "item_id": 24
        },
        {
          "_id": "62e01595d27d3d5b00ac4c04",
          "image": "https://i.ibb.co/rbm9mZ3/af7ea238d868.jpg",
          "brand": "COBIO MAN",
          "description": "Men Regular Fit Striped Spread Collar Casual Shirt",
          "new_price": 399,
          "old_price": 1599,
          "discount": 75,
          "delivery_type": "Free delivery",
          "hidden_stars": 4.3,
          "item_id": 31
        },
        {
          "_id": "62e01595d27d3d5b00ac4c10",
          "image": "https://i.ibb.co/b2G2Vm4/c06bbea9e94b.jpg",
          "brand": "IDISI CLOTHES",
          "description": "Unstitched Polycotton Shirt Fabric Floral Print",
          "new_price": 249,
          "old_price": 999,
          "discount": 75,
          "delivery_type": "Free delivery",
          "hidden_stars": 3.5,
          "item_id": 43
        },
        {
          "_id": "62e01595d27d3d5b00ac4c13",
          "image": "https://i.ibb.co/Rypw1V4/a6723ff70f97.jpg",
          "brand": "IDISI CLOTHES",
          "description": "Unstitched Polycotton Shirt Fabric Color Block",
          "new_price": 249,
          "old_price": 999,
          "discount": 75,
          "delivery_type": "Free delivery",
          "hidden_stars": 3.8,
          "item_id": 46
        }
    ]

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