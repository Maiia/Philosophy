import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get('/api/questions');
  }



  getAnswers(): Observable<any> {
    return this.http.get('/api/questions_result');
  }

}
