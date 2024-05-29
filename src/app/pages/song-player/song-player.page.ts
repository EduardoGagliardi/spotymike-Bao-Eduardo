import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonToggle, IonButton, IonIcon, IonRange, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonCol, IonFab, IonFabButton, IonGrid, IonRow, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.page.html',
  styleUrls: ['./song-player.page.scss'],
  standalone: true,
  imports: [IonButtons, IonRow, IonGrid, IonFabButton, IonFab, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonRange, IonIcon, IonButton, IonToggle, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SongPlayerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
