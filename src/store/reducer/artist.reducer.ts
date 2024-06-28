import { EntityState,EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import * as ActionArtists from '../action/artist.action';
import { IArtist } from "src/app/core/interfaces/artist";

export interface ArtistState extends EntityState<IArtist> {
    load: boolean;
    artists: IArtist[]
}

export function selectArtistId(a: IArtist): string {
    //In this case this would be optional since primary key is id
    return a.id;
  }
  
  export function sortByName(a: IArtist, b: IArtist): number {
    return a.name.localeCompare(b.name);
  }

  export const adaptater: EntityAdapter<IArtist> = createEntityAdapter<IArtist>({
    selectId: selectArtistId,
    sortComparer: sortByName,
  });


  //end sort
  export const initialState : ArtistState = adaptater.getInitialState({
    load: false,
    artists: [],
})

export const ArtistReducer = createReducer(
    initialState,
    on(ActionArtists.loadingArtists, (state) => ({...state, load: true})),
    on(ActionArtists.loadedArtists, (state) => ({...state, load: false})),
    on(ActionArtists.loadArtist, (state) => {
      // does not need define this event handler
     // console.log('load Artist')
      return {...state};
    }),
    on(ActionArtists.setArtists, (state, listArtist: any) => {
      return {
      ...state,
      artists: listArtist.artists,
    }})
    );


// recupération
export const { selectAll } = adaptater.getSelectors();