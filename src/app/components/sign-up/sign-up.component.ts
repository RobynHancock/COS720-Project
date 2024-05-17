import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { User } from '../../models/user.model';
//import { FirebaseDataService } from '../../shared/services/firebase-data.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  user: User = new User();
  submitted = false;

  constructor(private userService: UserService, public authService: AuthService) {}

  saveUser(): void {
    this.userService.create(this.user).then(() => {
      console.log('New user created');
      this.submitted = true;
    });
  }

  newUser(): void{
    this.submitted=false;
    this.user = new User();
  }

  ngOnInit() {}

}
