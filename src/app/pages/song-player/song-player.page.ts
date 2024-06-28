import { CommonModule, Location } from "@angular/common";
import { Component, Input, OnInit, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonContent, IonTitle, IonButtons, IonButton, IonToolbar, IonHeader, IonRange, IonIcon } from "@ionic/angular/standalone";
import { SongPlayerBarComponent } from "../song-player-bar/song-player-bar.component";
import { AppState } from "src/store/app.state";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ISong } from "src/app/core/interfaces/song";
import { selectSongByIdStore } from "src/store/selector/song.selector";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.page.html',
  styleUrls: ['./song-player.page.scss'],
  standalone: true,
  imports: [
    IonIcon, 
    IonRange, 
    IonHeader, 
    IonToolbar, 
    IonButton, 
    IonButtons, 
    IonTitle, 
    IonContent, 
    CommonModule, 
    FormsModule,
    SongPlayerBarComponent
  ]
})
export class SongPlayerPage implements OnInit {
  store = inject(Store<AppState>);
  song$ : Observable<ISong | null> = new Observable<ISong>();
  id: string = '';
  private router = inject(Router);

  constructor(
    private route: ActivatedRoute,
    //private location: Location
    ) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.song$ = this.store.select(selectSongByIdStore(this.id));
    });
  }  
  goBack(){
    //this.location.back();
    this.router.navigateByUrl('/home');
  }
}



