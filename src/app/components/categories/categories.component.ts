import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-cat',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Array<any> = [];

  constructor (private categoryService : CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories()
        .subscribe(data => {
          this.categories = data;
        });
  }

}
