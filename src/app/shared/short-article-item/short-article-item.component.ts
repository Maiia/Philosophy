import { Component, Input, OnInit } from '@angular/core';
import { IBlog } from '../../interfaces/i-blog';
import { IAuthor } from '../../interfaces/i-author';

@Component({
  selector: 'app-short-article-item',
  templateUrl: './short-article-item.component.html',
  styleUrls: ['./short-article-item.component.scss']
})

export class ShortArticleItemComponent implements OnInit {

  @Input() post: IBlog;
  @Input() authorsArr: IAuthor;

  constructor() {
    console.log('blog', this.post);
  }

  ngOnInit() {}

}
