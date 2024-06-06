import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ArtistComponent } from '../artist/artist.component';

@Component({
  selector: 'app-list-artist',
  templateUrl: './list-artist.component.html',
  styleUrls: ['./list-artist.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule, ArtistComponent],
})
export class ListArtistComponent  implements OnInit {
  listAtists = [
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

    }
  ];
  constructor() { }

  ngOnInit() {}

}
