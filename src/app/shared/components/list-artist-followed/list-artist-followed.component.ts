import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ArtistComponent } from '../artist/artist.component';
import { IArtist } from 'src/app/core/interfaces/artist';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { Observable } from 'rxjs';
import { selectArtistFollowedList, selectArtistList } from 'src/store/selector/artist.selector';

@Component({
  selector: 'app-list-artist-followed',
  templateUrl: './list-artist-followed.component.html',
  styleUrls: ['./list-artist-followed.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, ArtistComponent],
})
export class ListArtistFollowedComponent  implements OnInit {
  store = inject(Store<AppState>);
  artists$ : Observable<IArtist[]> = new Observable<IArtist[]>();

  constructor() { 
  }

  ngOnInit() {

    this.artists$ = this.store.select(selectArtistFollowedList);
  }
}
