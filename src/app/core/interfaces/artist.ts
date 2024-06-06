import { IAlbumId } from "./user";

export interface IArtist{
    id: string,
    title: string,
    name: string,
    fullname: string,
    createdAt: Date,
    updatedAt: Date,
    follower: number,
    songs: ISongArtist[],
    albums: IAlbumId[],
}

export interface ISongArtist{
    id: string,
    title: string,
}