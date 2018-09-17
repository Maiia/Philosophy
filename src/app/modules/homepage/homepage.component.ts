import { Component, OnInit } from '@angular/core';
import {ArticlesService} from '../../services/articles.service';
import {IArticle} from '../../interfaces/i-article';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  articles: Array<IArticle>;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articlesService.getArticles().subscribe(
      data => {
        this.articles = data['articles'];
      },
      err => console.error('err1', err),
      () => console.log('articles1', this.articles)
    );
  }

}
