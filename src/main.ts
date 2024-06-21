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
import { Firestore } from 'firebase/firestore/lite';
import { FirestoreService } from './app/core/services/firestore.service';
import { LocalStorageService } from './app/core/services/local-storage.service';
import { Media } from '@ionic-native/media/ngx';
import { DbService } from './app/core/services/db.service';
import { AudioService } from './app/core/services/audio.service';
import { provideStore } from '@ngrx/store';
import { songReducer } from './store/reducer/song.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
    importProvidersFrom(IonicModule.forRoot()),
    provideRouter(routes),
    provideStore(songReducer),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    importProvidersFrom(
      StoreDevtoolsModule.instrument({ maxAge: 50, logOnly: environment.production })
    )
  ],
});
