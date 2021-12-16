import { Observable } from 'rxjs';
import { TenantModel } from '../models/tenant.model';

export abstract class TenantData {
    abstract getDataTenant(): Observable<TenantModel[]>;
}
