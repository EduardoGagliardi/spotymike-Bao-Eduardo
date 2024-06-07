import { Component, HostListener, OnInit, inject ,ElementRef } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { FormsModule } from "@angular/forms";
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/angular/standalone";
import { IonicModule, ModalController } from "@ionic/angular";
import { addIcons } from "ionicons";
import { book, home, search } from "ionicons/icons";
import { NewAlbumComponent } from "src/app/shared/components/new-album/new-album.component";
import { MusicGenresComponent } from "src/app/shared/components/music-genres/music-genres.component";
import { TopSongComponent } from "src/app/shared/components/top-song/top-song.component";
import { ListSongComponent } from "src/app/shared/components/list-song/list-song.component";
import { ListArtistComponent } from "src/app/shared/components/list-artist/list-artist.component";
import { SettingComponent } from "src/app/shared/modal/setting/setting.component";
import { SongListComponent } from "src/app/shared/modal/song-list/song-list.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-home-home",
  templateUrl: "./home.page.html",
  styleUrls: ["./home.page.scss"],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    // FormsModule,
    NewAlbumComponent,
    MusicGenresComponent,
    TopSongComponent,
    ListSongComponent,
    ListArtistComponent
  ],
})
export class HomePage implements OnInit {
  private router = inject(Router);
  private modalCtl = inject(ModalController);
  showSearchInput = false;
  constructor(private eRef: ElementRef) {
    addIcons({ book, home, search });
    
  }

  ngOnInit() {}
  async onListArtistPage() {
    this.router.navigate(['/list-artist']);
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
  toggleSearchInput(event: Event) {
    event.stopPropagation();
    this.showSearchInput = !this.showSearchInput;
  }
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!this.eRef.nativeElement.contains(target) && this.showSearchInput) {
      this.showSearchInput = false;
    }
  }
}
