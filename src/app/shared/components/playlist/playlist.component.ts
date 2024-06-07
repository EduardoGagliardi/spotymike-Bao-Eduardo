import { Playlist } from 'src/app/core/interfaces/playlist';
import { Component, Input, OnInit } from '@angular/core';
import { IonCol, IonRow, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { options, share, heart } from 'ionicons/icons';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonIcon
  ]
})

export class PlaylistComponent  implements OnInit {
  @Input()Playlist: any;

  constructor() { 
    addIcons({ options, share, heart });
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

}
