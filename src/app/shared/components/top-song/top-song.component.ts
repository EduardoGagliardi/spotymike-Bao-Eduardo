import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SongCardComponent } from '../song-card/song-card.component';

@Component({
  selector: 'app-top-song',
  templateUrl: './top-song.component.html',
  styleUrls: ['./top-song.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,SongCardComponent],

})
export class TopSongComponent implements OnInit {
  topSongs = [
    {
      image: 'assets/music/thisIsElonMusk.png',
      title: 'Song 1',
      artist: 'Artist 1'
    },
    {
      image: 'assets/music/thisIsElonMusk.png',
      title: 'Song 2',
      artist: 'Artist 2'
    },
    {
      image: 'assets/music/thisIsElonMusk.png',
      title: 'Song 3',
      artist: 'Artist 3'
    },
    {
      image: 'assets/music/thisIsElonMusk.png',
      title: 'Song 4',
      artist: 'Artist 4'
    },
    {
      image: 'assets/music/thisIsElonMusk.png',
      title: 'Song 5',
      artist: 'Artist 5'
    },
    {
      image: 'assets/music/thisIsElonMusk.png',
      title: 'Song 6',
      artist: 'Artist 6'
    },
  ];
  constructor() { }

  ngOnInit() {}

}
