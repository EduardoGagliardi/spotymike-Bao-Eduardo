import { createAction, props } from '@ngrx/store';
import { ISong } from 'src/app/core/interfaces/song';

export const loadSong = createAction('Load Song');
export const addSong = createAction('Add Song', props<{ songs: ISong[] }>());
