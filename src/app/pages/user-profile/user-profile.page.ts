import { Component, inject } from "@angular/core";
import { addIcons } from "ionicons";
import { settings } from "ionicons/icons";
import { IonicModule, ModalController } from "@ionic/angular";
import { SettingComponent } from "src/app/shared/modal/setting/setting.component";
import { SongListComponent } from "src/app/shared/modal/song-list/song-list.component";
import { PlaylistProfilComponent } from "src/app/shared/components/playlist-profil/playlist-profil.component";
import { CommonModule } from "@angular/common";
import { ListArtistComponent } from "src/app/shared/components/list-artist/list-artist.component";
import { ListArtistFollowedComponent } from "src/app/shared/components/list-artist-followed/list-artist-followed.component";
import { Router } from "@angular/router";
import { AuthentificationService } from "src/app/core/services/authentification.service";
import { IUser } from "src/app/core/interfaces/user";
import { FirestoreService } from "src/app/core/services/firestore.service";
import { IPlaylist } from "src/app/core/interfaces/playlist";

@Component({
  selector: "app-user-profile",
  templateUrl: "user-profile.page.html",
  styleUrls: ["user-profile.page.scss"],
  standalone: true,
  imports: [
    IonicModule,
    PlaylistProfilComponent,
    CommonModule,
    ListArtistComponent,
    ListArtistFollowedComponent,
  ],
})
export class UserProfilePage {
  private router = inject(Router);
  private modalCtl = inject(ModalController);
  private serviceAuth = inject(AuthentificationService);
  private fireBaseService = inject(FirestoreService);

  username: string = "";
  followers: number = 0;
  following: number = 0;

  // playlists = [
  //   {
  //     id: 1,
  //     title: "This is n° 1",
  //     cover: "assets/avatar/album-photo.jpg",
  //   },
  //   {
  //     id: 2,
  //     title: "This is n° 2",
  //     cover: "assets/avatar/album-photo.jpg",
  //   },
  //   {
  //     id: 3,
  //     title: "This is n° 3",
  //     cover: "assets/avatar/album-photo.jpg",
  //   },

  //   {
  //     id: 4,
  //     title: "This is n° 4",
  //     cover: "assets/avatar/album-photo.jpg",
  //   },
  //   {
  //     id: 5,
  //     title: "This is n° 5",
  //     cover: "assets/avatar/album-photo.jpg",
  //   },
  // ];

  playlists: IPlaylist[] = [];
  constructor() {
    addIcons({ settings });
  }

  ngOnInit() {
    const user = this.serviceAuth.currentUser as IUser;
    this.username = user.firstname + " " + user.lastname;
    this.followers = user.followers == null ? 0 : user.followers;
    this.following = user.followed?.length == null ? 0 : user.followed.length;

     this.fireBaseService.getAllPlaylists().then((data) => {
        this.playlists = data.map((playlist) => playlist as IPlaylist);
        this.playlists = this.playlists.filter(
          (song) => song.owner == user.id
        );
      })
  }
  async onSettingModal() {
    const modal = await this.modalCtl.create({
      component: SettingComponent,
    });
    modal.present();
  }
  async onSongListModal() {
    const modal = await this.modalCtl.create({
      component: SongListComponent,
    });
    modal.present();
  }
  async onListPlaylistPage() {
    this.router.navigate(["/playlist"]);
  }
  async onListArtistPage() {
    this.router.navigate(["/list-artist"]);
  }

  editProfile() {
    this.router.navigate(["/edit-profil"]);
  }

  shareProfile() {}
}
