import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonText } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.page.html',
  styleUrls: ['./playlist.page.scss'],
  standalone: true,
  imports: [IonText, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PlaylistPage implements OnInit {
  playlistId: any;
  playlist: any;
  private fireBaseService = inject(FirestoreService);

  constructor(private route: ActivatedRoute) {
   }

  async ngOnInit() {
    this.route.params.subscribe(async params => {
      this.playlistId = params['id'];
      this.playlist = await this.fireBaseService.getAPlaylist(this.playlistId);
      console.log(this.playlist);
    });
  }
  
}
