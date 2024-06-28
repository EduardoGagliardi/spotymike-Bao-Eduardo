import { EntityState,EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import * as ActionPlaylists from '../action/playlist.action';
import { IPlaylist } from "src/app/core/interfaces/playlist";

export interface PlaylistState extends EntityState<IPlaylist> {
    load: boolean;
    playlists: IPlaylist[];
    currentPlaylist: IPlaylist;
}

export function selectPlaylistId(a: IPlaylist): string {
    //In this case this would be optional since primary key is id
    return a._id;
  }
  
  export function sortByTitle(a: IPlaylist, b: IPlaylist): number {
    return a.title.localeCompare(b.title);
  }

  export const adaptater: EntityAdapter<IPlaylist> = createEntityAdapter<IPlaylist>({
    selectId: selectPlaylistId,
    sortComparer: sortByTitle,
  });


  //end sort
  export const initialState : PlaylistState = adaptater.getInitialState({
    load: false,
    playlists: [],
    currentPlaylist: {} as IPlaylist
})

export const PlaylistReducer = createReducer(
    initialState,
    on(ActionPlaylists.loadingPlaylists, (state) => ({...state, load: true})),
    on(ActionPlaylists.loadedPlaylists, (state) => ({...state, load: false})),
    on(ActionPlaylists.loadPlaylist, (state) => {
      // does not need define this event handler
      //console.log('load Playlist')
      return {...state};
    }),
    on(ActionPlaylists.setPlaylists, (state, listPlaylist: any) => {
      return {
      ...state,
      playlists: listPlaylist.playlists,
    }})
    );


// recupération
export const { selectAll } = adaptater.getSelectors();