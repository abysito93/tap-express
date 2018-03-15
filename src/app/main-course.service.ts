import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { MainCourse } from './main-course';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MainCourseService {

  constructor(private http: HttpClient) { }

  private mainCourseUrl = 'api/mainCourses';

  getMainCourse(): Observable<MainCourse[]> {
    return this.http.get<MainCourse[]>(this.mainCourseUrl);
  }

}