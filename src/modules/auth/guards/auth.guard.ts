import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // return of(true);
        const token = window.localStorage.getItem('token');
        if (token) {
            return true;
        } else {
            this.router.navigate(['auth/login']);
            return false;
        }
    }
}