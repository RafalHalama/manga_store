import { Component, OnInit } from '@angular/core';
import { Manga } from 'src/app/common/manga';
import { MangaService } from 'src/app/services/manga.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription, combineLatest, switchMap } from 'rxjs';
@Component({
  selector: 'app-manga-list',
  templateUrl: './manga-list.component.html',
  styleUrls: ['./manga-list.component.css'],
})
export class MangaListComponent implements OnInit {
  mangaList: Manga[] = [];
  subscription: Subscription | null = null;
  itemsPerPage: number = 6;
  currentPage: number = 1;
  paginationNum: number[] = [1];
  constructor(
    private mangaService: MangaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  getPaginatedMangaList(): Manga[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.mangaList.slice(startIndex, endIndex);
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;

    this.listManga();
  }
  ngOnInit() {
    this.listManga();
  }
  get totalPages(): number[] {
    let pages = new Array<number>();

    for (let i = 0; i < this.mangaList.length; i += 6) {
      const pageNumber = Math.floor(i / 6) + 1;
      pages.push(pageNumber);
    }
    return pages;
  }
  listManga() {
    this.subscription = combineLatest([
      this.route.params,
      this.mangaService.getMangaList(),
    ])
      .pipe(
        switchMap(([params, data]) => {
          if (params['id']) {
            this.mangaList = data.filter(
              (item) => item.category.id.toLocaleString() === params['id']
            );
          } else if (params['value']) {
            this.mangaList = data.filter((item) =>
              item.title.includes(params['value'].toLocaleString())
            );
          } else {
            this.mangaList = data;
          }
          console.log(params['id']);
          this.paginationNum = this.totalPages;
          this.mangaList = this.getPaginatedMangaList();
          return [];
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  showMangaDetail(manga: Manga) {
    this.router.navigate(['/manga', manga.id]);
  }
}
