import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFilms, IFIlmsFull} from "../interface/IFilms";

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  url = 'https://api.themoviedb.org/3/movie/'
  url2 = '/lists?api_key=e310fe0f656d3a88cc1487c87d6c6aa5&language=en-US&page=1'
  urlALl = 'https://api.themoviedb.org/3/discover/movie?api_key=e310fe0f656d3a88cc1487c87d6c6aa5'
  constructor(
    private httpClient: HttpClient
  ) { }
  getALlFilms():Observable<IFIlmsFull>{
    return this.httpClient.get<IFIlmsFull>(this.urlALl)
  }
  // getFilmsByID(id:number) :Observable<IFilms>{
  //   return this.httpClient.get<IFilms>(this.url+ id +this.url2)
  // }

}
