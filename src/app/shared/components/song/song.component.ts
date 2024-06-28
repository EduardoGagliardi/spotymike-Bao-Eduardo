import { CommonModule } from '@angular/common';
import { Component, OnInit ,Input, inject} from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,],
})
export class SongComponent  implements OnInit {
  private router = inject(Router);
  @Input() song: any;
  constructor() { }

  ngOnInit() {}
  onClickGetSongPlayer(id: string) {
    this.router.navigate(['/song-player', id]);
  }
}
