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
import { IUser } from "src/app/core/interfaces/user";
import { IPlaylist } from "src/app/core/interfaces/playlist";
import { Store } from "@ngrx/store";
import { AppState } from "src/store/app.state";
import { Observable } from "rxjs";
import { selectCurrentUserStore } from "src/store/selector/user.selector";
import { selectMyPlaylist } from "src/store/selector/playlist.selector";

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
  store = inject(Store<AppState>);
  user$ : Observable<IUser> = new Observable<IUser>();
  playlists$ : Observable<IPlaylist[]> = new Observable<IPlaylist[]>();
  private router = inject(Router);
  private modalCtl = inject(ModalController);

  playlists: IPlaylist[] = [];
  constructor() {
    addIcons({ settings });
  }

  ngOnInit() {
    //const user = this.serviceAuth.currentUser as IUser;
    this.user$ = this.store.select(selectCurrentUserStore);
    this.playlists$ = this.store.select(selectMyPlaylist)
    // this.username = user.firstname + " " + user.lastname;
    // this.followers = user.followers == null ? 0 : user.followers;
    // this.following = user.followed?.length == null ? 0 : user.followed.length;

    //  this.fireBaseService.getAllPlaylists().then((data) => {
    //     this.playlists = data.map((playlist) => playlist as IPlaylist);
    //     this.playlists = this.playlists.filter(
    //       (song) => song.owner == user.id
    //     );
    //   })
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
