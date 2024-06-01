import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { Firestore } from 'firebase/firestore/lite';
import { addIcons } from 'ionicons';
import { home, heart, play, person } from 'ionicons/icons';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  private albumService = inject(FirestoreService);
  constructor() {
    this.albumService.getAlbums();
    addIcons({ home, heart, play, person });
  }
}
