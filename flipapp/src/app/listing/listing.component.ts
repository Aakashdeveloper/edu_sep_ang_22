import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../services/listing.service'

@Component({
    templateUrl:'./listing.component.html',
    styleUrls:['./listing.component.css']
})

export class ListingComponent implements OnInit{

    itemType:string = '';
    catData:any[]=[];
    userInput:string=''
    filterText:string = 'Rating Filter'
    // offertill = new Date()

    constructor(private route:ActivatedRoute,
                private listingService:ListingService){}

    ngOnInit():void{
        this.itemType = this.route.snapshot.params['item']
        // console.log(">>>",this.itemType)
        this.listingService.getDataWrtC(this.itemType)
            .subscribe((data:any[]) => this.catData = data)
    }

    dataReceive(ratingVal:string){
        console.log("innn listing>>>",ratingVal)
        this.listingService.getDataWrtR(ratingVal,this.itemType)
            .subscribe((data:any[]) => {
                this.catData = data
            })
    }

    costReceive(cost:string){
        let lcost = Number(cost.split('-')[0])
        let hcost = Number(cost.split('-')[1])
        this.listingService.getDataWrtCost(lcost,hcost,this.itemType)
            .subscribe((data:any[]) => {
                this.catData = data
            })
    }

    
}