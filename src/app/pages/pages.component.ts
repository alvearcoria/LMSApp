import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'lms-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <lms-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </lms-one-column-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
