
export interface ILyric{
    couplet: string,
}

export interface IArtist{
    _id: string
    fullname: string,
}

export interface ISong{
    _id: string,
    title: string,
    songUrl: string,
    cover: string,
    viewed: string
    createdAt: string
    updatedAt: string
    lyrics: ILyric[],
    artists: IArtist[],
}
