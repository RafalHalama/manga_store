import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/common/category';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  constructor(private mangaService: MangaService) {}
  categoryList: Category[] = [];
  ngOnInit() {
    this.mangaService
      .getCategories()
      .subscribe((data) => (this.categoryList = data));
  }
}
