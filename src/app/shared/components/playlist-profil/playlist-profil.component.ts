import { Component, OnInit,Input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {}

}
