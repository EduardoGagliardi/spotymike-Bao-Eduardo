export interface IAlbum {
    _id: string;
    nom: string;
    categ: string;
    label: string;
    cover: string;
    createdAt: Date;
    updatedAt: Date;
    songs: ISong[];
    artists: iartists[];
}

interface ISong{
    _id: string;
    title: string;
}

interface iartists{
    _id: string;
    fullname: string;
}