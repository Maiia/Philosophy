import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../../services/blog.service';
import { AuthorsService } from '../../../../services/authors.service';
import { IBlog } from '../../../../interfaces/i-blog';
import { IAuthor } from '../../../../interfaces/i-author';

@Component({
  selector: 'app-blog-arrticle',
  templateUrl: './blog-arrticle.component.html',
  styleUrls: ['./blog-arrticle.component.scss']
})
export class BlogArrticleComponent implements OnInit {

  postId: number;
  post: IBlog;
  authorsArr: any;

  constructor(private ar: ActivatedRoute,
              private blogService: BlogService,
              private authorsService: AuthorsService) {}

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.postId = Number(param.id);
      this.blogService.getBlog().subscribe(
        (data: any) => {
          this.post = data.filter((item: IBlog) => item.id === this.postId)[0];
          this.authorsService.getAuthors().subscribe(
            (authors: IAuthor) => {
              this.authorsArr = authors;
            },
            err => console.error('err1', err),
            () => console.log('articles1', this.authorsArr)
          );
        },
        error => console.log('error', error),
        () => console.log('success', this.post)
      );
    });
  }

}
