import { SongCardComponent } from './../../shared/components/song-card/song-card.component';
import { LocalStorageService } from './../../core/services/local-storage.service';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonIcon, IonRow, IonCol } from '@ionic/angular/standalone';
import { TabsPage } from 'src/app/layouts/tabs/tabs.page';
import { IUser } from 'src/app/core/interfaces/user';
import { ArtistComponent } from 'src/app/shared/components/artist/artist.component';
import { DbService } from 'src/app/core/services/db.service';


@Component({
  selector: 'app-like',
  templateUrl: './like.page.html',
  styleUrls: ['./like.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonIcon, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TabsPage, ArtistComponent, SongCardComponent]
})
export class LikePage implements OnInit {

  artists = [
    {
      avatar: 'assets/music/thisIsElonMusk.png',
      description: 'Test',
      fullname: 'Taylor Swift',
      id: 1, 
      label : "",
      follower: 2000
    },
    {
      avatar: 'assets/music/thisIsElonMusk.png',
      description: 'Test',
      fullname: 'Taylor Swift',
      id: 1, 
      label : "",
      follower: 2000
    },
    {
      avatar: 'assets/music/thisIsElonMusk.png',
      description: 'Test',
      fullname: 'Taylor Swift',
      id: 1, 
      label : "",
      follower: 2000
    },
    {
      avatar: 'assets/music/thisIsElonMusk.png',
      description: 'Test',
      fullname: 'Taylor Swift',
      id: 1, 
      label : "",
      follower: 2000
    },
  ]

  db = inject(DbService);
  LocalStorageService = inject(LocalStorageService);
  // artists:IUser[] = []
  albums = []
  songs = []
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  //   this.db.getUsers().then((data: IUser[]) => {
  //     if (data && data.length > 0) {
  //       this.artists = data;
  //       console.log(this.artists);
        
  //     }
  //   })
  }
}
