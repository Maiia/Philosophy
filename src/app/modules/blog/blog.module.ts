import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';

import { BlogComponent } from './blog.component';
import { SharedModule } from '../../shared/shared.module';
import { BlogArrticleComponent } from './components/blog-arrticle/blog-arrticle.component';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
  ],
  declarations: [BlogComponent, BlogArrticleComponent]
})
export class BlogModule { }
