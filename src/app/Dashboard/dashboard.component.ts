import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommandeFournisseur} from './commandeFournisseur';
import {SessionManagementService} from '../session-management.service';
import {Router} from '@angular/router';

@Component({
  selector: 'admin',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent implements OnInit{
  public commandFournisseur?:Array<CommandeFournisseur>|undefined;
  public commandClient?:Array<CommandeFournisseur>|undefined;
  public titre1="Tableau des Commande Fournisseur"
  public titre2="Tableau des Commande Client"
  public nbUser?:number;
  public revenue?:number;

  constructor(private  http:HttpClient ,private sessionService: SessionManagementService,private router:Router) {


  }
  ngOnInit() {
    if(!this.sessionService.isAuthenticated()){
      this.router.navigate(["/"])
    }

    this.http.get<Array<CommandeFournisseur>|undefined>("http://localhost:8080/commandes/Fournisseur").subscribe(e=>{this.commandFournisseur=e})
    this.http.get<Array<CommandeFournisseur>|undefined>("http://localhost:8080/commandes/Client").subscribe(e=>{this.commandClient=e})
    this.http.get<number>("http://localhost:8080/nombre").subscribe(e=>this.nbUser=e);
    this.http.get<number>("http://localhost:8080/revenue").subscribe(e=>this.revenue=e);

  }

  protected readonly CommandeFournisseur = CommandeFournisseur;
}
