import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommandeFournisseur} from '../classes/commandeFournisseur';
import {SessionManagementService} from '../session-management.service';
import {Router} from '@angular/router';
import {User} from '../classes/User';

@Component({
  selector: 'admin',
  templateUrl: './dashboard.component.html',

})
export class DashboardComponent implements OnInit{
  public commandFournisseur?:Array<CommandeFournisseur>|undefined;
  public commandClient?:Array<CommandeFournisseur>|undefined;
  public titre1="Tableau des Commande Fournisseur"
  public titre2="Tableau des Commande Client"
  public titre3="Tableau des Utilisateurs"
  public nbUser?:number;
  public revenue?:number;
  public users:Array<User> | undefined=new Array<User>();

  constructor(private  http:HttpClient ,private sessionService: SessionManagementService,private router:Router) {


  }
  ngOnInit() {
    if(!this.sessionService.isAuthenticated()){
      this.router.navigate(["/"])
    }

    this.http.get<Array<CommandeFournisseur>|undefined>("http://localhost:8080/commandes/Fournisseur").subscribe(e=>{this.commandFournisseur=e})
    this.http.get<Array<CommandeFournisseur>|undefined>("http://localhost:8080/commandes/Client").subscribe(e=>{this.commandClient=e})
    this.http.get<Array<User>|undefined>("http://localhost:8080/users").subscribe(e=>{this.users=e})
    this.http.get<number>("http://localhost:8080/nombre").subscribe(e=>this.nbUser=e);
    this.http.get<number>("http://localhost:8080/revenue").subscribe(e=>this.revenue=e);








    const themeToggleDarkIcon = document.getElementById('b');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      // @ts-ignore
      themeToggleLightIcon.classList.remove('hidden');
    } else {
      // @ts-ignore
      themeToggleDarkIcon.classList.remove('hidden');
    }

    const themeToggleBtn = document.getElementById('theme-toggle');

// @ts-ignore
    themeToggleBtn.addEventListener('click', function () {

      // toggle icons inside button
      // @ts-ignore
      themeToggleDarkIcon.classList.toggle('hidden');
      // @ts-ignore
      themeToggleLightIcon.classList.toggle('hidden');

      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }
      }

    });







  }

  protected readonly CommandeFournisseur = CommandeFournisseur;


  page: string="dashboard";


  protected readonly User = User;
}
