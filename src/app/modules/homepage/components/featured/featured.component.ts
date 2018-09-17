import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AuthorsService } from '../../../../services/authors.service';
import { IArticle } from '../../../../interfaces/i-article';
import { IAuthor } from '../../../../interfaces/i-author';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})

export class FeaturedComponent implements OnInit, OnChanges {

  @Input() i: number;
  @Input() article: IArticle;
  author: IAuthor;

  constructor(private authorsService: AuthorsService) {
  }

  ngOnChanges() {
    if (this.article) {
      this.getAuthors();
    }
  }

  ngOnInit() {
  }


  getAuthors() {
    this.authorsService.getAuthors().subscribe(
      data => {
        this.author = data['authors'].filter((author: IAuthor) => author.id === this.article.author_id)[0];
      },
      err => console.error('err1', err),
      () => console.log('authors1', this.author)
    );
  }
}
