import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  public base_url = 'https://image.tmdb.org/t/p/';

  public movie: Object = {
    title: 'The Country Bears',
    // tslint:disable-next-line:max-line-length
    overview: 'For Beary Barrington, The Country Bears\' young #1 fan, fitting in with his all-too-human family is proving im-paws-ible. When he runs away to find Country Bear Hall and his heroes, he discovers the venue that made them famous is near foreclosure. Beary hightails it over the river and through the woods to get the Bears in the Band back together for an all-out reunion concert to save Country Bear Hall.',
    poster_path: '/xyRugigU9xBlTzfoA7uuIQ6KXiY.jpg',
  };

  getCoverUrl(file_path, base_url, file_size) {
    const filePath = file_path;
    const baseUrl = base_url;
    const fileSize = file_size;
    const posterPath = base_url + file_size + file_path;
    return posterPath;
  }

  constructor() { }

  ngOnInit() {
  }

}
