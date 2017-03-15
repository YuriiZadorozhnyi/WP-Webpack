import { Component } from '@angular/core';

import { ProductsService } from '../../services/production.service';
import { BasketService } from '../../services/basket.service';

import { CapitalizePipe } from "../../pipes/capitalize.pipe";

@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent {

  public products: Array<any> = [];

  constructor(public productsService: ProductsService, private basket: BasketService){}

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