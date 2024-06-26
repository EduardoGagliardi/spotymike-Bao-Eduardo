import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ArtistComponent } from '../artist/artist.component';
import { IArtist } from 'src/app/core/interfaces/artist';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { selectArtistList } from 'src/store/selector/artist.selector';
import { loadArtist } from 'src/store/action/artist.action';

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, ArtistComponent],
})
export class ListArtistComponent  implements OnInit {
  artists$ : Observable<IArtist[]> = new Observable<IArtist[]>();
  store = inject(Store<AppState>);

  constructor() { 
  }

  ngOnInit() {
    this.artists$ = this.store.select(selectArtistList);
    this.store.dispatch(loadArtist());
  }

}
