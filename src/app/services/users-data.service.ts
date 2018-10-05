import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor( private http: HttpClient ) {}

  getUsersData() {
    return this.http.get('/api/usersData');
  }
}
