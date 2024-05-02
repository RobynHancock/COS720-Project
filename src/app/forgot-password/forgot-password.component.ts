import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  email: string = "";

  constructor() {}

  ngOnInit(): void {
    throw new Error("Method not implemented");
  }

  forgotPassword() {
    this.email = '';
  }

}
