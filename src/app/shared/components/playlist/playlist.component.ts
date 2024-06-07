import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IonRow, IonCol } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { options, share } from 'ionicons/icons';
import { IPlaylist } from 'src/app/core/interfaces/playlist';
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  standalone: true,
  imports: [
    IonRow, 
    IonRow,
    IonCol,

  ],
})
export class PlaylistComponent  implements OnInit {
  // @Input() Playlist: any;

  Playlist: IPlaylist = {
    _id: '1',
    title: 'Ma comande MC Donald',
    owner: 'Mike',
    cover: 'assets/music/thisIsElonMusk.png',
    followed: 20000000000,
    createdAt: new Date(),
    updatedAt: new Date(),
    song: [
      {
        _id: "1",
        title: "Spotymike"
      }
    ],
  }
  constructor() {
    addIcons({ options });
    addIcons({ share });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

}
