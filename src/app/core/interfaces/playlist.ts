export interface IPlaylist {
    id: string;
    title: string;
    followed: number;
    cover: string;
    owner: string;
    createdAt: Date;
    updatedAt: Date;
    song: Isong[];
}

interface Isong {
    id: string;
    title: string;
}