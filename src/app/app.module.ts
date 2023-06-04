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

@NgModule({
  declarations: [
    AppComponent,
    AnimauxComponent,
    PageNotFoundComponent,
    EleveursComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'animaux', component: AnimauxComponent},
      {path: 'eleveurs', component: EleveursComponent},
      {path: '', redirectTo: '/animaux', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
