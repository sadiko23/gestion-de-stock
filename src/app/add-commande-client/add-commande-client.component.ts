import { Component } from '@angular/core';
import {Produit} from '../classes/Produit';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-commande-client',
  templateUrl: './add-commande-client.component.html',
  styleUrl: './add-commande-client.component.css'
})
export class AddCommandeClientComponent {
  public titre1: string="addCommandeC";
  public dateCommande: Date=new Date();
  public total: number=0;
  public description: string="";
  public res: boolean=false;
  public msg: string="";
  public nb: number=1;
  public num: number=0;
  public prod:Array<Produit>=new Array<Produit>();
  prix: Array<number>=new Array<number>();
  referance: Array<string>=new Array<string>();
  category: Array<string>=new Array<string>();
  quantite: Array<number>=new Array<number>();
  constructor(private http: HttpClient) {

  }
  addCommande() {

  }
  confirme(nb:number){
    this.num=nb;
    while (this.prod.length<this.num){
      let p:Produit = new Produit();
      this.prod.push(p);

    }


  }
}
