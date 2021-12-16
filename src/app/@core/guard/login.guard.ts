import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { NbMenuService } from '@nebular/theme';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class LoginActivationGuard implements CanActivate {
    constructor(private authenService: AuthenticationService,
        private router: Router,
        private menuService: NbMenuService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // If user logout
        if (state.url.includes('logout')) {
            this.authenService.logout();
            this.router.navigate(['auth/login']);
            return false;
        }
        if (this.authenService.isAuthenticated) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}
