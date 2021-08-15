import { Component, OnInit } from '@angular/core';
import {IFilms} from "../../interface/IFilms";
import {ActivatedRoute, Router} from "@angular/router";
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {

  film: IFilms

  constructor(
    private activatedRoute:ActivatedRoute,
    private filmService:FilmService
  ){
    this.activatedRoute.params.subscribe(({id})=>{
      this.filmService.getFilmsByID(id).subscribe(value => this.film = value)
    })
  }

  ngOnInit(): void {
  }
  back(){
    history.back()
  }
}
