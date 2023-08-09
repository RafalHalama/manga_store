import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manga } from '../common/manga';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../common/category';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private httpClient: HttpClient) {}

  getMangaList(): Observable<Manga[]> {
    return this.httpClient.get<Manga[]>(this.baseUrl + 'manga');
  }

  getMangaById(id: number): Observable<Manga> {
    return this.httpClient.get<Manga>(this.baseUrl + 'manga/' + id);
  }

  getCategories(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.baseUrl + 'categories');
  }
}
