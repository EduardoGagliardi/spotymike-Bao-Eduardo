import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-music-genres',
  templateUrl: './music-genres.component.html',
  styleUrls: ['./music-genres.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule ],
})
export class MusicGenresComponent  implements OnInit {
  selectedGenre: string = 'All';
  showAllGenres: boolean = false;
  genres: Array<string> = [
    "Pop",
    "R&B",
    "Rock",
    "Blues",
    "Classical",
    "Country",
    "Dance",
    "Disco",
    "Electronic",
    "Hip Hop",
    "House",
    "Indie",
    "Jazz",
    "K-Pop",
    "Latin",
    "Opera",
    "Rap",
  ];

  constructor() { }

  ngOnInit() {}

  selectGenre(genre: string) {
    this.selectedGenre = genre;
  }

  toggleShowAllGenres() {
    this.showAllGenres = !this.showAllGenres;
  }
}
