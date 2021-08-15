import {Component, Input, OnInit} from '@angular/core';
import {IFilms} from "../../../interface/IFilms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-wrap',
  templateUrl: './wrap.component.html',
  styleUrls: ['./wrap.component.scss']
})
export class WrapComponent implements OnInit {


  // films: IFilms[]

  constructor(
    // private  router:Router,
    // private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }
  // navigatetoFilms():void{
  //   this.router.navigate([this.films],{relativeTo: this.activatedRouter})
  // }
}
