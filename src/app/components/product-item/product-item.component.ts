import { Component, Input, Output, EventEmitter } from '@angular/core';

import { CapitalizePipe } from "../../pipes/capitalize.pipe"; 

import { ProductTemplate } from '../../types/product-template.interface';

@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {

  @Input() public product : ProductTemplate;         //   interface added
  @Output() addToCart = new EventEmitter();

  addToBasket(event: Event) {  
    event.preventDefault();
    event.stopPropagation();
    this.addToCart.emit();
  }

}
