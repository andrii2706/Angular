import {Component, Input, OnInit} from '@angular/core';
import {IFilms} from "../../../interface/IFilms";
import {FilmService} from "../../../services/film.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films: IFilms []
  constructor(
    private filmsService: FilmService,
  ) { }

  ngOnInit(): void {
    this.filmsService.getPopular().subscribe(value => this.films = value.results)
  }

}
