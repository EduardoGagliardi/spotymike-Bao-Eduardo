import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { options } from "ionicons/icons";
import { SongComponent } from '../song/song.component';


@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,SongComponent]
})
export class ListSongComponent  implements OnInit {
  listSongs = [
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
  constructor() { 
    addIcons({ options});
  }

  ngOnInit() {}

}
