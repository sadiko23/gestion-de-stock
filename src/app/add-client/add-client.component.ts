import { Component } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})
export class AddClientComponent {
  capital: any;
  telephone: any;
  fax: any;
  email: any;
  address: any;
  nom: any;
  res: boolean=false;
  msg: string="";
  titre1: string="addC";

  addCliente() {

  }
}
