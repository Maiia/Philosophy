import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AllService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('assets/db.json');
  }
}
