import {Component , OnInit ,Input} from '@angular/core';
import {HttpClient, provideHttpClient} from '@angular/common/http';
import {List} from 'postcss/lib/list';
import {AppComponent} from '../app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommandeFournisseur} from '../Dashboard/commandeFournisseur';

@Component(
  {
    selector: "t",
    templateUrl:"tableau.component.html",



  }
)
export class TableauComponent {
        @Input() titre="";
        @Input({transform: (value: Array<CommandeFournisseur>|undefined ): Array<CommandeFournisseur> |undefined =>value, alias: "commande"}) co?:Array<CommandeFournisseur>|undefined;





}
