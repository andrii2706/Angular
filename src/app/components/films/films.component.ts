import { Component, OnInit } from '@angular/core';
import {IFilms, IFIlmsFull} from "../../interface/IFilms";
import {FilmService} from "../../services/film.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  films: IFilms[]

  constructor(
    private filmsService: FilmService
  ) {
    }

  ngOnInit(): void {
    this.filmsService.getALlFilms().subscribe(value => this.films = value)
    this.filmsService.getALlFilms().subscribe(value => console.log(value))
      }
  }
