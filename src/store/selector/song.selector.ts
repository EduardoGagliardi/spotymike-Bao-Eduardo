import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { SongState } from "../reducer/song.reducer";
import { selectUser } from "./user.selector";
import { UserState } from "../reducer/user.reducer";
import { IUser } from "src/app/core/interfaces/user";
import { ISong } from "src/app/core/interfaces/song";

export const selectSong = (state: AppState) => state.songs; // get SongState

export const selectAllSongs = createSelector(
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

export const selectLastPlayed = createSelector(
    selectSong, 
    selectUser,
    (state: SongState, users: UserState) => {
        const currentUser = users.currentUser;
        
        // Check if currentUser and currentUser.lastPlayed are defined
        if (!currentUser || !currentUser.lastPlayed) {
          return [];
        }
        console.log(currentUser.lastPlayed)
        return state.songs.filter((song: ISong) => {
            return users.currentUser.lastPlayed.filter(elm =>elm.id === song.id).length > 0;
        })
    }
);