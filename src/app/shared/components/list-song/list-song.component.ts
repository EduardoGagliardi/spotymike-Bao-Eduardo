import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { options } from "ionicons/icons";
import { SongComponent } from '../song/song.component';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { ISong } from 'src/app/core/interfaces/song';
import { AuthentificationService } from 'src/app/core/services/authentification.service';


@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,SongComponent]
})
export class ListSongComponent  implements OnInit {
  private serviceAuth = inject(AuthentificationService);
  private fireBaseService = inject(FirestoreService);
  songs: ISong[];
  constructor() { 
    this.songs = []
    addIcons({ options});
  }

  ngOnInit() {
    const playedList = this.serviceAuth.currentUser.lastPlayed ?? [];
    this.fireBaseService.getAllSongs().then(res => {
      this.songs = res.map(song => song as ISong);
      this.songs = this.songs.filter(
        (song) => playedList.filter(elm => elm.id === song.id)
      );
    });
    
  }

}
