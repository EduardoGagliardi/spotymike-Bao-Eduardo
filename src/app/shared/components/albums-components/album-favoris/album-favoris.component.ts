import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { OptionComponent } from '../../../modal/option/option.component';

@Component({
  selector: 'app-album-favoris',
  templateUrl: './album-favoris.component.html',
  styleUrls: ['./album-favoris.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,],
})
export class AlbumFavorisComponent  implements OnInit {
  private modalCtl = inject(ModalController);

  @Input() album: any;

  constructor() { }

  ngOnInit() {}
  onClickGetAlbum(){}
  async onSettingModal(){
    const modal = await this.modalCtl.create({
      component: OptionComponent,
    });
    modal.present();
  }
}
