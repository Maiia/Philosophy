import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const footerMessage = 'Sit vel delectus amet officiis repudiandae est voluptatem. Tempora maxime provident nisi et fuga et enim ' +
  'exercitationem ipsam. Culpa consequatur occaecati.';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data : {footer_message : footerMessage} },
  { path: 'registration', component: RegistrationComponent, data : {footer_message : footerMessage} },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AuthRoutingModule { }
