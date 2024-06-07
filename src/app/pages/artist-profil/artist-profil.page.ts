import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-artist-profil',
  templateUrl: './artist-profil.page.html',
  styleUrls: ['./artist-profil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ArtistProfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
