import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SpotifyService} from "../spotify.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  private id: any;
  private track: any;


  constructor(private activatedRoute: ActivatedRoute,
              private spotifyService: SpotifyService,
              private location: Location) {
    this.activatedRoute.params.subscribe(
      (params: any) => this.showParams(params)
    );
    this.activatedRoute.paramMap.subscribe(
    (params: any) => this.showMap(params)
    );
  }

  showParams(params: any): void{
    console.log(`params: ${params}`);

    this.spotifyService.findTracks(params['id']).subscribe(
      (results: any) => {
        console.log(`Track results: ${results}`)
        this.renderTrack(results);
      }
    )
  }

  renderTrack(results: any): void {
    this.track = results;
  }
  showMap(params: any): void{
    console.log(`params: ${params}`);
  }

  back(): void {
    this.location.back();
  }

  ngOnInit() {
  }
  

}


