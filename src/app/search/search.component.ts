import {Component, OnInit} from '@angular/core';
import {Artist} from "../model/artist";

import 'rxjs/Rx';
import {SpotifyService} from "../spotify.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  results: Artist[] = [];

  constructor(private spotifyService: SpotifyService,
              private router: Router,
              private route: ActivatedRoute
  ) {
    // this is subscription for /search?query=deep
    // and fill this.query
    this.route
      .queryParams
      .subscribe(params => {
          this.query = params['query'] || '';
          console.log(`Route query: ${this.query}`);
        }
      );

  }

  ngOnInit() {
  }

  makeSearch(search: string) {
    // navigates from /search to /search?query={search}
    this.router.navigate(['search'], { queryParams: { query: search } })
      .then(_ => this.doSearch(search) );
  }
  doSearch(search: string) {
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
        artist.id = item.id;
        artist.name = item.name;
        artist.artistId = item.artists[0].id;
        artist.artistName = item.artists[0].name;
        artist.trackNumber = item.track_number;
        artist.imageUrl = item.album.images[1].url;
        artist.albumId  = item.album.id;
        artist.albumName = item.album.name;

        this.results.push(artist);
        console.log('artist: ', artist);

      });
    }
  }

}
