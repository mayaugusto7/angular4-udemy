import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

@Injectable()
export class BeerService {
  public API = 'http://localhost:8080';
  public BEER_API = this.API + '/beers';

  constructor(public http: Http) {}

  getGoodBeers(): Observable<any> {
    return this.http.get(this.API + '/good-beers')
      .map((response: Response) => response.json());
  }
}
