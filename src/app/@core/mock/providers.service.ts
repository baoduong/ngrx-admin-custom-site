import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProviderData } from '../data/providers';
import { ProviderModel } from '../models/provider.model';

@Injectable()
export class ProviderService extends ProviderData {
    providers: ProviderModel[] = [{
        'id': 1,
        'name': 'Schroeder, Turner and Stroman'
    }, {
        'id': 2,
        'name': 'Heller LLC'
    }, {
        'id': 3,
        'name': 'Satterfield LLC'
    }, {
        'id': 4,
        'name': 'Kertzmann-Durgan'
    }, {
        'id': 5,
        'name': 'Hermiston LLC'
    }, {
        'id': 6,
        'name': 'Kuhlman, Fay and McCullough'
    }, {
        'id': 7,
        'name': 'Zemlak, Frami and Rodriguez'
    }, {
        'id': 8,
        'name': 'Hickle, Reinger and Keeling'
    }, {
        'id': 9,
        'name': 'Wunsch-Mertz'
    }, {
        'id': 10,
        'name': 'Wolf-Bechtelar'
    }, {
        'id': 11,
        'name': 'Ortiz, Green and Homenick'
    }, {
        'id': 12,
        'name': 'Thompson, Wilderman and Schiller'
    }, {
        'id': 13,
        'name': 'Wiza, Heathcote and Wyman'
    }, {
        'id': 14,
        'name': 'Hoeger-Muller'
    }, {
        'id': 15,
        'name': 'Anderson and Sons'
    }, {
        'id': 16,
        'name': 'Hyatt-Lowe'
    }, {
        'id': 17,
        'name': 'Connelly-Nader'
    }, {
        'id': 18,
        'name': 'Moore, Predovic and Wuckert'
    }, {
        'id': 19,
        'name': 'Bernhard Inc'
    }, {
        'id': 20,
        'name': 'Johnston Group'
    }];

    constructor() {
        super();
    }

    getDataProviders(): Observable<ProviderModel[]> {
        return of(this.providers);
    }

}
