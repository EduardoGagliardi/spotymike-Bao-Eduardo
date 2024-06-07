import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ArtistComponent } from '../artist/artist.component';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { IArtist } from 'src/app/core/interfaces/artist';

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, ArtistComponent],
})
export class ListArtistComponent  implements OnInit {
  artists : IArtist[];
  private fireBaseService = inject(FirestoreService);

  constructor() { 
    this.artists = [];
  }

  ngOnInit() {
    this.fireBaseService.getArtists().then(res => {
      this.artists = res.map(artist => artist as IArtist).sort((a, b) => Number(b.follower) - Number(a.follower)).slice(0,9);
  });
  }

}
