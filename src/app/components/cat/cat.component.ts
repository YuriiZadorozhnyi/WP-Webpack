import { Component, OnInit } from '@angular/core';

import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  categories: Array<any> = [];

  constructor (private categoryService : CategoryService) {}

  ngOnInit() {
    this.categoryService.getCategories()
        .subscribe(data => {
          this.categories = data;
        });
  }

}
