import { Component } from '@angular/core';
import { ITop } from '../models/topStrip.model'

@Component({
    selector:'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent{
    heading:string = "Top Strip";
    price:number = 200;
    topData:ITop[] = [
        {
          "_id": "6304f34a4fda6200b4ebe0e7",
          "id": 1,
          "name": "Top Offers",
          "imgUrl": "https://i.ibb.co/72tFJDD/top-offers.png"
        },
        {
          "_id": "6304f34a4fda6200b4ebe0e8",
          "id": 2,
          "name": "mobile",
          "imgUrl": "https://i.ibb.co/Jptfv9B/mobiles.png"
        },
        {
          "_id": "6304f34a4fda6200b4ebe0e9",
          "id": 3,
          "name": "cloths",
          "imgUrl": "https://i.ibb.co/NW23z09/fashion.png"
        },
        {
          "_id": "6304f34a4fda6200b4ebe0ea",
          "id": 4,
          "name": "Electronics",
          "imgUrl": "https://i.ibb.co/JtxLjXB/electronics.png"
        },
        {
          "_id": "6304f34a4fda6200b4ebe0eb",
          "id": 5,
          "name": "Home",
          "imgUrl": "https://i.ibb.co/3zh4qsF/home.jpg"
        },
        {
          "_id": "6304f34a4fda6200b4ebe0ec",
          "id": 6,
          "name": "Appliances",
          "imgUrl": "https://i.ibb.co/qFzmCwd/appliances.png"
        },
        {
          "_id": "6304f34a4fda6200b4ebe0ed",
          "id": 7,
          "name": "Travel",
          "imgUrl": "https://i.ibb.co/X2Tp0Bd/travel.png"
        },
        {
          "_id": "6304f34a4fda6200b4ebe0ee",
          "id": 8,
          "name": "Toys",
          "imgUrl": "https://i.ibb.co/64kY2Cd/toys.png"
        },
        {
          "_id": "6304f34a4fda6200b4ebe0ef",
          "id": 9,
          "name": "Grocery",
          "imgUrl": "https://i.ibb.co/PZvWQpp/grocery.png"
        }
      ]

}