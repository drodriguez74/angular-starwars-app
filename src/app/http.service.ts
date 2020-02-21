import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getFilms() {
    return this.http.get('https://swapi.co/api/films/')
  }

  getPeople() {
    return this.http.get('https://swapi.co/api/people/')
  }
}
