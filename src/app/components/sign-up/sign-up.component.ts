import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { User } from '../../models/user.model';
//import { FirebaseDataService } from '../../shared/services/firebase-data.service';
import { UserService } from '../../shared/services/user.service';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from '../../shared/validation';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit{

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    studentNumber: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

  user: User = new User();
  submitted = false;

  constructor(private userService: UserService, public authService: AuthService, private formBuilder: FormBuilder) {}

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

  ngOnInit(): void {
    this.form = this.formBuilder.group (
      {
        name: ['', Validators.required],
        studentNumber: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(26)]],
        confirmPassword: ['', Validators.required]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): {[key: string]: AbstractControl} {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if(this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
