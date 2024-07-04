import { Component } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from "@angular/common";
import { TopSongComponent } from "src/app/shared/components/songs-components/top-song/top-song.component";
import { ListArtistComponent } from "src/app/shared/components/artists-components/list-artist/list-artist.component";
import { ListAlbumFavorisComponent } from "src/app/shared/components/albums-components/list-album-favoris/list-album-favoris.component";

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
  constructor() {}

  ngOnInit() {
  }
}
