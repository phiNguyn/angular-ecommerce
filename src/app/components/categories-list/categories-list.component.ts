
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/service/category.service';
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']

})
export class CategoriesListComponent implements OnInit {
  categories!: Category[]
  constructor(private categoryService: CategoryService) { }
 
  ngOnInit() {
    return this.categoryService.getAll().subscribe(data => {
      
      this.categories = data as Category[];
      console.log(this.categories);
    })
  }

}

