import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedRoutingModule } from './shared-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { ShortArticleItemComponent } from './short-article-item/short-article-item.component';
import { ValidationComponent } from './validation/validation.component';
import { CcCustomDirectiveDirective } from '../directives/cc-custom-directive.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule
  ],
  declarations: [ PaginationComponent, ShortArticleItemComponent, ValidationComponent, CcCustomDirectiveDirective ],
  exports: [
    PaginationComponent,
    ShortArticleItemComponent,
    ValidationComponent,
    CcCustomDirectiveDirective
  ]
})

export class SharedModule { }
