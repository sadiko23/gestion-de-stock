import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SessionManagementService} from '../session-management.service';
import {Router} from '@angular/router';
import {User} from '../classes/User';


@Component(
  {
    selector:'user',
    templateUrl:'user.component.html'
  }
)
export class UserComponent implements OnInit{
  public users: Array<User> | undefined;


  constructor(private  http:HttpClient ,private sessionService: SessionManagementService,private router:Router) {


  }

  ngOnInit(): void {
    this.http.get<Array<User>|undefined>("http://localhost:8080/users").subscribe(e=>{this.users=e})








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



  titre1: string="user";
  nom: any;
  role: any;
  Direction: any;
  res: boolean=false;
  msg: string="";
  password: string="";

  addUser() {
    let user=new User();
    user.nom=this.nom;
    user.role=this.role;
    user.direction=this.Direction;
    user.password=this.password;

     this.http.post<boolean>("http://127.0.0.1:8080/addUser",user).subscribe(res=>{this.res=res})

     if (this.res){
       this.msg="user added Successfully.";
       this.reload();

    }else {
       this.msg="user added Failed.";
       this.reload();
     }
  }

  async deleteUser(id: number | undefined) {
    this.http.delete("http://127.0.0.1:8080/deleteUser", {body: {id: id}}).subscribe()

    this.reload()

  }
   reload() {
     this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/user`]).then(()=>{
     })
   })

  }

  onChange(event:Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.role=selectElement.value;
  }
}
