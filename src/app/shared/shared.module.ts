import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

// Shared Components
import { AppLayoutHeaderComponent } from './layout/app-layout-header/app-layout-header.component';
import { AppLayoutFooterComponent } from './layout/app-layout-footer/app-layout-footer.component';

@NgModule({
  declarations: [
    AppLayoutFooterComponent,
    AppLayoutHeaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppLayoutFooterComponent,
    AppLayoutHeaderComponent,
  ]
})
export class SharedModule { }
