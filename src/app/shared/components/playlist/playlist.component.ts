import { Component, OnInit } from '@angular/core';
import { IonCol, IonRow, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonIcon
  ]
})
export class PlaylistComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
