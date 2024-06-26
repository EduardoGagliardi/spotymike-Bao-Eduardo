import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IAlbum } from 'src/app/core/interfaces/album';
import { AlbumFavorisComponent } from '../album-favoris/album-favoris.component';
import { Observable } from 'rxjs';
import { AppState } from 'src/store/app.state';
import { Store } from '@ngrx/store';
import { selectAlbumStoreList } from 'src/store/selector/album.selector';
import { loadAlbum } from 'src/store/action/album.action';

@Component({
  selector: 'app-list-album-favoris',
  templateUrl: './list-album-favoris.component.html',
  styleUrls: ['./list-album-favoris.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,AlbumFavorisComponent],
})
export class ListAlbumFavorisComponent  implements OnInit {
  store = inject(Store<AppState>);
  albums$ : Observable<IAlbum[]> = new Observable<IAlbum[]>();;

  constructor() { 
  }

  ngOnInit() {
    this.albums$ = this.store.select(selectAlbumStoreList);
    this.store.dispatch(loadAlbum());
  }

}
