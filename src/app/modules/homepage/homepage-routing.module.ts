import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';
import { AuthGuardService } from '../../services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomepageComponent, canActivate: [ AuthGuardService ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomepageRoutingModule { }
