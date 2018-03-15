import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Complement } from './complement';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ComplementService {

  constructor(private http: HttpClient) { }

  private complementUrl = 'api/complements';

  getComplements(): Observable<Complement[]>{
    return this.http.get<Complement[]>(this.complementUrl);

  }

}

