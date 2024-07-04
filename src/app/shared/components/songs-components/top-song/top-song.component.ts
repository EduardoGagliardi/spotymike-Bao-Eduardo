import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ISong } from 'src/app/core/interfaces/song';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { Observable } from 'rxjs';
import { selectTopSongStore } from 'src/store/selector/song.selector';
import { loadSong } from 'src/store/action/song.action';
import { SongCardComponent } from '../song-card/song-card.component';

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
  constructor() {}

  ngOnInit() {
    this.songs$ = this.store.select(selectTopSongStore);
  }
}
