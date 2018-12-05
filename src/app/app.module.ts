import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { ArtistComponent } from './artist/artist.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
