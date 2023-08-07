import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MangaListComponent } from './components/manga-list/manga-list.component';
import { MangaService } from './services/manga.service';

@NgModule({
  declarations: [AppComponent, MangaListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [MangaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
