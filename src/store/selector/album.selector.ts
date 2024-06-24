import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { AlbumState } from "../reducer/album.reducer";

export const selectAlbum = (state: AppState) => state.albums;

export const selectAlbumStoreList = createSelector(
    selectAlbum, 
    (state: AlbumState) => state.albums
);

export const selectSortAlbumStore = createSelector(
    selectAlbum, 
    (state: AlbumState) => 
         [...state.albums].sort((a, b) => new Date(b.createdAt.seconds*1000).getTime() - new Date(a.createdAt.seconds*1000).getTime())    
);

export const selectTopAlbumStore = createSelector(
    selectAlbum, 
    (state: AlbumState) => {
        return [...state.albums].sort((a, b) => new Date(b.createdAt.seconds*1000).getTime() - new Date(a.createdAt.seconds*1000).getTime())[0]    

    }
);
