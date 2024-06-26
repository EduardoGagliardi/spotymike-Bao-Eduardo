import { createAction, props } from '@ngrx/store';
import { ISong } from 'src/app/core/interfaces/song';


export const GET_PRE_SONGS_TYPES = {
    GET_SONG : 'GET_SONGS_FROM_API',
};

export const loadSong = createAction(GET_PRE_SONGS_TYPES.GET_SONG);
export const addSongs = createAction('Add Songs', props<{ songs: ISong[] }>());
export const setSongs = createAction('Set Songs', props<{ songs: ISong[] }>());
export const loadingSongs = createAction('Loading Song');
export const loadedSongs = createAction('Loaded Song');