import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './utilisateurs/users.component';
import { AjouterUserComponent } from './ajouter-utilisateur/ajouter-user.component';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './modifier-utilisateur/update-user.component';
import { UpdateProduitComponent } from './modifier-produit/update-produit.component';
import { AddQteComponent } from './nouvelle-entree/add-qte.component';
import { WithDrawQteComponent } from './nouvelle-sortie/with-draw-qte.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    PageNotFoundComponent,
    AjouterProduitComponent,
    UsersComponent,
    AjouterUserComponent,
    UpdateUserComponent,
    UpdateProduitComponent,
    AddQteComponent,
    WithDrawQteComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'ajouter-produit', pathMatch: 'full'},
      {path: 'ajouter-produit', component: AjouterProduitComponent},
      {path: 'produits', component: ProduitsComponent},
      {path: 'utilisateurs', component: UsersComponent},
      {path: 'ajouter-utilisateur', component: AjouterUserComponent},
      {path: 'modifier-utilisateur/:id', component: UpdateUserComponent},
      {path: 'modifier-produit/:id', component: UpdateProduitComponent},
      {path: 'nouvelle-entree/:id', component: AddQteComponent},
      {path: 'nouvelle-sortie/:id', component: WithDrawQteComponent},

      {path: '**', component: PageNotFoundComponent}
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
