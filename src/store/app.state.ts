import { EntityState } from "@ngrx/entity";
//import { IPlaylist } from "src/app/core/interfaces/playlist";
import { SongState } from "./reducer/song.reducer";
import { AlbumState } from "./reducer/album.reducer";
import { UserState } from "./reducer/user.reducer";
import { ArtistState } from "./reducer/artist.reducer";
import { PlaylistState } from "./reducer/playlist.reducer";

export interface AppState{
    songs : SongState;
    albums : AlbumState;
    users : UserState;
    artists: ArtistState;
    playlists: PlaylistState;
}