import { withInterceptorsFromDi } from "@angular/common/http";
import { ISong } from "./song";

type ERoleUser = "user"| "artist";

export interface IUser{
    // role: string,
    // isEmailVerified: boolean,
    // email: string,
    // id: string

    id: string,
    id_artist: string,
    fistname: string,
    lastname: string,
    email: string,
    tel?: string,
    sexe?: number,
    dateBirth: Date,
    createdAt: Date,
    updatedAt: Date,
    password: string,
    active: number,
    followers: number,
    lastPlayed: ISong[],
    songs: ISongs[],
    albums: IAlbums[],
    playlist: IPlaylists[],
    followed: IFollower[],
}

interface IPlaylists{
    id: string,
}

interface IAlbums{
    id: string,
}

interface ISongs{
    id: string,
}

export interface IFollower{
    id:string,
    fullname: string
}
export interface IPlaylist{
    id: string,
    title: string 
}
export interface IAlbum{
    id: string,
    name: string 
}
export interface IAccessToken{
    token: string,
    axprires: string | Date
}

export interface IToken{
    access: IAccessToken,
    refresh: IAccessToken
}