import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmComponent } from './components/film/film.component';
import { FilmsComponent } from './components/films/films.component';
import {HttpClientModule} from "@angular/common/http";
import {FilmService} from "./services/film.service";
import { WrapComponent } from './components/wrap/wrap/wrap.component';
import { HomeComponent } from './components/home/home/home.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routes/basic.routes";
import {NgxPaginationModule} from "ngx-pagination";
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { HomeInfoComponent } from './components/home/home/home-info/home-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    FilmsComponent,
    WrapComponent,
    HomeComponent,
    FilmDetailsComponent,
    HomeInfoComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
