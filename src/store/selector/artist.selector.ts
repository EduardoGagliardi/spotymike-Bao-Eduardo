import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { ArtistState } from "../reducer/artist.reducer";
import { UserState } from "../reducer/user.reducer";
import { IArtist } from "src/app/core/interfaces/artist";

export const selectArtists = (state: AppState) => state.artists; 
export const selectUsers = (state: AppState) => state.users; 

export const selectArtistList = createSelector(
    selectArtists, 
    (state: ArtistState) => state.artists
);

export const selectArtistFollowedList = createSelector(
    selectArtists,
    selectUsers,
    (state: ArtistState, users: UserState) => {
        console.log(users.currentUser.followed);
        return state.artists.filter((artist: IArtist) => {
            return users.currentUser.followed.filter(elm => elm.id === artist.id).length > 0;
        })
    }
)