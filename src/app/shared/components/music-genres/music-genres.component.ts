import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-music-genres',
  templateUrl: './music-genres.component.html',
  styleUrls: ['./music-genres.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class MusicGenresComponent  implements OnInit {
  selectedGenre: string = 'All';
  constructor() { }

  ngOnInit() {}
  selectGenre(genre: string) {
    this.selectedGenre = genre;
  }
}
