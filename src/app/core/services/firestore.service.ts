import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  limit,
  query,
  where,
  orderBy,
} from 'firebase/firestore/lite';

import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private app = initializeApp(environment.firebase);
  private db = getFirestore(this.app);

  // Get a list of cities from your database
  async getAlbums() {
    const albumsCol = collection(this.db, 'albums');
    const albumsSnapshot = await getDocs(albumsCol);
    const albumsList = albumsSnapshot.docs.map((doc) => doc.data());
    console.log(albumsList);
    return albumsList;
  }

  async getAllSongs() {
    const songCol = collection(this.db, 'songs');
    const songsSnapshot = await getDocs(songCol);
    const songList = songsSnapshot.docs.map((doc) => doc.data());
    console.log(songList);
    return songList;
  }

  async getTopSongs() {
    const songCol = collection(this.db, 'songs');
    const q = query(songCol, orderBy('viewed', 'desc') , limit(10));
    const songsSnapshot = await getDocs(q);
    const songList = songsSnapshot.docs.map((doc) => doc.data());
    return songList;
  }

  async getArtists() {
    const artistCol = collection(this.db, 'artists');
    const artistsSnapshot = await getDocs(artistCol);
    const artistList = artistsSnapshot.docs.map((doc) => doc.data());
    console.log(artistList);
    return artistList;
  }

  async getAlbums2() {
    const albumsCol = collection(this.db, 'albums');
    const q = query(albumsCol, where('artist.name', '==', 'Mike'), limit(3));
    const albumsSnapshot = await getDocs(q);
    const albumsList = albumsSnapshot.docs.map((doc) => doc.data());
    console.log(albumsList);
    return albumsList;
  }

  constructor() {}
}
