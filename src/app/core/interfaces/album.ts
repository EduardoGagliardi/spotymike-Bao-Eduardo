import { ISongArtist } from "./artist";
import { IArtistSong } from "./song";

export interface IAlbum{
    id: string,
    nom: string,
    categ: string,
    label: string,
    cover: string,
    createdAt: Date,
    updatedAt: Date,
    songs: ISongArtist[],
    artists: IArtistSong[]
}