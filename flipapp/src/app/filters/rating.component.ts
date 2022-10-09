import { Component,Input,Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-rating-filter',
    templateUrl:'./rating.component.html'
})

export class RatingFilterComponent{
    @Input() filterName:string='';
    ratingVal:string='';

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onRatingSelect():void{
        this.ratingClicked.emit(this.ratingVal)
    }
}