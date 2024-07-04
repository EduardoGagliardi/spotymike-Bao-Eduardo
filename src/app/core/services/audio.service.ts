import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';  //144k (gzipped: 28.6k)
interface IPlaylistMusic{
  audio : HTMLAudioElement;
  position : number;
  status: boolean
}
@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio: HTMLAudioElement;
  private playing$: BehaviorSubject<IPlaylistMusic[]>
  private isPlay$: BehaviorSubject<boolean>
  
  constructor() {
    this.audio = new Audio();
    this.playing$ = new BehaviorSubject<IPlaylistMusic[]>([]);
    this.isPlay$ = new BehaviorSubject<boolean>(false);
  }
  load(id: string = ''){
    // this.audio = new Audio(`url/${id}`);
    // this.audio.load();
  }
  play(){
    this.audio.play();
    this.isPlay$.next(true);
  }
  stop(){
    this.pause();
    this.audio.currentTime = 0;
    this.isPlay$.next(false);
  }
  pause(){
    this.audio.pause();
  }
  next(){}
  prev(){}
  lop(){}
}
