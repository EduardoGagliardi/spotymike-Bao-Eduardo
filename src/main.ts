import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { i18nProviders } from './app/core/providers/i18n.providers';
import { IonicModule } from '@ionic/angular';
import { FirestoreService } from './app/core/services/firestore.service';
import { LocalStorageService } from './app/core/services/local-storage.service';
import { Media } from '@ionic-native/media/ngx';
import { DbService } from './app/core/services/db.service';
import { AudioService } from './app/core/services/audio.service';
import { StoreModule, provideStore } from '@ngrx/store';
import { songReducer } from './store/reducer/song.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import * as songEffects from './store/effect/songs.effects';
import * as albumEffects  from './store/effect/albums.effects';
import * as userEffects  from './store/effect/users.effects';
import * as artistEffects  from './store/effect/artists.effects';
import * as playlistEffects  from './store/effect/playlists.effects';

import { albumReducer } from './store/reducer/album.reducer';
import { userReducer } from './store/reducer/user.reducer';
import { ArtistReducer } from './store/reducer/artist.reducer';
import { PlaylistReducer } from './store/reducer/playlist.reducer';
if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    AudioService,
    FirestoreService,
    LocalStorageService,
    i18nProviders,
    DbService,
    Media,
    provideHttpClient(),
    provideIonicAngular(),
    provideEffects(
      songEffects,
      albumEffects,
      userEffects,
      artistEffects,
      playlistEffects
    ),
    provideStore({ 
      songs: songReducer, 
      albums: albumReducer , 
      users: userReducer,
      artists: ArtistReducer,
      playlists: PlaylistReducer
    }),
    importProvidersFrom(IonicModule.forRoot()),
    provideRouter(routes),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(
      StoreModule.forRoot({
        songs: songReducer, 
        albums: albumReducer, 
        users: userReducer,
        artists: ArtistReducer,
        playlists: PlaylistReducer
      }),
      StoreDevtoolsModule.instrument({ maxAge: 50, logOnly: environment.production })
    )
  ],
});
