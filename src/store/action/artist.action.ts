import { createAction, props } from '@ngrx/store';
import { IArtist } from 'src/app/core/interfaces/artist';


export const GET_PRE_ARTIST_TYPES = {
    GET_ARTIST : 'GET_ARTIST_FROM_API',
    SET_ARTIST: 'SET_ARTIST',
    LOADING_ARTIST: 'LOADING_ARTIST',
    LOADED_ARTIST: 'LOADED_ARTIST' 
};

export const loadArtist = createAction(GET_PRE_ARTIST_TYPES.GET_ARTIST);
export const setArtists = createAction(GET_PRE_ARTIST_TYPES.SET_ARTIST, props<{ artists: IArtist[] }>());
export const loadingArtists = createAction(GET_PRE_ARTIST_TYPES.LOADING_ARTIST);
export const loadedArtists = createAction(GET_PRE_ARTIST_TYPES.LOADED_ARTIST);