import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EleveursComponent } from './eleveurs/eleveurs.component';
import { AjouterAnimalComponent } from './ajouter-animal/ajouter-animal.component';
import { AjouterEleveurComponent } from './ajouter-eleveur/ajouter-eleveur.component';
import { NouvelleSortieComponent } from './nouvelle-sortie/nouvelle-sortie.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { AjouterUserComponent } from './ajouter-user/ajouter-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { AddQteComponent } from './add-qte/add-qte.component';
import { WithDrawQteComponent } from './with-draw-qte/with-draw-qte.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimauxComponent,
    PageNotFoundComponent,
    EleveursComponent,
    AjouterAnimalComponent,
    AjouterEleveurComponent,
    NouvelleSortieComponent,
    UsersComponent,
    AjouterUserComponent,
    UpdateUserComponent,
    UpdateAnimalComponent,
    AddQteComponent,
    WithDrawQteComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'ajouter-animal', pathMatch: 'full'},
      {path: 'ajouter-animal', component: AjouterAnimalComponent},
      {path: 'animaux', component: AnimauxComponent},
      {path: 'ajouter-eleveur', component: AjouterEleveurComponent},
      {path: 'eleveurs', component: EleveursComponent},
      {path: 'users', component: UsersComponent},
      {path: 'ajouter-user', component: AjouterUserComponent},
      {path: 'modifier-user/:id', component: UpdateUserComponent},
      {path: 'modifier-animal/:id', component: UpdateAnimalComponent},
      {path: 'add-qte/:id', component: AddQteComponent},
      {path: 'remove-qte/:id', component: WithDrawQteComponent},
      {path: 'nouvelle-sortie', component: NouvelleSortieComponent},

      {path: '**', component: PageNotFoundComponent}
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
