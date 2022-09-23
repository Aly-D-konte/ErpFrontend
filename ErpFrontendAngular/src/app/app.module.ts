import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { PostulantTireComponent } from './postulant-tire/postulant-tire.component';
import { ListeUserComponent } from './liste-user/liste-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilAdminComponent,
    PostulantTireComponent,
    ListeUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
