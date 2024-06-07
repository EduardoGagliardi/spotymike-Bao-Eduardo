import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular'; 
import { IAlbum } from 'src/app/core/interfaces/album';
import { FirestoreService } from 'src/app/core/services/firestore.service';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class NewAlbumComponent  implements OnInit {
  private router = inject(Router);
  private fireBaseService = inject(FirestoreService);
  album: IAlbum;
  constructor() { 
    this.album = {} as IAlbum;
  }

  ngOnInit() {
    this.fireBaseService.getAlbums().then(res => {
      this.album = res[0] as IAlbum;
    })
  }

  async onAlbumPage() {
    this.router.navigate(['/album']);  }
}
