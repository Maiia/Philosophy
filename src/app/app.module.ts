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
import { QuestionsModule } from './modules/questions/questions.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbServiceService } from './services/in-memory-db-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';

import { SimpleReducer } from './simple.reducer';
import { postReducer } from './store/reducers/post.reducer';
import { authReducer } from './store/reducers/auth.reducer';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthModule} from './shared/auth/auth.module';



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
    QuestionsModule,
    AuthModule,
    NotFoundModule,
    BrowserAnimationsModule,
    InMemoryWebApiModule.forRoot(InMemoryDbServiceService, { delay: 500 }),
    StoreModule.forRoot({
      message: SimpleReducer,
      post: postReducer,
      auth: authReducer
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ]
})
export class AppModule { }

