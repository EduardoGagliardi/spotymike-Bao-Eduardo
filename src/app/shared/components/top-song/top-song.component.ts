import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SongCardComponent } from '../song-card/song-card.component';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { DocumentData } from 'firebase/firestore/lite';
import { ISong } from 'src/app/core/interfaces/song';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { Observable } from 'rxjs';
import { selectTopSongStore } from 'src/store/selector/song.selector';

@Component({
  selector: 'app-top-song',
  templateUrl: './top-song.component.html',
  styleUrls: ['./top-song.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,SongCardComponent],

})
export class TopSongComponent implements OnInit {
  store = inject(Store<AppState>);
  songs$ : Observable<ISong[]> = new Observable<ISong[]>();
  private fireBaseService = inject(FirestoreService);
  constructor() {}

  ngOnInit() {
    // this.fireBaseService.getAllSongs().then(res => {
    //   this.songs = res.map(song => song as ISong).sort((a, b) => Number(b.viewed) - Number(a.viewed)).slice(0,9);
    // })
    // .catch(err => console.log(err));

    this.songs$ = this.store.select(selectTopSongStore);
  }
}
