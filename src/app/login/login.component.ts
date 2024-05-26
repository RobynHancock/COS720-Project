import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent /*implements OnInit*/ {

  //loginForm: FormGroup;
  
  constructor(
    private router: Router,
    public authService: AuthService,
    public fireauth: AngularFireAuth
  ) {}

  /*ngOnInit(): void {
     // this.createLoginForm();
  }  */

  /*LogOut() {
    this.fireauth.signOut();
  }*/

  /*createLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login()
  {
    if(this.loginForm.valid){
      this.authService.LogIn(this.loginForm.value.email, this.loginForm.value.password)
    }
  }
  //form: FormGroup;
  //private formSubmit: boolean;
  /*email: string ='';
  password: string = '';
  loggedIn: boolean = false;
  //show: boolean = false;

  constructor(
    private router: Router,
    //private formBuild: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit(): void{
    throw new Error('Method not implemented');
    //this.form = this.formBuild.group(
      //{
        //userEmail: ['', Validators.required],
        //password: ['', Validators.required]
      //}
    //);
  }

  /*isInvalid(field: string) {
    return (
      (!this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmit)
    );
  }

  onSubmit() {
    if (this.form.valid)
      {
        this.auth.login(this.form.value);
      }
      this.formSubmit = true;
  }

  login(){
    if(this.email == '')
      {
        alert("Please Enter Your Email");
        return;
      }
    if(this.password == '')
      {
        alert("Please Enter Your Password");
        return;
      }
    this.auth.login(this.email, this.password);
    this.email = '';
    this.password = '';
    
  }
    

      /*if(this.email == 'admin@cos.com' && this.password == 'admin'){
        this.router.navigate(["dashboard"]);
      }
      else {
        alert("Invalid Credentials");
      }
    //this.auth.login(this.email, this.password);
    
    //console.log("User with email address " +  this.email + " has logged in");
    //this.clearFields();
  
    //this.email = '';
    //this.password = '';
    //this.show = true;

  //}
  
  clearFields() {
    this.email = '';
    this.password = '';
    this.show = true;
  }*/
}
