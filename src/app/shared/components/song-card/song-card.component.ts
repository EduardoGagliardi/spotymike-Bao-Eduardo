import { Component, OnInit, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class SongCardComponent  implements OnInit {
  private router = inject(Router);
  @Input() song: any;
  constructor() { }

  ngOnInit() {}

  onClickGetSongPlayer(id : string) {
    this.router.navigate(['/song-player', id]);
  }
}
