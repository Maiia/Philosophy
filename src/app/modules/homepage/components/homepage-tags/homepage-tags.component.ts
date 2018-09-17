import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../../../services/blog.service';

@Component({
  selector: 'app-homepage-tags',
  templateUrl: './homepage-tags.component.html',
  styleUrls: ['./homepage-tags.component.scss']
})

export class HomepageTagsComponent implements OnInit {

  tags: any;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getTags().subscribe(data => {
      this.tags = data;
    });
  }

}
