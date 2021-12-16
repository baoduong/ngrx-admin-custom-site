import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'Dashboard',
        icon: 'home-outline',
        link: 'dashboard',
        home: true,
    },
    {
        title: 'Tenant management',
        icon: 'keypad-outline',
        link: 'tenant-management',
    },
    {
        title: 'New tenant',
        link: '/tenant-management/detail',
        icon: 'plus-outline'
    },
    {
        title: 'Modules management',
        icon: 'cube-outline',
        link: 'modules',
    },
];
