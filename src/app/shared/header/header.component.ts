import {Component, OnInit} from '@angular/core';
import { AllService } from '../../services/all.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { IBlog } from '../../interfaces/i-blog';


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
    private allService: AllService,
    private modalService: NgbModal,
    private searchService: SearchService,
    config: NgbModalConfig ) {

    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
    this.allService.getData().subscribe(
      data => {
        this.blogArr = data['blog'];
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
