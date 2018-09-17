import { Component, ElementRef, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { BlogService } from '../../../../services/blog.service';
import { PhrasesService } from '../../../../services/phrases.service';
import { NgMasonryGridComponent } from 'ng-masonry-grid';
import { IBlog } from '../../../../interfaces/i-blog';
import { IPhrases } from '../../../../interfaces/i-phrases';

@Component({
  selector: 'app-masonry-blog',
  templateUrl: './masonry-blog.component.html',
  styleUrls: ['./masonry-blog.component.scss']
})

export class MasonryBlogComponent implements OnInit {

  blogItems: any[];
  blogItemsPaginated: [IBlog, IPhrases];

  @ViewChild(NgMasonryGridComponent) componentRef?: NgMasonryGridComponent;

  constructor(
    private blogService: BlogService,
    private phrasesService: PhrasesService
  ) {}

  ngOnInit() {
    this.blogService.getBlog().subscribe (
      blogItems => {
        const blogArr = blogItems['blog'];

        this.phrasesService.getPhrases().subscribe(
          arr => {
            this.includePhrases(arr['phrases'], blogArr);
          },
          err => {},
          () => {}
        );
      },
      err => {},
      () => {}
    );

  }

  includePhrases(phrases: Array<IPhrases>, blogArr: [IBlog, IPhrases]) {
    const arr = [...blogArr];
    if (arr.length > 2 && phrases.length > 0) {
      for (let i = 1; i < arr.length; i = i + 8) {
        arr.splice(i, 0, phrases.shift());
      }
    }

    this.blogItems = arr;
    console.log('gav', this.blogItems);
  }

  itemsArrPaginated(blogArr: [IBlog, IPhrases]) {
    this.componentRef._msnry.items = [];
    this.blogItemsPaginated = blogArr;
  }

}
