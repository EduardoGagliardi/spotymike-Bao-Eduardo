import { Component, OnInit, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  ModalController,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonInput,
    IonContent,
    IonTitle,
    IonButton,
    IonButtons,
    IonToolbar,
    IonHeader,
  ],
})
export class SongListComponent  implements OnInit {
  private modalCtl = inject(ModalController);
  constructor() { }

  ngOnInit() {}
  async cancel() {
    await this.modalCtl.dismiss();
  }
}
