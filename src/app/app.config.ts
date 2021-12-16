import { InjectionToken } from '@angular/core';

export interface AppConfig {
    URL_API: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('App.Config', {
    providedIn: 'root',
    factory: () => ({
        URL_API: '/',
    }),
});
