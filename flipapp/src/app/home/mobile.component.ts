import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-mobile',
    templateUrl: './mobile.component.html',
    styleUrls:['./cloths.component.css']

})


export class MobileComponent{
    mobiles:any[]=[
        {
          "_id": "62ea348d2a64068ae73eb2d9",
          "image": "https://i.ibb.co/dcRmhTd/8f3c87d739b0.jpg",
          "description": "realme C11 2021 (Cool Grey, 32 GB)",
          "stars": 4.4,
          "ratings": "2,02,351 Ratings ",
          "reviews": " 8,988 Reviews",
          "more_data": "2 GB RAM | 32 GB ROM | Expandable Upto 256 GB",
          "more_data2": "16.51 cm (6.5 inch) HD+ Display",
          "more_data3": "8MP Rear Camera | 5MP Front Camera",
          "more_data4": "5000 mAh Battery",
          "more_data5": "Octa-core Processor",
          "more_data6": "1 Year Warranty for Mobile and 6 Months for Accessories",
          "new_price": 7499,
          "old_price": 7999,
          "discount": 6,
          "delivery_type": "Free delivery",
          "offer": "₹6,750",
          "offer2": " Off on Exchange",
          "hidden_stars": 4.4,
          "item_id": 2
        },
        {
          "_id": "62ea348d2a64068ae73eb2df",
          "image": "https://i.ibb.co/WWHGS0n/04055d5a6a69.jpg",
          "description": "I-Plus I2",
          "stars": 3.1,
          "ratings": "36 Ratings ",
          "reviews": " 2 Reviews",
          "more_data": "32 MB RAM | 32 MB ROM",
          "more_data2": "4.57 cm (1.8 inch) VGA Display",
          "more_data3": "1.3MP Rear Camera",
          "more_data4": "1000 mAh Battery",
          "more_data5": "1 Year Manufacturer warranty",
          "new_price": 6499,
          "delivery_type": "Free delivery",
          "hidden_stars": 3.1,
          "item_id": 8,
          "old_price": 9099,
          "discount": 29
        },
        {
          "_id": "62ea348d2a64068ae73eb2e0",
          "image": "https://i.ibb.co/bmmQZMq/4686f715fa69.jpg",
          "description": "realme C31 (Light Silver, 32 GB)",
          "stars": 4.5,
          "ratings": "8,995 Ratings ",
          "reviews": " 373 Reviews",
          "more_data": "3 GB RAM | 32 GB ROM | Expandable Upto 1 TB",
          "more_data2": "16.56 cm (6.52 inch) HD Display",
          "more_data3": "13MP + 2MP + 0.3MP | 5MP Front Camera",
          "more_data4": "5000 mAh Battery",
          "more_data5": "Unisoc T612 Processor",
          "more_data6": "1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories",
          "new_price": 9299,
          "old_price": 11999,
          "discount": 23,
          "delivery_type": "Free delivery",
          "offer": "₹8,750",
          "offer2": " Off on Exchange",
          "hidden_stars": 4.5,
          "item_id": 9
        },
        {
          "_id": "62ea348d2a64068ae73eb2dd",
          "image": "https://i.ibb.co/hVNsvxQ/3159095e7184.jpg",
          "description": "realme C11 2021 (Cool Blue, 64 GB)",
          "stars": 4.3,
          "ratings": "1,75,314 Ratings ",
          "reviews": " 9,799 Reviews",
          "more_data": "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB",
          "more_data2": "16.51 cm (6.5 inch) HD+ Display",
          "more_data3": "8MP Rear Camera | 5MP Front Camera",
          "more_data4": "5000 mAh Battery",
          "more_data5": "Octa-core Processor",
          "more_data6": "1 Year Warranty for Mobile and 6 Months for Accessories",
          "new_price": 8999,
          "old_price": 9999,
          "discount": 10,
          "delivery_type": "Free delivery",
          "offer": "₹8,250",
          "offer2": " Off on Exchange",
          "hidden_stars": 4.3,
          "item_id": 6
        },
        {
          "_id": "62ea348d2a64068ae73eb2de",
          "image": "https://i.ibb.co/dcRmhTd/8f3c87d739b0.jpg",
          "description": "realme C11 2021 (Cool Grey, 64 GB)",
          "stars": 4.3,
          "ratings": "1,75,314 Ratings ",
          "reviews": " 9,799 Reviews",
          "more_data": "4 GB RAM | 64 GB ROM | Expandable Upto 256 GB",
          "more_data2": "16.51 cm (6.5 inch) HD+ Display",
          "more_data3": "8MP Rear Camera | 5MP Front Camera",
          "more_data4": "5000 mAh Battery",
          "more_data5": "Octa-core Processor",
          "more_data6": "1 Year Warranty for Mobile and 6 Months for Accessories",
          "new_price": 8999,
          "old_price": 9999,
          "discount": 10,
          "delivery_type": "Free delivery",
          "offer": "₹8,250",
          "offer2": " Off on Exchange",
          "hidden_stars": 4.3,
          "item_id": 7
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