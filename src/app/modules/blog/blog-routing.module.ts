import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogArrticleComponent } from './components/blog-arrticle/blog-arrticle.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogArrticleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
