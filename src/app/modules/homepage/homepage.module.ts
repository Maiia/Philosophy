import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { MasonryBlogComponent } from './components/masonry-blog/masonry-blog.component';

import { NgMasonryGridModule } from 'ng-masonry-grid';
import { PopularPostsComponent } from './components/popular-posts/popular-posts.component';
import { AboutComponent } from './components/about/about.component';
import { HomepageTagsComponent } from './components/homepage-tags/homepage-tags.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HomepageRoutingModule,
    SharedModule,
    NgMasonryGridModule
  ],
  declarations: [
    HomepageComponent,
    FeaturedComponent,
    MasonryBlogComponent,
    PopularPostsComponent,
    AboutComponent,
    HomepageTagsComponent
  ]
})
export class HomepageModule { }
