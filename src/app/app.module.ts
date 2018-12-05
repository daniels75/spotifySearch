import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AlbumComponent } from './album/album.component';
import { TrackComponent } from './track/track.component';
import { ArtistComponent } from './artist/artist.component';
import {RouterModule, Routes} from "@angular/router";

const routs: Routes = [
  {path: 'search', component: SearchComponent},
  {path: 'artist', component: ArtistComponent},
  {path: 'track', component: TrackComponent},
  {path: 'album', component: AlbumComponent}
]

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
    RouterModule.forRoot(routs)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
