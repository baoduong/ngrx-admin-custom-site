import { Observable } from 'rxjs';
import { ProviderModel } from '../models/provider.model';



export abstract class ProviderData {
    abstract getDataProviders(): Observable<ProviderModel[]>;
}
