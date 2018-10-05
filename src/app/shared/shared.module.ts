import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedRoutingModule } from './shared-routing.module';
import { PaginationComponent } from './pagination/pagination.component';
import { ShortArticleItemComponent } from './short-article-item/short-article-item.component';
import { ValidationComponent } from './validation/validation.component';
import { CcCustomDirectiveDirective } from '../directives/cc-custom-directive.directive';
import { ControlInputComponent } from './form-controls/control-input/control-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    PaginationComponent,
    ShortArticleItemComponent,
    ValidationComponent,
    CcCustomDirectiveDirective,
    ControlInputComponent,
  ],
  exports: [
    PaginationComponent,
    ShortArticleItemComponent,
    ValidationComponent,
    ControlInputComponent,
    CcCustomDirectiveDirective,
  ]
})

export class SharedModule { }
