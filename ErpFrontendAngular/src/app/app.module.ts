import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { TirageComponent } from './tirage/tirage.component';
import { AuthentificationComponent } from './authentification/authentification.component';

import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { ActeurAdminComponent } from './acteur-admin/acteur-admin.component';

import { HeaderUserResponsableComponent } from './header-user-responsable/header-user-responsable.component';
import { ListeActeurComponent } from './liste-acteur/liste-acteur.component';
import { ActiviteComponent } from './activite/activite.component';
import { PostulantComponent } from './postulant/postulant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    TirageComponent,
    AuthentificationComponent,
    AccueilComponent,
    ActeurAdminComponent,
    HeaderUserResponsableComponent,
    ListeActeurComponent,
    ActiviteComponent,
    PostulantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
