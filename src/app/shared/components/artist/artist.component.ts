import { CommonModule } from '@angular/common';
import { Component, OnInit ,Input, inject} from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { options } from "ionicons/icons";


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,],
})
export class ArtistComponent  implements OnInit {
  private router = inject(Router);

  @Input() artist: any;
  constructor() { 
    addIcons({ options});
  }

  ngOnInit() {}
  onClickGetArtistProfil() {
    this.router.navigate(['/artist-profil']);
  }
}
