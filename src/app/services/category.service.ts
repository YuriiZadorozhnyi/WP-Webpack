import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

/*    public categories: Array<any> = [];   */

    constructor(public http: Http){}

    getCategories(): Observable<any[]>{
        return this.http.get('/json/categories.json')
            .map(response => response.json())
    }
    
}