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
    return this.http.get('assets/db.json');
  }

  getTags() {
    return this.http.get('assets/db.json').pipe(
      map(data => {
        const tagsList = data['blog'];
        const tags = [];

        tagsList.forEach((blogItem: any) =>
          tags.push(...blogItem.tags)
        )
        return new Set(tags);
      })
    );
  }

}
