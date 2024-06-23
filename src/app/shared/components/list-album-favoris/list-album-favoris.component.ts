import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IAlbum } from 'src/app/core/interfaces/album';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { AlbumFavorisComponent } from '../album-favoris/album-favoris.component';

@Component({
  selector: 'app-list-album-favoris',
  templateUrl: './list-album-favoris.component.html',
  styleUrls: ['./list-album-favoris.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,AlbumFavorisComponent],
})
export class ListAlbumFavorisComponent  implements OnInit {
  albums : IAlbum[];
  private fireBaseService = inject(FirestoreService);

  constructor() { 
    this.albums = [];
  }

  ngOnInit() {
    this.fireBaseService.getAlbums().then(res => {
      this.albums = res.map(album => album as IAlbum);
  });
  }

}
