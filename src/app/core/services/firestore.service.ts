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
  doc,
  setDoc,
} from 'firebase/firestore/lite';

import { environment } from '../../../environments/environment.prod';
import { IPlaylist } from '../interfaces/playlist';
import { IArtist } from '../interfaces/artist';
import { IUser } from '../interfaces/user';
import { ISong } from '../interfaces/song';
import { from } from 'rxjs';
import { IAlbum } from '../interfaces/album';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private app = initializeApp(environment.firebase);
  private db = getFirestore(this.app);

  async getAUser(email: string) {
    const userCol = collection(this.db, 'Users');
    const q = query(userCol, where('email', '==', email));
    const userSnapshot = await getDocs(q);
    const users = userSnapshot.docs.map((doc) => doc.data());
    return users[0];
  }

  async getAllUser() {
    const userCol = collection(this.db, 'Users');
    const userSnapshot = await getDocs(userCol);
    const users = userSnapshot.docs.map((doc) => doc.data());
    return users;
  }
  getUsers() {
    const userCol = collection(this.db, 'Users');
    return from(getDocs(userCol).then((snapshot) => {
      return snapshot.docs.map((doc) => doc.data() as IUser)
    }));
  }
  // Create a user
  async createUser(user: IUser) {
    const userDoc = doc(this.db, 'Users', user.id);
    await setDoc(userDoc, user);
  }

  // Get a list of cities from your database
  async getAlbums() {
    const albumsCol = collection(this.db, 'albums');
    const albumsSnapshot = await getDocs(albumsCol);
    const albumsList = albumsSnapshot.docs.map((doc) => doc.data());
    return albumsList;
  }

  getAllAlbums() {
    const albumCol = collection(this.db, 'albums');
    return from(getDocs(albumCol).then((snapshot) => {
      return snapshot.docs.map((doc) => doc.data() as IAlbum)
    }));
  }
  
  async getAlbumsByDate() {
    const albumsCol = collection(this.db, 'albums');
    const q = query(albumsCol, orderBy('date', 'desc') , limit(1));
    const albumsSnapshot = await getDocs(q);
    const albumsList = albumsSnapshot.docs.map((doc) => doc.data());
    return albumsList;
  }

  async getAllSongs() {
    const songCol = collection(this.db, 'songs');
    const songsSnapshot = await getDocs(songCol);
    const songList = songsSnapshot.docs.map((doc) => doc.data());
    return songList;
  }

   getAllSongsObservable() {
    //console.log("call get songs")
    const songCol = collection(this.db, 'songs');
    return from(getDocs(songCol).then((snapshot) => snapshot.docs.map((doc) => doc.data() as ISong)));
  }

  async getTopSongs() {
    const songCol = collection(this.db, 'songs');
    const q = query(songCol, orderBy('viewed', 'desc') , limit(10));
    const songsSnapshot = await getDocs(q);
    const songList = songsSnapshot.docs.map((doc) => doc.data());
    return songList;
  }

  
  getArtistsObservable() {
    const artistCol = collection(this.db, 'artists');
    return from(getDocs(artistCol).then((snapshot) => {
      return snapshot.docs.map((doc) => doc.data() as IArtist)
    }));
  }

  /**
   * Get an artist by id from the 'artists' collection in Firestore.
   *
   * @param {string} id - The id of the artist to retrieve.
   * @return {Promise<IArtist>} - A promise that resolves to an array of artist objects.
   */
  async getAnArtist(id: string) {
    // Get a reference to the 'artists' collection
    const artistCol = collection(this.db, 'artists');

    // Execute a query to retrieve the artist with the specified id
    const q = query(artistCol, where('id', '==', id), limit(1));
    const artistsSnapshot = await getDocs(q);
    
    return artistsSnapshot.docs[0].data() as IArtist;
  }


  async getAllPlaylists() {
    const playlistCol = collection(this.db, 'playlists');
    const playlistSnapshot = await getDocs(playlistCol);
    const playlistList = playlistSnapshot.docs.map((doc) => doc.data());
    console.log(playlistList);
    return playlistList;
  }

  async getAPlaylist(id :string) {
    const playlistCol = collection(this.db, 'playlists');
    const q = query(playlistCol, where('id', '==', id), limit(1));
    const playlistSnapshot = await getDocs(q);
    if (!playlistSnapshot.empty) {

      const doc = playlistSnapshot.docs[0];
      return doc.data() as IPlaylist;
    }
    return null;
  }

  getPlaylistsObservable() {
    const playlistCol = collection(this.db, 'playlists');
    return from(getDocs(playlistCol).then((snapshot) => {
      return snapshot.docs.map((doc) => doc.data() as IPlaylist)
    }));
  }

  getPlaylistByIdObservable(id: string) {
    const playlistCol = collection(this.db, 'playlists');
    const q = query(playlistCol, where('id', '==', id), limit(1));
    return from(getDocs(q).then((snapshot) => {
      if (!snapshot.empty) {

        const doc = snapshot.docs[0];
        return doc.data() as IPlaylist;
      }

      return null;    
    }));
  }


  constructor() {}
}
