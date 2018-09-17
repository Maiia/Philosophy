import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ArticlesService {

  constructor(private http: HttpClient) {
  }

  getArticles() {
    return this.http.get('assets/db.json');
  }
}

