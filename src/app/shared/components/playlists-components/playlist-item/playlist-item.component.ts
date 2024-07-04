import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { OptionComponent } from '../../../modal/option/option.component';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,],
})
export class PlaylistComponent  implements OnInit {
  private modalCtl = inject(ModalController);
  private router = inject(Router);
  @Input() playlist: any;
  constructor() { }

  ngOnInit() {
    console.log(this.playlist)
  }
  onClickGetPlaylist(id: string) {
    this.router.navigate(['/song-player', id]);
  }
  async onOptionModal(){
    const modal = await this.modalCtl.create({
      component: OptionComponent,
    });
    modal.present();
  }
}
