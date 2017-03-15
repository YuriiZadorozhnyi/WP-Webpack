import { Component } from '@angular/core';

import { ProductsService } from '../../services/production.service';
import { BasketService } from '../../services/basket.service';
import { FilterService } from '../../services/filter.service';

import { CapitalizePipe } from "../../pipes/capitalize.pipe";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  public products: Array<any> = [];

  constructor(
      public productsService: ProductsService, 
      private basket: BasketService,
      private filtering: FilterService
  ){}

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe(data => {
        this.products = data;
      });
  }

  addToBasket(item: any) {
    this.basket.addItem(item);
  }

}