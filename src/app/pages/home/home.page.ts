import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/angular/standalone";
import { IonicModule } from "@ionic/angular";
import { addIcons } from "ionicons";
import { book, home } from "ionicons/icons";
import { TopAlbumComponent } from "src/app/shared/components/top-album/top-album.component";
import { MusicGenresComponent } from "src/app/shared/components/music-genres/music-genres.component";
import { TopSongComponent } from "src/app/shared/components/top-song/top-song.component";
import { ListSongComponent } from "src/app/shared/components/list-song/list-song.component";
import { ListArtistComponent } from "src/app/shared/components/list-artist/list-artist.component";

@Component({
  selector: "app-home-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    // FormsModule,
    TopAlbumComponent,
    MusicGenresComponent,
    TopSongComponent,
    ListSongComponent,
    ListArtistComponent
  ],
})
export class HomePage implements OnInit {
  constructor() {
    addIcons({ book, home });
  }

  ngOnInit() {}
}
