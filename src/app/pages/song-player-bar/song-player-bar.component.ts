import { IonContent, IonRange, IonIcon, IonGrid } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';

@Component({
  selector: 'app-song-player-bar',
  templateUrl: './song-player-bar.component.html',
  styleUrls: ['./song-player-bar.component.scss'],
  standalone: true,
  imports: [IonGrid, IonIcon, IonRange, 
    IonContent
  ],
})
export class SongPlayerBarComponent  implements OnInit {
  file!: MediaObject;

  constructor(
    public media: Media,
    public platform: Platform
  ){
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  readAudio() {
    this.file = this.media.create('../../assets/music/thisIsElonMusk.mp3');
    this.file.play();
  }
}
