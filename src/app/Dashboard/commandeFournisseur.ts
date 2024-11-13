import {Component} from '@angular/core';


export class CommandeFournisseur{
  public id:number=0;
  public dateCommande:Date=new Date();
  public total:number=0;
  public valid:boolean=false;
  public description:String="";
}
