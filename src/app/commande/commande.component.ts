import { Component } from '@angular/core';
import {Produit} from '../classes/Produit';
import {HttpClient} from '@angular/common/http';
import {CommandeFournisseur} from '../classes/commandeFournisseur';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.css'
})
export class CommandeComponent {
  titre1: string="commande";
  public commandeFournisseurs:Array<CommandeFournisseur>=new Array<CommandeFournisseur>();
  public commandeClient:Array<CommandeFournisseur>=new Array<CommandeFournisseur>();
  public titreF: string="Commande Fournisseur";
  public titreC: string="Commande Client";

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Array<CommandeFournisseur>>("http://localhost:8080/commandes/Fournisseur").subscribe(produit=>this.commandeFournisseurs=produit);
    this.http.get<Array<CommandeFournisseur>>("http://localhost:8080/commandes/Client").subscribe(produit=>this.commandeClient=produit);







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

}
