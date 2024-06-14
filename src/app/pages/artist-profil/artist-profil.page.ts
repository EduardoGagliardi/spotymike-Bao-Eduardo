import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-profil',
  templateUrl: './artist-profil.page.html',
  styleUrls: ['./artist-profil.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ArtistProfilPage implements OnInit {
  id : any;
  artist : any = {};
  private fireBaseService = inject(FirestoreService);

  constructor(private route: ActivatedRoute) { 
  }
 
  ngOnInit() {
    this.id = this.route.snapshot.queryParamMap.get('id');
    if (this.id) {
      this.fetchArtist(this.id);
    } else {
      console.error('No artist ID found in the query parameters.');
    }
  }

  async fetchArtist(id: string): Promise<void> {
    try {
      this.artist = await this.fireBaseService.getAnArtist(id);
      console.log(this.artist);
    } catch (error) {
      console.error('Error fetching artist:', error);
    }
  }
}
