import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {TableauComponent} from './tableau/tableau.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './Dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ClientComponent} from './Client/client.component';
import {FournisseurComponent} from './Fournisseur/fournisseur.component';
import {UserComponent} from './User/user.component';
import {ProduitComponent} from './Produit/produit.component';
import {AddProduitFinitComponent} from './add-produit-finit/add-produit-finit.component';
import {
  AddComponentFournisseur
} from './add-commande-fournisseur/add-commande-fournisseur.component';
import {AddClientComponent} from './add-client/add-client.component';
import {AddFournisseurComponent} from './add-fournisseur/add-fournisseur.component';
import {AddCommandeClientComponent} from './add-commande-client/add-commande-client.component';
import {AddProduitBaseComponent} from './add-produit-base/add-produit-base.component';
import {CommandeComponent} from './commande/commande.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: LoginComponent },
  { path: 'client', component: ClientComponent },
  { path: 'fournisseur', component: FournisseurComponent },
  { path: 'user', component: UserComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'creatProduitFinit', component: AddProduitFinitComponent },
  { path: 'cProduitBase', component: AddProduitBaseComponent },
  { path: 'addCommandeF', component: AddComponentFournisseur },
  { path: 'addC', component: AddClientComponent },
  { path: 'addF', component: AddFournisseurComponent },
  { path: 'addCommandeC', component: AddCommandeClientComponent },
  { path: 'commande', component: CommandeComponent },
  { path: 'user', component: UserComponent },

];
const options: ExtraOptions = { useHash: true };

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
