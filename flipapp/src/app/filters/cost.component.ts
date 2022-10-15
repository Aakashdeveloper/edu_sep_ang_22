import { Component,Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-cost-filter',
    templateUrl:'./cost.component.html'
})

export class CostFilterComponent{
    costVal:string='';

    @Output() costClicked: EventEmitter<string> = new EventEmitter<string>();

    onCostSelect():void{
        this.costClicked.emit(this.costVal)
    }
}