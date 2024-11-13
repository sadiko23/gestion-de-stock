import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {User} from './User';
import {SessionManagementService} from '../session-management.service';
import {log} from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
@Component({
  selector:'login',
  templateUrl:'login.component.html'
})

export class LoginComponent implements OnInit{
  public username:string="";
  public password:string="";
  public log:User=new User();


  login(username: number | undefined): void {
    // Perform authentication logic (e.g., API call)
    // On success, set user session
    var param={ username:this.username,password:this.password};
    this.http.post<User>("http://localhost:8080/login",{ username:this.username,password:this.password},{params:{ username:this.username,password:this.password}}).subscribe(e=>this.log=e);
    this.sessionService.setSession({ username });
    if (this.log.role=="ADMIN") {
      this.router.navigate(["/dashboard"])
    }
  }
  constructor(private http:HttpClient,private router: Router,private sessionService: SessionManagementService) {

  }
  ngOnInit() {
    if(this.sessionService.isAuthenticated()){
      this.router.navigate(["/dashboard"])
    }

  }


}
