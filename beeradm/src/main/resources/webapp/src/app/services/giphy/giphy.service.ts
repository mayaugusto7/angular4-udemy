import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';


@Injectable()
export class GiphyService {

  giphyApi = 'https://api.giphy.com/v1/gifs/search?api_key=0ed506d3df5b4f75bcd157b561becf12&q=beer&limit=4&offset=0&rating=G&lang=pt';

  constructor(public http: Http) {}

  get(searchTerm): Observable<any> {
    const apiLink = this.giphyApi + searchTerm;
    return this.http.request(apiLink).map((res: Response) => {
      const giphies = res.json().data;
      return giphies[0].images.original.url;
    });
  }
}
