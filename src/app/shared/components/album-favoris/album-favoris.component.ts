import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-album-favoris',
  templateUrl: './album-favoris.component.html',
  styleUrls: ['./album-favoris.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,],
})
export class AlbumFavorisComponent  implements OnInit {
  @Input() album: any;

  constructor() { }

  ngOnInit() {}
  onClickGetAlbum(){}
}
