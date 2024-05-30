import { IonContent, IonRange } from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-player-bar',
  templateUrl: './song-player-bar.component.html',
  styleUrls: ['./song-player-bar.component.scss'],
  standalone: true,
  imports: [IonRange, 
    IonContent
  ],
})
export class SongPlayerBarComponent  implements OnInit {

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

}
