export interface Playlist {
    _id: string;
    title: string;
    followed: number;
    cover: string;
    owner: string;
    createdAt: Date;
    updatedAt: Date;
    song: Isong[];
}

interface Isong {
    _id: string;
    title: string;
}