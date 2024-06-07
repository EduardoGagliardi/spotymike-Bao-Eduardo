import { CommonModule } from '@angular/common';
import { Component, OnInit ,Input} from '@angular/core';
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
  @Input() artist: any;
  constructor() { 
    addIcons({ options});
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

}
