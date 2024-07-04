import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonText,
} from "@ionic/angular/standalone";
import { ActivatedRoute } from "@angular/router";
import { FirestoreService } from "src/app/core/services/firestore.service";
import { Store } from "@ngrx/store";
import { AppState } from "src/store/app.state";
import { Observable } from "rxjs";
import { IPlaylist } from "src/app/core/interfaces/playlist";
import {
  selectPlaylistList,
  selectPlaylists,
} from "src/store/selector/playlist.selector";
import { PlaylistComponent } from "src/app/shared/components/playlists-components/playlist-item/playlist-item.component";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.page.html",
  styleUrls: ["./playlist.page.scss"],
  standalone: true,
  imports: [
    IonText,
    IonCol,
    IonRow,
    IonGrid,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    PlaylistComponent,
  ],
})
export class PlaylistPage implements OnInit {
  store = inject(Store<AppState>);
  playlist$: Observable<IPlaylist[]> = new Observable<IPlaylist[]>();

  constructor(private route: ActivatedRoute) {}

  async ngOnInit() {
    this.playlist$ = this.store.select(selectPlaylistList);
    this.playlist$.subscribe((playlist) => console.log(playlist));
  }
}
