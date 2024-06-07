import { IonContent, IonRange, IonIcon, IonGrid } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-song-player-bar',
  templateUrl: './song-player-bar.component.html',
  styleUrls: ['./song-player-bar.component.scss'],
  standalone: true,
  imports: [
    IonGrid,
    IonIcon,
    IonRange,
    IonContent
  ],
})
export class SongPlayerBarComponent  implements OnInit {
playing: boolean = false;
audio = new Audio();
progress = 0;

  constructor(
    public platform: Platform
  ){
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.playing = false;
    const path = '../../assets/music/thisIsElonMusk.mp3';
    this.audio.src = path;
    this.audio.load();
    this.audio.addEventListener('timeupdate', () => {
      const duration = this.audio.duration;
      const currentTime = this.audio.currentTime;
      if (duration > 0) {
        this.progress = Math.floor((currentTime / duration) * 100);
      }
    });
  
  }

  play(){
    if (this.playing) {
      this.playing = false
      this.audio.pause();
      console.log(this.playing);
    } else {
      this.playing = true
      this.audio.play();
      console.log(this.playing);
      
    }
  }

  prev()  {
    this.audio.currentTime = 0;
  }

  next() {
    //do nothing
  }
  readAudio() {
    const path = '../../assets/music/thisIsElonMusk.mp3';
    let audio = new Audio();
    audio.src = path;
    audio.load();
    audio.play();
  }
}
