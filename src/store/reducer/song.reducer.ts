import { ISong } from "src/app/core/interfaces/song";
import { EntityState,EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import * as ActionSOngs from '../action/song.action';

export interface SongState extends EntityState<ISong> {
    load: boolean;
}


export function selectUserId(a: ISong): string {
    //In this case this would be optional since primary key is id
    return a._id;
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
    load: false
})

export const songReducer = createReducer(
    initialState,
    on(ActionSOngs.loadSong, (state) => state),
    on(ActionSOngs.addSong, (state, listSong: any) => ({
        ...state,
        songs: listSong.songs,
      })));


// recupération
export const { selectAll } = adaptater.getSelectors();