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
  page: number;

  constructor(
    private filmsService: FilmService,
    // private router:Router
  ) {
    }

  ngOnInit(): void {
    this.getFilms(1)

    // this.filmsService.getALlFilms().subscribe(value => console.log(value))

  }

  getFilms(Newpage: number):void{
  this.filmsService.getALlFilms(Newpage).subscribe(value => {
    // console.log(value);
    this.films = value.results })
  }
  navigateTo(Newpage: number) {
    this.page = Newpage
    // console.log(Newpage);
  this.getFilms(Newpage)
    // this.router.navigate([`?page=${this.page}`])
  }
}
