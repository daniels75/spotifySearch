import {SpotifyAPIKey, SpotifyToken} from "./spotifyApiKey";


export const Environment = {
  production: false,
  // please go to https://developer.spotify.com/console/get-search-item/
  // and generate you temporary SpotifyToken and then place it in the spotifyApiKy
  spotifyToken: SpotifyToken,
  spotifyApiKey: SpotifyAPIKey
}
