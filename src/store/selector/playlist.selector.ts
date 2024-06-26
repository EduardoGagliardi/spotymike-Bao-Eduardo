import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PlaylistState } from "../reducer/playlist.reducer";

export const selectPlaylists = (state: AppState) => state.playlists; 

export const selectPlaylistList = createSelector(
    selectPlaylists, 
    (state: PlaylistState) => state.playlists
);
