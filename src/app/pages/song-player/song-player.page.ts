import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonContent, IonTitle, IonButtons, IonButton, IonToolbar, IonHeader, IonRange, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.page.html',
  styleUrls: ['./song-player.page.scss'],
  standalone: true,
  imports: [IonIcon, IonRange, IonHeader, IonToolbar, IonButton, IonButtons, IonTitle, IonContent,  
    CommonModule, 
    FormsModule,
  ]
})
export class SongPlayerPage implements OnInit {

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  
}



