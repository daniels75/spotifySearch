import {Component, OnInit} from '@angular/core';
import {Headers, Http, RequestOptions} from "@angular/http";
import {Artist} from "../model/artist";

import 'rxjs/Rx';
import {SpotifyService} from "../spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: Artist[] = [];
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  makeSearch(search: string) {
    this.results = [];
    if (!search) {
      return;
    }

    console.log('search value: ', search);
    this.spotifyService.findTrack(search)
      .subscribe(
      (queryResults: any) => {
        console.log('Results: ', queryResults);
        this.renderResults(queryResults);
      },
      (error: any) => {console.log('Error when trying to retrieve values. ', error)},
      () => {console.log('Request complete.')}

    )
  }

  renderResults(queryResults: any): void {
    this.results = [];
    if (queryResults && queryResults.tracks && queryResults.tracks.items) {
      let resultItems: any = queryResults.tracks.items;
      resultItems.map(item => {
        let artist: Artist = new Artist();
        artist.name = item.name;
        artist.id = item.id;
        artist.trackNumber = item.track_number;
        artist.imageUrl = item.album.images[0];

        this.results.push(artist);
        console.log('artist: ', artist);

      });
    }
  }

}
