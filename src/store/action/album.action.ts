import { createAction, props } from '@ngrx/store';
import { IAlbum } from 'src/app/core/interfaces/album';
import { ISong } from 'src/app/core/interfaces/song';


export const GET_PRE_ALBUM_TYPES = {
    GET_ALBUM : 'GET_ALBUMS_FROM_API',
    ADD_ALBUM : 'ADD_ALBUMS',
    SET_ALBUM : 'SET_ALBUMS',
    LOADING_ALBUM : 'LOADING_ALBUM',
    LOADED_ALBUM : 'LOADED_ALBUM'
};

export const loadAlbum = createAction(GET_PRE_ALBUM_TYPES.GET_ALBUM);
export const addAlbums = createAction(GET_PRE_ALBUM_TYPES.ADD_ALBUM, props<{ albums: IAlbum[] }>());
export const setAlbums = createAction(GET_PRE_ALBUM_TYPES.SET_ALBUM, props<{ albums: IAlbum[] }>());
export const loadingAlbums = createAction(GET_PRE_ALBUM_TYPES.LOADING_ALBUM);
export const loadedAlbums = createAction(GET_PRE_ALBUM_TYPES.LOADED_ALBUM);