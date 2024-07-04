import { CommonModule } from '@angular/common';
import { Component, OnInit ,Input, inject} from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { OptionComponent } from 'src/app/shared/modal/option/option.component';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,],
})
export class SongComponent  implements OnInit {
  private router = inject(Router);
  private modalCtl = inject(ModalController);
  @Input() song: any;
  constructor() { }

  ngOnInit() {}
  onClickGetSongPlayer(id: string) {
    this.router.navigate(['/song-player', id]);
  }

  async onOptionModal(){
    const modal = await this.modalCtl.create({
      component: OptionComponent,
    });
    modal.present();
  }
}
