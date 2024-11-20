import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ProduitFinit} from '../classes/ProduitFinit';

@Component({
  selector: 'app-add-produit-finit',
  templateUrl: './add-produit-finit.component.html',
  styleUrl: './add-produit-finit.component.css'
})
export class AddProduitFinitComponent implements OnInit{
  public titre1: string="creatProduitFinit";
  public description: string="";
  public quantite: number=0;
  public prix: number=0;
  public referance: string="";
  public category: string="";
  public msg: string="";
  public res:boolean=false;


  constructor(private router: Router,private http: HttpClient) {

  }
  addProduitFinit() {

    let p:ProduitFinit=new ProduitFinit()
    p.description=this.description;
    p.quantite=this.quantite;
    p.prix=this.prix;
    p.referance=this.referance;
    p.category=this.category;
    console.log(this.quantite)



    this.http.post<boolean>("http://localhost:8080/addProduitFinit",p).subscribe(r=>this.res=r);
    if(this.res){
      this.msg="Produits Added Successfully.";


    }else {
      this.msg="Produits Added Failed.";
    }
  }

  ngOnInit(): void {


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
