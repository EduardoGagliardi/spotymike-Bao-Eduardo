import { Component, OnInit, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class SongCardComponent  implements OnInit {

  @Input() song: any;
  constructor() { }

  ngOnInit() {}

}
