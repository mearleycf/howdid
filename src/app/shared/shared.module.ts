import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../components/material-components/material-components.module';
// import { ComponentsModule } from '../components/components.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Shared Components
import { AppLayoutHeaderComponent } from './layout/app-layout-header/app-layout-header.component';
import { AppLayoutFooterComponent } from './layout/app-layout-footer/app-layout-footer.component';
import { LogoComponent } from './logo/logo.component';

// Services
import { TheMovieDbService } from './services/the-movie-db.service';

// Models
import { Movie } from './models/movie';

@NgModule({
  declarations: [
    AppLayoutFooterComponent,
    AppLayoutHeaderComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialComponentsModule,
    // ComponentsModule,
    FlexLayoutModule,
  ],
  providers: [
    TheMovieDbService,
    Movie,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppLayoutFooterComponent,
    AppLayoutHeaderComponent,
    LogoComponent,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
