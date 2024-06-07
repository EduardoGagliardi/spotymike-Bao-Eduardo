import { IonicModule } from '@ionic/angular';
import { IonRow, IonCol, IonIcon } from '@ionic/angular/standalone';
import { Component, Input, OnInit, input } from '@angular/core';
import { IAlbum } from 'src/app/core/interfaces/user';
import { albums, options } from 'ionicons/icons';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  standalone: true,
  imports: [
    IonRow,
    IonCol,
    IonIcon,
    IonicModule,
    CommonModule,
  ]
})
export class AlbumComponent  implements OnInit {
  @Input() album: any;
  constructor() {
    addIcons({ options});
   }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {

  }

}
