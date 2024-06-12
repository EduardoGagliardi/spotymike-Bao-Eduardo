import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ArtistComponent } from '../artist/artist.component';
import { IArtist } from 'src/app/core/interfaces/artist';
import { FirestoreService } from 'src/app/core/services/firestore.service';
import { IUser } from 'src/app/core/interfaces/user';
import { AuthentificationService } from 'src/app/core/services/authentification.service';

@Component({
  selector: 'app-list-artist-followed',
  templateUrl: './list-artist-followed.component.html',
  styleUrls: ['./list-artist-followed.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, ArtistComponent],
})
export class ListArtistFollowedComponent  implements OnInit {
  artists : IArtist[];
  user : IUser;
  private serviceAuth = inject(AuthentificationService);
  private fireBaseService = inject(FirestoreService);
  constructor() { 
    this.artists = [];
    this.user = {} as IUser;
  }

  ngOnInit() {
    //get all followed by user
    const artistList = this.serviceAuth.currentUser.followed ?? [];

    //get all artists
    this.fireBaseService.getArtists().then(res => {
      this.artists = res.map(artist => artist as IArtist);
      this.artists = this.artists.filter(
        (artist) => artistList.filter(elm => elm.id === artist.id).length > 0
      )
    });
    //console.log( this.artists)

  }
}
