import { Component, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { loadAlbum } from 'src/store/action/album.action';
import { loadArtist } from 'src/store/action/artist.action';
import { loadPlaylist } from 'src/store/action/playlist.action';
import { loadSong } from 'src/store/action/song.action';
import { loadUsers } from 'src/store/action/user.action';
import { AppState } from 'src/store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  private translate = inject(TranslateService);
  store = inject(Store<AppState>);

  constructor() {}
  ngOnInit(): void {
    this.translate.use('fr_FR');
    this.translate.setDefaultLang('fr_FR');
    this.store.dispatch(loadUsers())
    this.store.dispatch(loadSong())
    this.store.dispatch(loadAlbum())
    this.store.dispatch(loadArtist())
    this.store.dispatch(loadPlaylist())
  }
}
