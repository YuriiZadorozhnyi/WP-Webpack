import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterMaxPrice'
})
@Injectable()
export class FilterMaxPricePipe implements PipeTransform {

    transform(items: any[], args: any[]): any {
        if (!args){
            return items;
        }
        return items.filter(item => item.price <= args);
    }

}
