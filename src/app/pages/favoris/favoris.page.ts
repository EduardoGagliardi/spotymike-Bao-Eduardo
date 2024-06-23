import { Component, inject } from "@angular/core";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/angular/standalone";
import { ExploreContainerComponent } from "../explore-container/explore-container.component";
import { AuthentificationService } from "src/app/core/services/authentification.service";
import { FirestoreService } from "src/app/core/services/firestore.service";
import { IUser } from "src/app/core/interfaces/user";
import { IPlaylist } from "src/app/core/interfaces/playlist";
import { IArtist } from "src/app/core/interfaces/artist";
import { ISong } from "src/app/core/interfaces/song";
import { IAlbum } from "src/app/core/interfaces/album";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { TopSongComponent } from "src/app/shared/components/top-song/top-song.component";
import { ListArtistComponent } from "src/app/shared/components/list-artist/list-artist.component";
import { ListAlbumFavorisComponent } from "src/app/shared/components/list-album-favoris/list-album-favoris.component";

@Component({
  selector: "app-favoris",
  templateUrl: "favoris.page.html",
  styleUrls: ["favoris.page.scss"],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    TopSongComponent,
    ListArtistComponent,
    ListAlbumFavorisComponent
  ],
})
export class FavorisPage {
  private serviceAuth = inject(AuthentificationService);
  private fireBaseService = inject(FirestoreService);
  playlists: IPlaylist[] = [];
  artists: IArtist[] = [];
  songs: ISong[] = [];
  albums: IAlbum[] = [];
  private user = this.serviceAuth.currentUser as IUser;

  constructor() {}

  ngOnInit() {
    this.fireBaseService.getAllPlaylists().then((data) => {
      this.playlists = data.map((playlist) => playlist as IPlaylist);
      this.playlists = this.playlists.filter(
        (song) => song.owner == this.user.id
      );
    });
    this.loadSongs();
  }
  async loadSongs() {
    try {
      const data = await this.fireBaseService.getAllSongs();
      this.songs = data.map((song) => song as ISong);
      console.log("All Songs:", this.songs);

      // this.songs = this.songs.filter((song) => {
      //   return this.user.songs.some((userSong) => {userSong.id === song.id});
      // });
    } catch (error) {
      console.error("Error loading songs:", error);
    }
  }
}
