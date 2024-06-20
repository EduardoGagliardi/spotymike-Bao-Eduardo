import { Component, EnvironmentInjector, OnInit, inject } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
} from "@ionic/angular/standalone";
import { DocumentData, Firestore } from "firebase/firestore/lite";
import { addIcons } from "ionicons";
import { home, heart, play, person } from "ionicons/icons";
import { AudioService } from "src/app/core/services/audio.service";
import { FirestoreService } from "src/app/core/services/firestore.service";

@Component({
  selector: "app-tabs",
  templateUrl: "tabs.page.html",
  styleUrls: ["tabs.page.scss"],
  standalone: true,
  imports: [
    IonicModule
  ],
})
export class TabsPage implements OnInit {
  private albumService = inject(FirestoreService);
  private audioService = inject(AudioService);
  album: DocumentData[];
  constructor() {
    this.album = [];

    addIcons({ home, heart, play, person });
  }

  ngOnInit(): void {
    this.getAblums();
    this.audioService.load("");
  }

  getAblums() {
    this.albumService.getAlbums().then((res) => {
      this.album = res;
    });
  }

  play() {
    this.audioService.play();
  }
  pause() {
    this.audioService.pause();
  }
  stop() {
    this.audioService.stop();
  }
}
