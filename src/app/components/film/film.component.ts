import {Component, Input, OnInit} from '@angular/core';
import {IFilms, IFIlmsFull} from "../../interface/IFilms";
import {ActivatedRoute, Router} from "@angular/router";
import {FilmService} from "../../services/film.service";
import {config} from "rxjs";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input()
  film: IFilms
  // imageBaseUrl: string = config[''];

  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {

  }

  ngOnInit(): void {
  }
  goToTheInfo(){
  this.router.navigate([this.film.id],{relativeTo: this.activatedRoute})
  }
}
