import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { PostulantTireComponent } from './postulant-tire/postulant-tire.component';
import { ListeUserComponent } from './liste-user/liste-user.component';

import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { TirageComponent } from './tirage/tirage.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HeaderUserResponsableComponent } from './header-user-responsable/header-user-responsable.component';
import { ListeActeurComponent } from './liste-acteur/liste-acteur.component';
import { ActiviteComponent } from './activite/activite.component';
import { PostulantComponent } from './postulant/postulant.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilAdminComponent,
    PostulantTireComponent,
    ListeUserComponent,
    HeaderAdminComponent,
    TirageComponent,

    AuthentificationComponent,


    AuthentificationComponent,
    HeaderUserResponsableComponent,
    ListeActeurComponent,
    ActiviteComponent,
    PostulantComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
