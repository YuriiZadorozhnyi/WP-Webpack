import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterMinPrice'
})
@Injectable()
export class FilterMinPricePipe implements PipeTransform {

    transform(items: any[], args: any[]): any {
        if (!args){
            return items;
        }
        return items.filter(item => item.price >= args);
    }

}
