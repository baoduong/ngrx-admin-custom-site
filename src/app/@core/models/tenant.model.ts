import { ModuleModel } from './module.model';

export interface TenantModel {
    id?: string;
    name: string;
    email: string;
    password: string;
    modules: ModuleModel[];
}
