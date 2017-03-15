import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { ProductTemplate } from '../types/product-template.interface';

@Injectable()
export class ProductsService {

    public products: Array<ProductTemplate> = [];

    constructor(public http: Http) {}

    getProducts(): Observable<Array<ProductTemplate>> {
        return this.http.get('/json/products.json')
            .map(response => response.json())
    }

    getProduct(id : any): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('/json/products.json')
                .map(response => response.json())
                .subscribe(data => {
                    let result = data.filter((el : any) => el.id == id);
                    resolve(result[0]);
                }, () => {
                    reject();
                });
        });
    }

}