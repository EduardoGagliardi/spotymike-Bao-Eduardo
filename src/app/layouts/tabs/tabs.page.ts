import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { DocumentData, Firestore } from 'firebase/firestore/lite';
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
  album: DocumentData[];
  constructor() {
    this.album = [];

    addIcons({ home, heart, play, person });
  }
  
  ngOnInit(): void {
    this.getAblums();
  }

  getAblums() {
    this.albumService.getAlbums().then(res =>{
      this.album = res;
    });
  }

}
