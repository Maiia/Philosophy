import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../../services/blog.service';
import { AuthorsService } from '../../../../services/authors.service';
import { IBlog } from '../../../../interfaces/i-blog';
import { IAuthor } from '../../../../interfaces/i-author';

@Component({
  selector: 'app-popular-posts',
  templateUrl: './popular-posts.component.html',
  styleUrls: ['./popular-posts.component.scss']
})
export class PopularPostsComponent implements OnInit {

  blogArr: Array<IBlog>;
  authorsArr: Array<IAuthor>;

  constructor(
    private blogService: BlogService,
    private authorsService: AuthorsService) { }

  ngOnInit() {
    this.getBlog();
  }

  getBlog() {
    this.blogService.getBlog().subscribe(
      data => {
        this.blogArr = data['blog'].sort((item1: IBlog, item2: IBlog) => item1.visited - item2.visited).splice(1, 6);

        this.authorsService.getAuthors().subscribe(
          authors => {
            this.authorsArr = authors['authors'];
          },
          err => console.error('err1', err),
          () => console.log('articles1', this.authorsArr)
        );

      },
      err => console.error('err1', err),
      () => console.log('articles1', this.blogArr)
    );
  }

}
