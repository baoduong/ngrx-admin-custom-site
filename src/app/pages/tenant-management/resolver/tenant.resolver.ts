import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TenantModel } from '../../../@core/models/tenant.model';

@Injectable({ providedIn: 'root' })
export class TenantResolver implements Resolve<TenantModel> {
    resolve(route: ActivatedRouteSnapshot): Observable<TenantModel> {
        const id = route.paramMap.get('id');
        if (id) {
            return of({
                id: '1',
                name: 'Tenant demo',
                email: 'demo@domain.com',
                password: '',
                modules: []
            });
        }
        return of(undefined);
    }
}
