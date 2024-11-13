import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Client} from './Client';

@Component(
  {
    selector:'client',
    templateUrl:'client.component.html'
  }
)
export class ClientComponent implements OnInit{
  private client:Client =new Client();

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {

  }


}
