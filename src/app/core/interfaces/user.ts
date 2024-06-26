import { withInterceptorsFromDi } from "@angular/common/http";

type ERoleUser = "user"| "artist";

export interface IUser{
    // role: string,
    // isEmailVerified: boolean,
    // email: string,
    // id: string

    id: string,
    id_artist: string,
    firstname: string,
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
    lastPlayed: IPlayed[],
    songs: ISongs[],
    albums: IAlbumId[],
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

 interface IFollower{
    id:string,
    fullname: string
}

 interface IPlayed{
    id: string,
    name: string,
}

export interface IPlaylist{
    id: string,
    title: string 
}
export interface IAlbumId{
    date: string | number | Date;
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