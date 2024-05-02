import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private router: Router, private fireAuth: AngularFireAuth) {}

    //Log In
    login(email: string, password: string)
    {
        this.fireAuth.signInWithEmailAndPassword(email, password).then(res => {
            localStorage.setItem('token', 'true');

            if(res.user?.emailVerified == true)
                {
                    this.router.navigate(['dashboard']);
                }
            else 
                {
                    this.router.navigate(['login']);
                }
        },
        err => {
            alert(err.message);
            this.router.navigate(['login']);
        })
    }
    
    //Register
    register(email: string, password: string)
    {
        this.fireAuth.createUserWithEmailAndPassword(email, password).then(res => {
            alert("User has been successfully created");
            this.router.navigate(['login']);
        },
        err => {
            alert(err.message);
            this.router.navigate(['register']);
            }
        )
       
    }
    //Forget Password
    forgetPassword(email: string)
    {
        this.fireAuth.sendPasswordResetEmail(email).then( () => {
            this.router.navigate(['/login']);
        },
        err => {
            alert('Something has gone wrong');
        })
    }
}