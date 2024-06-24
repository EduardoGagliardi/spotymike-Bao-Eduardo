import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { SongState } from "../reducer/song.reducer";

export const selectSong = (state: AppState) => state.songs; // get SongState

export const selectStoreList = createSelector(
    selectSong, 
    (state: SongState) => state.songs
);
export const selectTopSongStore = createSelector(
    selectSong, 
    (state: SongState) => {
        return [...state.songs]
        .sort((a, b) =>parseInt(b.viewed) - parseInt(a.viewed)) // Sort songs by 'viewed' count in descending order
        .slice(0, 10); // Return the top 10 songs
    }
);