import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'wye-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <wye-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </wye-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
