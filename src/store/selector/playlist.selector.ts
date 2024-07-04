import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { PlaylistState } from "../reducer/playlist.reducer";
import { UserState } from "../reducer/user.reducer";
import { IUser } from "src/app/core/interfaces/user";
import { IPlaylist } from "src/app/core/interfaces/playlist";

export const selectPlaylists = (state: AppState) => state.playlists; 
export const selectUsers =(state: AppState) => state.users;

export const selectPlaylistList = createSelector(
    selectPlaylists, 
    (state: PlaylistState) => state.playlists
);

export const selectMyPlaylist = createSelector(
    selectPlaylists,
    selectUsers,
    (state: PlaylistState, users: UserState) => {
        const currentUser = users.currentUser as IUser
        return state.playlists.filter((playlist: IPlaylist) => {
            return users.currentUser.playlist.filter(elm => elm.id === playlist.id).length > 0
        });
    }
)