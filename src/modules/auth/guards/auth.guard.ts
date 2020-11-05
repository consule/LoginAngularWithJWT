import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // return of(true);
        if (this.authService.isUserLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['auth/login']);
            return false;
        }
    }
}
