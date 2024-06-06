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
    lastPlayed: IPlayed[],
    songs: ISong[],
    albums: IAlbumId[],
    playlist: ISong[],
    followed: IFollower[],
}

export interface IFollower{
    id:string,
    fullname: string
}

export interface IPlayed{
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