import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";

// we can use @Injectable() + declaration in app.module.ts in the section [providers]
@Injectable()
// or we can do like follow
/*
@Injectable({
  providedIn: 'root'
})
*/
export class SpotifyService {
  static BASE_URL: string = 'https://api.spotify.com/v1';

  constructor(private http: Http) {

  }

  makeQuery(url: string, searchParams: string[]): Observable<any[]> {
    console.log(`searchParams:  ${searchParams}`);
    let queryUrl: string = `${SpotifyService.BASE_URL}${url}`;
    if (searchParams) {
      queryUrl = `${queryUrl}?${searchParams.join('&')}`
    }
    const token: string = 'BQB9YDi1oB0D0mfh8lG7oOMZWifFvCl_-O6QGe57zj7j5HqVhrspawIosqSMCc2pOYqNmoE95YQL6N6k2VfB6ap5wYy523fEzAVBdQ-IRaP2GPvZ6FMEVf5e9kLHcJ_N8RB2g7d0uKHLBEX6zscHS56jdBolGB9y';
    const authHeader: Headers = new Headers({
      'Authorization': `Bearer ${token}`
    })
    const options: RequestOptions = new RequestOptions({
      headers: authHeader
    });

    return this.http.request(queryUrl, options).map(response => response.json())
  }

  // Generic Search service
  // example
  // https://api.spotify.com/v1/search?query=deep+purple&type=track&market=US&offset=5&limit=10",
  search(query: string, type: string): Observable<any[]> {
    let searchParams: string[]  = [
      `q=${query}`,
      `type=${type}`
    ]
    return this.makeQuery('/search', searchParams);
  }

  findTrack(query: string): Observable<any[]> {
    return this.search(query, 'track')
  }

}

