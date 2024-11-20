import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from '../classes/Client';
import {Fournisseur} from '../classes/Fournisseur';

@Component(
  {
    selector:'client',
    templateUrl:'fournisseur.component.html'
  }
)
export class FournisseurComponent implements OnInit{
  public fournisseurs:Array<Fournisseur> =new Array<Fournisseur>();

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<Array<Fournisseur>>('http://127.0.0.1:8080/fournisseur').subscribe(client=>this.fournisseurs=client)








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


  titre1: string="fournisseur";
}
