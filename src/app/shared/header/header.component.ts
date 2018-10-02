import {Component, OnInit} from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { IBlog } from '../../interfaces/i-blog';
import { BlogService } from '../../services/blog.service';


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

  constructor(
    private router: Router,
    private blogService: BlogService,
    private modalService: NgbModal,
    private searchService: SearchService,
    config: NgbModalConfig ) {

    config.backdrop = 'static';
    config.keyboard = false;
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

}
