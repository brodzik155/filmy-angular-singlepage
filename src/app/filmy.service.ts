import { Injectable } from '@angular/core';
import { Film } from './modele/Film';

@Injectable({
  providedIn: 'root'
})
export class FilmyService {

  private filmy: Film[] = [{id: 0, tytul: 'Titanic', opis:'Rok 1912, brytyjski statek Titanic', rok: 1000},
                   {id: 1, tytul: 'Terminator', opis: 'Elektroniczny morderca zostaje ', rok: 1000},
                   {id: 2, tytul: 'Avatar', opis: 'Jake, sparaliżowany były komandos', rok: 1000},];
  constructor() { }

  wszystkieFilmy(): Film[] {
    return this.filmy;
  }
  getFilm(id: number): Film {
    return this.filmy[id];
  }
}
