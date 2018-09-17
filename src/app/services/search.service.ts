import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BlogService } from './blog.service';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  public status: BehaviorSubject<any> = new BehaviorSubject<any>('');

  constructor(private http: HttpClient) {}

  display(value: string) {
    this.searchBlog(value).subscribe(data => {
      this.status.next(data);
    });
  }

  searchBlog(searchVal) {
    return this.http.get('assets/db.json').pipe(
      map(data => {
        const blogData = data['blog'];

        const filtered = blogData.filter((blogItem: any) => {
            return blogItem.title.toLowerCase().indexOf(searchVal.toLowerCase()) > -1;
          }
        );
        return {'result': filtered, 'searchVal': searchVal};
      })
    );
  }

}
