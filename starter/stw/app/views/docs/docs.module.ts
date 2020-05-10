import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

import { DocsComponent } from './docs.component';
import { DocsRoutes } from './docs.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DocsRoutes),
    NgbAccordionModule
  ],
  declarations: [DocsComponent]
})
export class DocsModule {}
