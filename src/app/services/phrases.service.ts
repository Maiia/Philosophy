import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PhrasesService {

  constructor( private http: HttpClient) {
    this.getPhrases();
  }

  getPhrases() {
    return this.http.get('/api/phrases');
  }
}
