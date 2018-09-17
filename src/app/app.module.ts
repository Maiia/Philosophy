import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { HomepageModule } from './modules/homepage/homepage.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { BlogModule } from './modules/blog/blog.module';
import { AboutModule } from './modules/about/about.module';
import { SearchModule } from './modules/search/search.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { NotFoundModule } from './modules/not-found/not-found.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    ArticlesModule,
    BlogModule,
    AboutModule,
    ContactsModule,
    SearchModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
