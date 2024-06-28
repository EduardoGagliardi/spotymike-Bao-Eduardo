import { EntityState,EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import * as ActionAlbums from '../action/album.action';
import { IAlbum } from "src/app/core/interfaces/album";

export interface AlbumState extends EntityState<IAlbum> {
    load: boolean;
    albums: IAlbum[]
}

export function selectUserId(a: IAlbum): string {
    //In this case this would be optional since primary key is id
    return a.id;
  }
  
  export function sortByTitle(a: IAlbum, b: IAlbum): number {
    return a.nom.localeCompare(b.nom);
  }
  export const adaptater: EntityAdapter<IAlbum> = createEntityAdapter<IAlbum>({
    selectId: selectUserId,
    sortComparer: sortByTitle,
  });


  //end sort
  export const initialState : AlbumState = adaptater.getInitialState({
    load: false,
    albums: [],
})

export const albumReducer = createReducer(
    initialState,
    on(ActionAlbums.loadingAlbums, (state) => ({...state, load: true})),
    on(ActionAlbums.loadedAlbums, (state) => ({...state, load: false})),
    on(ActionAlbums.loadAlbum, (state) => {
      // does not need define this event handler
      return {...state};
    }),
    on(ActionAlbums.addAlbums, (state, listAlbum: any) => ({
        ...state,
        albums: [...state.albums, listAlbum.albums],
      })),
    on(ActionAlbums.setAlbums, (state, listAlbum: any) => {
      return {
      ...state,
      albums: listAlbum.albums,
    }})
    );


// recupération
export const { selectAll } = adaptater.getSelectors();