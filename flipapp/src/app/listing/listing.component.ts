import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../services/listing.service'

@Component({
    templateUrl:'./listing.component.html',
    styleUrls:['./listing.component.css']
})

export class ListingComponent implements OnInit{

    itemType:string = 'List';
    catData:any[]=[];
    // offertill = new Date()

    constructor(private route:ActivatedRoute,
                private listingService:ListingService){}

    ngOnInit():void{
        this.itemType = this.route.snapshot.params['item']
        // console.log(">>>",this.itemType)
        this.listingService.getDataWrtC(this.itemType)
            .subscribe((data:any[]) => this.catData = data)
    }
}