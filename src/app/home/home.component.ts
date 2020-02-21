import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  films: Object;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getFilms().subscribe(data => {
      this.films = data['results'];
      console.log(this.films);
    })
  }
}
