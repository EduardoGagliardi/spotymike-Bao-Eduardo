import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'; 
import { Store } from '@ngrx/store';
import { Observable, filter, map} from 'rxjs';
import { IAlbum } from 'src/app/core/interfaces/album';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { loadAlbum } from 'src/store/action/album.action';
import { AppState } from 'src/store/app.state';
import { selectAlbumStoreList, selectTopAlbumStore } from 'src/store/selector/album.selector';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class NewAlbumComponent  implements OnInit {
  store = inject(Store<AppState>);
  newAlbum$ : Observable<IAlbum> = new Observable<IAlbum>();
  private router = inject(Router);
  private fireBaseService = inject(FirestoreService);
  album: IAlbum;
  constructor() { 
    this.album = {} as IAlbum;
  }

  ngOnInit() {
    // this.store.select(state => state).subscribe(state => console.log({ state })); 
    // this.store.select(selectTopAlbumStore).subscribe(albums => console.log(albums))
    this.newAlbum$ = this.store.select(selectTopAlbumStore);
    this.store.dispatch(loadAlbum());
   
    //this.newAlbum$.subscribe(album => console.log(album))
  }

  async onAlbumPage() {
    this.router.navigate(['/album']);  }
}
