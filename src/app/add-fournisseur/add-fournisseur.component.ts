import { Component } from '@angular/core';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrl: './add-fournisseur.component.css'
})
export class AddFournisseurComponent {
  msg: string="";
  res: boolean=false;
  nom: any;
  address: any;
  email: any;
  fax: any;
  telephone: any;
  capital: any;
  titre1: string="addF";

  addFournisseur() {


  }
}
