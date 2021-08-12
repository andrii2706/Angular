import {Routes} from "@angular/router";
import {HomeComponent} from "../components/home/home/home.component";
import {FilmsComponent} from "../components/films/films.component";

export let routes :Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: FilmsComponent}
]
