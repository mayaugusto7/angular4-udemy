import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class BeerService {

  constructor(private http: Http) { }

    getAll(): Observable <any> {
      return this.http.get('http://localhost:8080/good-beers').map((response: Response) => response.json());
    }

}
