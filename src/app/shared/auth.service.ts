import { Injectable } from "@angular/core";
import { NgZone } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Router } from "@angular/router";
import { User } from "./services/user";
import { UserService } from "./services/user.service";
import * as auth from 'firebase/auth';
import { Observable } from "rxjs";
import { FirebaseDataService } from "./services/firebase-data.service";


@Injectable({
    providedIn: 'root'
})

export class AuthService {

    userData : any;
    state: any=null;
    useremail: string ='';
    //user: User = new User();
    //submitted = false;
    studentNumber = '';

    constructor(
        public router: Router, 
        public fireAuth: AngularFireAuth,
        public zone: NgZone,
        public firestore: AngularFirestore,
        //public userService: UserService
    ) {
        /*Saving user data when logged in and null when logged out*/
        this.fireAuth.authState.subscribe((user) => {
            if(user) {
                this.userData = user;
                //this.state = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user')!);
                this.useremail = JSON.parse(localStorage.getItem('user.uid')!);
            }
            else 
            {
                localStorage.setItem('user', 'null');
                JSON.parse(localStorage.getItem('user')!);
            }
        });
    }

    get isAuthenticated(): boolean {
        return this.state !== null;
    }

    getStudentNumber(): string {
        return this.studentNumber;
    }

    //Log in with Email/Password configuration
    async SignIn(email: string, password: string, sn: string) {
        this.useremail = email;
        this.studentNumber = sn;
        return this.fireAuth.signInWithEmailAndPassword(email, password)
            .then((result) => {
                this.SetUserData(result.user);
                this.fireAuth.authState.subscribe((user)=> {
                    if(user) {
                        this.SaveUserData();
                        this.router.navigate(['dashboard']);
                    }
                });
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    //register new user/account with email/password configuration
    SignUp(email: string, password: string){
        this.useremail = email;
        return this.fireAuth.createUserWithEmailAndPassword(email, password)
            .then((result) => {
              this.SendVerifyEmail();
              this.SetUserData(result.user);  
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    SendVerifyEmail() {
        return this.fireAuth.currentUser.then((u: any) => u.sendEmailVerification())
            .then(() => {
                this.router.navigate(['verify-email']);
            });
    }

    ForgotPassword(passwordResetEmail: string) {
        return this.fireAuth.sendPasswordResetEmail(passwordResetEmail)
            .then(()=> {
                window.alert('Reset Email sent');
                console.log('Reset email sent, please check your emails');
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem( 'user')!);
        return user !== null && user.emailVerified !== false ? true: false;
    }

    get currentUserID(): string {
        return this.isAuthenticated ? this.state.uid: null;
    }

    get getUserEmail (): string {
        return this.useremail;
    }

    /*get UserData(): any {
        if (! this.isAuthenticated) {
            return [];
        }

        return [
            {
                id: this.state.uid,
                displayName: this.state.displayName,
                email: this.state.email,
                studentNumber: this.state.studentNumber
            }
        ];
    }*/

    SetUserData(user: any) {
        const userRef: AngularFirestoreDocument<any> = this.firestore.doc(
            '/users'
        );
        const userData: User = {
            uid: user.uid,
            email: user.email,
            uname: user.uname,
            studentNumber: user.studentNumber,
            emailVerified: user.emailVerified,
        };
        return userRef.set(userData, {
            merge: true,
        });
    }



    SaveUserData() {
        const user = JSON.parse(localStorage.getItem('user.uid')!);
        console.log(user.message);
        window.alert(user.uid);
       // user.saveUser();
        
    }

    SignOut() {
        return this.fireAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['sign-in']);
        })
    }

    GoogleAuth() {
        return this.AuthLogin(new auth.GoogleAuthProvider()).then((res:any) => {
            this.router.navigate(['dashboard']);
        });
    }

    AuthLogin(provider: any) {
        return this.fireAuth.signInWithPopup(provider).then((result) => {
            this.router.navigate(['dashboard']);
            this.SetUserData(result.user);
        })
        .catch((err)=> {
            window.alert(err.message);
            console.log(err.message);
        });
    }



    /*logout() {
        return this.fireAuth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        });
    }*/

    /*login(email: string, password: string)
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

    logout()
    {
        this.fireAuth.signOut().then( () => {
            localStorage.removeItem('token');
            this.router.navigate(['/login']);
        }, 
        err=> {
            alert(err.message);
        }
        )
    }

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
       
    }*/

    /*login(user: User) {
        if(user.userEmail !== '' && user.password !== ''){
            this.loggedIn.next(true);
            this.router.navigate(['/']);
        }
    }*/

    /*logout() {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
    //Log In
    
    
    //Register
    
    //Forget Password
    forgetPassword(email: string)
    {
        this.fireAuth.sendPasswordResetEmail(email).then( () => {
            this.router.navigate(['/login']);
        },
        err => {
            alert('Something has gone wrong');
        })
    }*/
}