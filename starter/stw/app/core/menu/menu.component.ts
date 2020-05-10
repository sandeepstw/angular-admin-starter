import { Component } from '@angular/core';
import { MenuService } from './menu.service';

import { TranslateService } from '@ngx-translate/core';
/* tslint:disable:max-line-length */
@Component({
  selector: 'app-menu',
  template: `
  <ul class="navigation" appAccordion>
    <li class="navigation-item" appAccordionLink *ngFor="let menuitem of menuService.getAll()" group="{{menuitem.state}}">
      <a class="navigation-link" appAccordionToggle [routerLink]="['/', menuitem.state]" *ngIf="menuitem.type === 'link'">
        <i class="icon icon-{{ menuitem.icon }}"></i>
        <span>{{ menuitem.name | translate }}</span>
        <span class="mr-auto"></span>
        <span class="badge badge-{{ badge.type }}" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
      </a>
      <a class="navigation-link" appAccordionToggle href="{{menuitem.state}}" *ngIf="menuitem.type === 'extLink'">
        <i class="icon icon-{{ menuitem.icon }}"></i>
        <span>{{ menuitem.name | translate }}</span>
        <span class="mr-auto"></span>
        <span class="badge badge-{{ badge.type }}" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
      </a>
      <a class="navigation-link" appAccordionToggle href="{{menuitem.state}}" target="_blank" *ngIf="menuitem.type === 'extTabLink'">
        <i class="icon icon-{{ menuitem.icon }}"></i>
        <span>{{ menuitem.name | translate }}</span>
        <span class="mr-auto"></span>
        <span class="badge badge-{{ badge.type }}" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
      </a>
      <a class="navigation-link" appAccordionToggle href="javascript:;" *ngIf="menuitem.type === 'sub'">
        <i class="icon icon-{{ menuitem.icon }}"></i>
        <span>{{ menuitem.name | translate }}</span>
        <span class="mr-auto"></span>
        <span class="badge badge-{{ badge.type }}" *ngFor="let badge of menuitem.badge">{{ badge.value }}</span>
        <i class="menu-caret icon icon-arrows-right"></i>
      </a>
      <ul class="navigation-submenu" *ngIf="menuitem.type === 'sub'">
        <li class="navigation-item" *ngFor="let childitem of menuitem.children" routerLinkActive="open">
          <a [routerLink]="['/', menuitem.state, childitem.state ]" class="navigation-link relative">{{ childitem.name | translate }}</a>
        </li>
      </ul>
    </li>
  </ul>`,
  providers: [MenuService]
})
export class MenuComponent {
  currentLang = 'en';

  constructor(
    public menuService: MenuService,
    public translate: TranslateService
  ) {}
}
