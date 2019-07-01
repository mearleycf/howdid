import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Movie } from '../models/movie';
import { environment } from '../../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDbService {

  apiURL: string = environment.the_movie_db.databaseURL;
  apiKey: string = environment.the_movie_db.apiKey;
  language: string = environment.the_movie_db.language;
  external_source: string = environment.the_movie_db.external_source.imdb;
  movieUrlSuffix = `?api_key=${this.apiKey}&language=${this.language}&external_source=${this.external_source}`;

  constructor(private httpClient: HttpClient) { }

  getMovieById$(id: string): Observable<Movie> {
    return this.httpClient.get(`${this.apiURL}/find/${id}${this.movieUrlSuffix}`) as Observable<Movie>;
  }

}
