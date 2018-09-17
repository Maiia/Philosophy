import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { AuthorsService } from '../../services/authors.service';
import {IBlog} from '../../interfaces/i-blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

export class BlogComponent implements OnInit {

  blogArrAll: Array<Object>;
  blogArrTagged: Array<Object>;
  blogArrPaginated: Array<Object>;
  authorsArr: Array<Object>;
  tags: any;
  tagsArr: Array<String>;

  constructor(
    private cdRef: ChangeDetectorRef,
    private blogService: BlogService,
    private authorsService: AuthorsService) {
    this.tagsArr = [];
  }

  ngOnInit() {
    this.blogService.getBlog().subscribe(
      data => {
        this.blogArrAll = data['blog'];

        this.blogArrTagged = [{}];
        Object.assign(this.blogArrTagged, this.blogArrAll);

        this.authorsService.getAuthors().subscribe(
          authors => {
            this.authorsArr = authors['authors'];
          },
          err => console.error('err1', err),
          () => console.log('articles1', this.authorsArr)
        );
      },
      error => console.log('error', error),
      () => console.log('success blog')
    );

    this.blogService.getTags().subscribe(data => {
      this.tags = data;
    });
  }

  getBlogArrPaginated(arr) {
    this.blogArrPaginated = arr;
    this.cdRef.detectChanges();
  }

  onTagClick(evt) {
    if (this.tagsArr.indexOf(evt.target.innerText) > -1) {
      this.tagsArr.splice(Number(this.tagsArr.indexOf(evt.target.innerText)), 1);
    } else {
      this.tagsArr.push(evt.target.innerText);
    }

    const arr = [];
    this.tagsArr.forEach((tag: string) => {
      arr.push(...this.blogArrAll.filter((item: IBlog) => {
        return item['tags'].indexOf(tag) > -1;
        })
      );
    });

    this.blogArrTagged = Array.from(new Set(arr).values());
  }

}
