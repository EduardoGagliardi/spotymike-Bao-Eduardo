
export interface ILyric{
    couplet: string,
}

export interface IArtistSong{
    _id: string
    fullname: string,
}

export interface ISong{
    id: string,
    title: string,
    songUrl: string,
    cover: string,
    viewed: string
    createdAt: string
    updatedAt: string
    lyrics: ILyric[],
    artists: IArtistSong[],
}
