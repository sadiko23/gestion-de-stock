import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../classes/Produit';

@Component(
  {
    selector:'produit',
    templateUrl:'produit.component.html'
  }
)
export class ProduitComponent implements OnInit{
  public produitBase:Array<Produit>=new Array<Produit>();
  public produitFinit:Array<Produit>=new Array<Produit>();

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
      this.http.get<Array<Produit>>("http://localhost:8080/produitBase").subscribe(produit=>this.produitBase=produit);
      this.http.get<Array<Produit>>("http://localhost:8080/produitFinit").subscribe(produit=>this.produitFinit=produit);







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


  titre1: string="produit";
}
