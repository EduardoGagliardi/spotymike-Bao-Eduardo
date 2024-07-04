import { Component, OnInit,Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-playlist-profil',
  templateUrl: './playlist-profil.component.html',
  styleUrls: ['./playlist-profil.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class PlaylistProfilComponent  implements OnInit {
  @Input() playlist: any;
  private router = inject(Router);
  constructor() { }

  ngOnInit() {}
 onClickGetPlaylistPlayer(id: string) {
    this.router.navigate(["/playlist", id]);
  }
}
