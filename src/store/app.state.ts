import { EntityState } from "@ngrx/entity";
import { IPlaylist } from "src/app/core/interfaces/playlist";
import { ISong } from "src/app/core/interfaces/song";

export interface AppState{
    songs : EntityState<ISong>;
    playlists : IPlaylist[];
}