import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SpotifyService} from "../spotify.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  id: any;
  artist: any;

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private spotifyService: SpotifyService) {
    activatedRoute.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.showResults(this.id);
      }
    )
  }

  ngOnInit() {
  }

  showResults(id: any): void {
      this.spotifyService.findArtist(id).subscribe(
        (results: any) => this.renderArtist(results)
      )
  }

  renderArtist(results: any): void {
    this.artist = results;
  }

  back() :void {
    this.location.back();
  }
}
