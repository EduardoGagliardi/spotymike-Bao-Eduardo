import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { options } from "ionicons/icons";
import { ISong } from 'src/app/core/interfaces/song';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { IUser } from 'src/app/core/interfaces/user';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { Observable } from 'rxjs';
import { selectCurrentUserStore, selectUserStoreList } from 'src/store/selector/user.selector';
import { selectSong, selectAllSongs, selectLastPlayed } from 'src/store/selector/song.selector';
import { SongComponent } from '../song/song.component';


@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,SongComponent]
})
export class ListSongComponent  implements OnInit {
  store = inject(Store<AppState>);
  user$ : Observable<IUser> = new Observable<IUser>();
  songs$ : Observable<ISong[]> = new Observable<ISong[]>();
  private serviceAuth = inject(AuthentificationService);
  songs: ISong[];
  constructor() { 
    this.songs = []
    addIcons({ options});
  }

  ngOnInit() {
    this.songs$ = this.store.select(selectLastPlayed);
  }

} 
