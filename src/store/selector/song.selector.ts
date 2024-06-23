import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { SongState } from "../reducer/song.reducer";

export const selectSong = (state: AppState) => state.songs; // get SongState

export const selectStoreList = createSelector(
    selectSong, 
    (state: SongState) => state.songs
);
