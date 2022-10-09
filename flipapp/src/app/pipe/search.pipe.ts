import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'searchFilter'
})

export class ProdSearchPipe implements PipeTransform {
    transform(value: any[], userInput:string) {
        userInput = userInput?userInput.toLowerCase():'';
        return userInput ? value.filter((data) => 
            data.description.toLowerCase().indexOf(userInput) > -1
        ):value
    }
}