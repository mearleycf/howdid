import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialComponentsModule } from './material-components/material-components.module';

// Components
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    EpisodesComponent,
    MovieComponent,
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
  ],
  exports: [
    HomeComponent,
    MoviesComponent,
    EpisodesComponent,
  ]
})
export class ComponentsModule { }
