import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Validation from '../../shared/validation';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit{
  form: FormGroup = new FormGroup({
    studentNumer: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });
  submitted = false;
  constructor(public authService: AuthService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      studentNumber: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    },
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
}
