import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'myUpper'
})

export class MyupperPipe implements PipeTransform {
    transform(value: string) {
        let out = value.split(' ')[0].charAt(0).toUpperCase()+value.split(' ')[0].slice(1).toLowerCase()
        let dataArr = value.split(' ')
        dataArr.splice(0,1,out)
        value = dataArr.join().replace(/,/g,' ')
        return value
    }
}