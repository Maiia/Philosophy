import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class BlogService {

  constructor(private http: HttpClient) {
    this.getBlog();
  }

  getBlog() {
    return this.http.get('/api/blog');
  }

  getTags() {
    return this.http.get('/api/blog').pipe(
      map((data: any) => {
        const tagsList = data;
        const tags = [];
        console.log('TAAAGS', data, typeof tagsList);

        data.forEach((blogItem: any) =>
          tags.push(...blogItem.tags)
        )
        // console.log('TAAAGS2', tags);
        return new Set(tags);
      })
    );
  }

}
