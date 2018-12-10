import {Component, Input, OnInit} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {HttpClient} from "@angular/common/http";
import {Artist} from "../model/artist";

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  static BASE_URL: string = 'https://api.spotify.com/v1/';
  results: Artist[] = [];
  constructor(private http: Http) { }

  ngOnInit() {
  }

  makeSearch(search: string) {
    this.results = [];

    console.log('search value: ', search);
    let query: string = SearchComponent.BASE_URL + 'search?q=' + search + '&type=track&market=US&limit=10&offset=5'


    const headers: Headers = new Headers({'Content-Type': 'application/json'});
    const token: string = 'BQDka7W7YoBahfjQzj8qpW8AeNM-o7bujobencGtEl_bnXlrMK3OSWVsjwK2Ct16JZJoq8nRqW40t22EvTXQDABbPt7oIHp8x0hU8k4RZTfF9PPMNRi_S5bwrJCM2DfFq3i1ET-2quEhP6b2Q46Jv7Gjnz_5UxCs';
    const authKey: string = 'Bearer ' + token;
    const authHeader: Headers = new Headers({'Authorization': authKey})
    const options: RequestOptions = new RequestOptions({headers: authHeader});

    this.http.request(query, options).map(response => response.json())
      .subscribe(
      (queryResults: Object) => {
        console.log('Results: ', queryResults);

        queryResults['tracks'].items.map(item => {
          let artist: Artist = new Artist();
          artist.name = item.name;
          artist.id = item.id;
          artist.trackNumber = item.track_number;
          artist.imageUrl = item.album.images[0];

          this.results.push(artist);
          console.log('artist: ', artist);

        });

      },
      (error: any) => {console.log('Error when trying to retrieve values. ', error)},
      () => {console.log('Request complete.')}

    )
  }

}
