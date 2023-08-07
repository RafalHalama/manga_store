import { Component, OnInit } from '@angular/core';
import { Manga } from 'src/app/common/manga';
import { MangaService } from 'src/app/services/manga.service';

@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css'],
})
export class MangaListComponent implements OnInit {
  mangaList: Manga[] = [];

  constructor(private mangaService: MangaService) {}

  ngOnInit() {
    this.listManga();
  }

  listManga() {
    this.mangaService.getMangaList().subscribe((data) => {
      this.mangaList = data;
    });
  }
}
