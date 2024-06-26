import { createAction, props } from '@ngrx/store';
import { IPlaylist } from 'src/app/core/interfaces/playlist';

export const GET_PRE_PLAYLIST_TYPES = {
    GET_PLAYLIST : 'GET_PLAYLIST_FROM_API',
    SET_PLAYLIST: 'SET_PLAYLIST',
    LOADING_PLAYLIST: 'LOADING_PLAYLIST',
    LOADED_PLAYLIST: 'LOADED_PLAYLIST' 
};

export const loadPlaylist = createAction(GET_PRE_PLAYLIST_TYPES.GET_PLAYLIST);
export const setPlaylists = createAction(GET_PRE_PLAYLIST_TYPES.SET_PLAYLIST, props<{ playlists: IPlaylist[] }>());
export const loadingPlaylists = createAction(GET_PRE_PLAYLIST_TYPES.LOADING_PLAYLIST);
export const loadedPlaylists = createAction(GET_PRE_PLAYLIST_TYPES.LOADED_PLAYLIST);