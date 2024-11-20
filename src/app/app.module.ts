import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {provideHttpClient} from '@angular/common/http';
import {AppRoutingModule, routes} from './app-routing.module';
import {TableauComponent} from './tableau/tableau.component';
import {DashboardComponent} from './Dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {ClientComponent} from './Client/client.component';
import {NavComponent} from './nav/nav.component';
import {ProduitComponent} from './Produit/produit.component';
import {FournisseurComponent} from './Fournisseur/fournisseur.component';
import {UserComponent} from './User/user.component';
import {AddComponentFournisseur} from './add-commande-fournisseur/add-commande-fournisseur.component';
import {AddProduitFinitComponent} from './add-produit-finit/add-produit-finit.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddFournisseurComponent } from './add-fournisseur/add-fournisseur.component';
import { AddCommandeClientComponent } from './add-commande-client/add-commande-client.component';
import { AddProduitBaseComponent } from './add-produit-base/add-produit-base.component';
import { CommandeComponent } from './commande/commande.component';
import { UserEditeComponent } from './user-edite/user-edite.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    DashboardComponent,
    LoginComponent,
    ClientComponent,
    NavComponent,
    ProduitComponent,
    FournisseurComponent,
    UserComponent,
    AddProduitFinitComponent,
    AddComponentFournisseur,
    AddClientComponent,
    AddFournisseurComponent,
    AddCommandeClientComponent,
    AddProduitBaseComponent,
    CommandeComponent,
    UserEditeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {useHash: true}),
    CommonModule,
    FormsModule,

  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
