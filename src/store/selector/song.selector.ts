import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { SongState, selectAll } from "../reducer/song.reducer";

export interface FeatureState {
    load: boolean;
}

export const selectStore = (state: AppState) => state.songs;

export const selectStoreList = createSelector(selectStore, selectAll);
