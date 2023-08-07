import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Manga } from '../common/manga';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MangaService {
  private baseUrl = `${environment.apiUrl}` + 'manga';

  constructor(private httpClient: HttpClient) {}

  getMangaList(): Observable<Manga[]> {
    return this.httpClient.get<Manga[]>(this.baseUrl);
  }
}
