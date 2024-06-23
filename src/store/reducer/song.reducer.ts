import { ISong } from "src/app/core/interfaces/song";
import { EntityState,EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import * as ActionSongs from '../action/song.action';

export interface SongState extends EntityState<ISong> {
    load: boolean;
    songs: ISong[]
}

export function selectUserId(a: ISong): string {
    //In this case this would be optional since primary key is id
    return a.id;
  }
  
  export function sortByTitle(a: ISong, b: ISong): number {
    return a.title.localeCompare(b.title);
  }
  export const adaptater: EntityAdapter<ISong> = createEntityAdapter<ISong>({
    selectId: selectUserId,
    sortComparer: sortByTitle,
  });


  //end sort
  export const initialState : SongState = adaptater.getInitialState({
    load: false,
    songs: [],
})

export const songReducer = createReducer(
    initialState,
    on(ActionSongs.loadingSongs, (state) => ({...state, load: true})),
    on(ActionSongs.loadedSongs, (state) => ({...state, load: false})),
    on(ActionSongs.loadSong, (state) => {
      // does not need define this event handler
      console.log('load song')
      return {...state};
    }),
    on(ActionSongs.addSongs, (state, listSong: any) => ({
        ...state,
        songs: [...state.songs, listSong.songs],
      })),
    on(ActionSongs.setSongs, (state, listSong: any) => {
      console.log(listSong)
      return {
      ...state,
      songs: listSong.songs,
    }})
    );


// recupération
export const { selectAll } = adaptater.getSelectors();