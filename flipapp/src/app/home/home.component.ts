import { Component,OnInit } from '@angular/core';
import { ITop } from '../models/topStrip.model';
import { HomeService } from '../services/home.service';

@Component({
    selector:'app-home',
    templateUrl: './home.component.html',
    styleUrls:['./home.component.css']
})

export class HomeComponent implements OnInit{
   
    constructor(private homeService:HomeService){
      console.log("<<<<in constructor")
    }
    topData:ITop[] = []

    ngOnInit(): void {
      this.homeService.getTopStrip()
      .subscribe((data:ITop[]) => this.topData = data)
  
    }

}


// heading:string = "Top Strip";
// price:number = 200;