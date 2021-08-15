import {Component, Input, OnInit} from '@angular/core';
import {IFilms} from "../../../../interface/IFilms";

@Component({
  selector: 'app-home-info',
  templateUrl: './home-info.component.html',
  styleUrls: ['./home-info.component.scss']
})
export class HomeInfoComponent implements OnInit {
@Input()
film :IFilms
  constructor() { }

  ngOnInit(): void {
  }

}
