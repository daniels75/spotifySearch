import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {SpotifyService} from "../spotify.service";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: any;

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
    this.spotifyService.findAlbum(id).subscribe(
      (results: any) => this.renderAlbum(results)
    )
  }

  renderAlbum(results: any): void {
    this.album = results;
  }

  back() :void {
    this.location.back();
  }
}
