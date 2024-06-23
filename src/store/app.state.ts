import { EntityState } from "@ngrx/entity";
//import { IPlaylist } from "src/app/core/interfaces/playlist";
import { ISong } from "src/app/core/interfaces/song";
import { SongState } from "./reducer/song.reducer";

export interface AppState{
    songs : SongState;
}