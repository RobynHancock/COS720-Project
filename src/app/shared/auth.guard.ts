import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { Router } from "@angular/router";
import { RouterStateSnapshot } from "@angular/router";
import { UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root',
}) 
export class AuthGuard {
    constructor(
        public authService: AuthService,
        public router: Router
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
    Observable<boolean> |Promise<boolean> | UrlTree | boolean {
        if(this.authService.isLoggedIn !== true) {
            this.router.navigate(['sign-in']);
        }  
        return true; 
    }

}