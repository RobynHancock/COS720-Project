import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string ='';
  password: string = '';

  constructor() { }

  ngOnInit(): void{
    throw new Error('Method not implemented');
  }

  login(){
    if(this.username == '')
      {
        alert("Please Enter Your Username");
        return;
      }
      if(this.password == '')
        {
          alert("Please Enter Your Password");
          return;
        }
  }
}
