import { Timestamp } from "firebase/firestore/lite";
import { ISongArtist } from "./artist";
import { IArtistSong } from "./song";

export interface IAlbum{
    id: string,
    nom: string,
    categ: string,
    label: string,
    cover: string,
    createdAt: Timestamp,
    updatedAt: Timestamp,
    songs: ISongArtist[],
    artists: IArtistSong[]
}