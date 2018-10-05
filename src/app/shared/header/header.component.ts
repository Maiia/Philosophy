import {Component, OnInit} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { IBlog } from '../../interfaces/i-blog';
import { BlogService } from '../../services/blog.service';
import * as AuthActions from '../../store/actions/auth.actions';
import { Store } from '@ngrx/store';
import { IAppStore } from '../../interfaces/i-app-store';
import { Observable } from 'rxjs';
import { IAuth } from '../../interfaces/i-auth';


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
  message$: Observable<string>;

  defaultData = {
    'userData': {
      'name': 'Mojo',
      'password': 'MojoMojo',
      'email': 'mojoMojo@gmail.com'
    }
  };

  constructor(
    private router: Router,
    private blogService: BlogService,
    private modalService: NgbModal,
    private searchService: SearchService,
    config: NgbModalConfig,
    private store: Store<IAppStore>
  ) {

    config.backdrop = 'static';
    config.keyboard = false;

    this.auth$ = this.store.select('auth');
    this.message$ = this.store.select('message');
  }

  ngOnInit() {
    this.blogService.getBlog().subscribe(
      (data: any) => {
        this.blogArr = data;
      },
      error => console.log('error', error),
      () => console.log('success header blog')
    );
  }

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


  // registration
  logIn() {
    this.store.dispatch(new AuthActions.LogIn() );
  }

  logOut() {
    this.store.dispatch(new AuthActions.LogOut() );
  }

  register() {
    this.store.dispatch(new AuthActions.Register(this.defaultData));
  }

  // languages
  spanishMessage() {
    this.store.dispatch({ type: 'SPANISH' });
  }

  frenchMessage() {
    this.store.dispatch({ type: 'FRENCH' });
  }
}
