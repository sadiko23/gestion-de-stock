import {Component, Input, input} from '@angular/core';
import {SessionManagementService} from "../session-management.service";
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector:"navbar" ,
  templateUrl:"nav.component.html"
})
export class NavComponent{
  @Input() page="";


  protected readonly SessionManagementService = SessionManagementService;
  constructor(private session:SessionManagementService,private router:Router) {

  }
  logout(): void {
    this.session.endSession();
    this.router.navigate([""])
  }
}
