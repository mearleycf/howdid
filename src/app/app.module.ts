import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Project
import { MaterialComponentsModule } from './components/material-components/material-components.module';
import { AppLayoutHeaderComponent } from './app-layout-header/app-layout-header.component';
import { AppLayoutFooterComponent } from './app-layout-footer/app-layout-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutHeaderComponent,
    AppLayoutFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
