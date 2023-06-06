import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//mport axios from 'axios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EleveursComponent } from './eleveurs/eleveurs.component';
import { AjouterAnimalComponent } from './ajouter-animal/ajouter-animal.component';
import { AjouterEleveurComponent } from './ajouter-eleveur/ajouter-eleveur.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimauxComponent,
    PageNotFoundComponent,
    EleveursComponent,
    AjouterAnimalComponent,
    AjouterEleveurComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'ajouter-animal', component: AjouterAnimalComponent},
      {path: 'animaux', component: AnimauxComponent},
      {path: 'ajouter-eleveur', component: AjouterEleveurComponent},
      {path: 'eleveurs', component: EleveursComponent},
      {path: '', redirectTo: 'ajouter-animal', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
