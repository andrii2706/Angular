import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFilms, IFIlmsFull} from "../interface/IFilms";
import {NewCommand} from "@angular/cli/commands/new-impl";

let page = 1;


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  urlALl = `https://api.themoviedb.org/3/discover/movie?api_key=e310fe0f656d3a88cc1487c87d6c6aa5`
 detailUrl1 = 'https://api.themoviedb.org/3/movie/'
  detailUrl2 = '?api_key=e310fe0f656d3a88cc1487c87d6c6aa5&language=en-US'
  constructor(
    private httpClient: HttpClient
  ) { }
  getALlFilms(Newpage:number):Observable<IFIlmsFull>{
    // console.log(Newpage);
    // if(Newpage){
    return this.httpClient.get<IFIlmsFull>(this.urlALl + `&page=${Newpage}`)
    // } else {
    //   return this.httpClient.get<IFIlmsFull>(this.urlALl)
    // }
  }

  getFilmsByID(id:number) :Observable<IFilms>{
    return this.httpClient.get<IFilms>(this.detailUrl1 +'/'+ id+ this.detailUrl2)
  }
  getPopular():Observable<IFIlmsFull>{
    return this.httpClient.get<IFIlmsFull>(this.urlALl)
  }

}
