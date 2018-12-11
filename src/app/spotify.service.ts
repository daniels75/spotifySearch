import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Observable} from "rxjs";
import {Environment} from "./environments/environment";

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
    const
      authHeader: Headers = new Headers({
      'Authorization': `Bearer ${Environment.spotifyToken}`
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

