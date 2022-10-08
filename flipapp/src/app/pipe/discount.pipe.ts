import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'discountPipe'
})

export class DiscountPipe implements PipeTransform {
    transform(value: number){
            value = value-10
            return value
        }
}