import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {provideHttpClient} from '@angular/common/http';
import {AppRoutingModule, routes} from './app-routing.module';
import {TableauComponent} from './tableau/tableau.component';
import {DashboardComponent} from './Dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {CommandeFournisseur} from './Dashboard/commandeFournisseur';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {ClientComponent} from './Client/client.component';
import {NavComponent} from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    DashboardComponent,
    LoginComponent,
    ClientComponent,
    NavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, {useHash: true}),
    CommonModule,
    FormsModule,

  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
