import {Component, OnInit} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from '@angular/router';
import { SearchService } from '../../services/search.service';
import { IBlog } from '../../interfaces/i-blog';
import { BlogService } from '../../services/blog.service';
import * as AuthActions from '../../store/actions/auth.actions';
import * as LanguageActions from '../../store/actions/language.actions';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../interfaces/i-app-store';
import { Observable } from 'rxjs';
import { IAuth } from '../../interfaces/i-auth';
import { ILanguage } from '../../store/reducers/language.reducer';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})

export class HeaderComponent implements OnInit {

  blogArr: Array<IBlog>;
  searchStr = '';
  modalRef: any;

  auth$: Observable<IAuth>;

  language$: Observable<ILanguage>;

  constructor(
    public router: Router,
    private blogService: BlogService,
    private modalService: NgbModal,
    private searchService: SearchService,
    config: NgbModalConfig,
    private store: Store<IAppStore>
  ) {
    config.backdrop = 'static';
    config.keyboard = false;

    this.auth$ = this.store.select('auth');
    this.language$ = this.store.select('language');
  }

  ngOnInit() {
    this.blogService.getBlog().subscribe(
      (data: any) => {
        this.blogArr = data;
      },
      error => console.log('error', error)
    );
  }

  // SEARCH

  open(content) {
    this.modalRef = this.modalService.open(content);
  }

  onSearchEnter(evt) {
    this.searchStr = evt.target.value;
  }

  onSubmit(evt) {
    if (evt.which === 13) {
      this.searchService.display(this.searchStr);
      this.router.navigate(['/search']);
      this.modalRef.close();
    }
  }


  // AUTHORISATION

  logOut() {
    this.store.dispatch(new AuthActions.LogOut() );
    localStorage.setItem('userLoggedIn', 'false');
    this.router.navigate(['/login']);
  }


  // LANGUAGES

  englishMessage() {
    this.store.dispatch(new LanguageActions.EnglishLang());
    localStorage.setItem('language', 'en');
  }

  spanishMessage() {
    this.store.dispatch(new LanguageActions.SpanishLang());
    localStorage.setItem('language', 'sp');
  }

  frenchMessage() {
    this.store.dispatch(new LanguageActions.FrenchLang());
    localStorage.setItem('language', 'fr');
  }
}
