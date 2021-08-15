import {Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home/home.component";
import {FilmsComponent} from "../components/films/films.component";
import {FilmDetailsComponent} from "../components/film-details/film-details.component";

export let routes :Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies', component: FilmsComponent, children:[
    {path: ':id', component: FilmDetailsComponent}
    ]},
]
