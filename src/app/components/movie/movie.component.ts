import { Component } from '@angular/core';

import { TheMovieDbService } from '../../shared/services/the-movie-db.service';
import { Movie } from './movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  constructor(theMovieDbService: TheMovieDbService) { }

}
