import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Sandwich } from './sandwich';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class SandwichService {

  constructor(private http: HttpClient) { }

  private sandwichesUrl = 'api/sandwiches';

  getSandwiches(): Observable<Sandwich[]> {
    return this.http.get<Sandwich[]>(this.sandwichesUrl);
  }

}
