import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; 

@Component({
  selector: 'app-top-album',
  templateUrl: './top-album.component.html',
  styleUrls: ['./top-album.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TopAlbumComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
