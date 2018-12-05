import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {ArtistComponent} from "./artist/artist.component";
import {TrackComponent} from "./track/track.component";
import {AlbumComponent} from "./album/album.component";

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'artist', component: ArtistComponent},
  {path: 'track', component: TrackComponent},
  {path: 'album', component: AlbumComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
