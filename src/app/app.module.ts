import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//mport axios from 'axios

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { InsectesComponent } from './insectes/insectes.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AnimauxComponent,
    InsectesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'animaux-liste', component: AnimauxComponent},
      {path: 'insectes-liste', component: InsectesComponent},
      {path: '', redirectTo: '/animaux-liste', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
