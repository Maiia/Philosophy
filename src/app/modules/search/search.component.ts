import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent implements OnInit {
  searchText: string;
  searchResults: Array<Object>;
  authorsArr: Array<Object>;

  constructor(
    private searchService: SearchService,
    private authorsService: AuthorsService) {
    this.searchResults = [{}];
  }

  ngOnInit() {
    this.searchService.status.subscribe((searchResObj = null) => {
      console.log(111, searchResObj);

      this.searchResults = searchResObj.result;
      this.searchText = searchResObj.searchVal

      this.authorsService.getAuthors().subscribe(
        authors => {
          this.authorsArr = authors['authors'];
        },
        err => console.error('err1', err),
        () => console.log('success', this.authorsArr)
      );
    });
  }

  onSearchInput(evt) {
    this.searchText = evt.target.value;
  }

  onSearchClick(evt) {
    evt.preventDefault();
    this.searchService.searchBlog(this.searchText).subscribe(data => this.searchResults = data.result);
  }

}
