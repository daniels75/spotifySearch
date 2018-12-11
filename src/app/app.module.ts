import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { ArtistComponent } from './artist/artist.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {SPOTIFY_PROVIDERS, SpotifyService} from "./spotify.service";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AlbumComponent,
    TrackComponent,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    {
      provide: SpotifyService, useClass: SpotifyService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
