import {Component, Input, OnInit} from '@angular/core';
import {IFilms, IFIlmsFull} from "../../interface/IFilms";
import {ActivatedRoute, Router} from "@angular/router";
import {FilmService} from "../../services/film.service";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input()
  film: IFilms

  constructor(
  ) {
  }

  ngOnInit(): void {
  }

}
