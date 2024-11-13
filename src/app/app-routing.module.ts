import { NgModule } from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {TableauComponent} from './tableau/tableau.component';
import {AppComponent} from './app.component';
import {DashboardComponent} from './Dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {ClientComponent} from './Client/client.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: LoginComponent },
  { path: 'client', component: ClientComponent },

];
const options: ExtraOptions = { useHash: true };

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
