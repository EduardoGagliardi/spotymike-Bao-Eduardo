import { CommonModule } from '@angular/common';
import { Component, OnInit ,Input, inject} from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { options } from "ionicons/icons";
import { OptionComponent } from '../../../modal/option/option.component';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss'],
  standalone: true,
  imports: [IonicModule,CommonModule,],
})
export class ArtistComponent  implements OnInit {
  private router = inject(Router);
  private modalCtl = inject(ModalController);

  @Input() artist: any;
  constructor() { 
    addIcons({ options});
  }

  ngOnInit() {}
  onClickGetArtistProfil(id: string) {
    this.router.navigate(['/artist-profil'], { queryParams: { id: id } });
  }
  async onSettingModal(){
    const modal = await this.modalCtl.create({
      component: OptionComponent,
    });
    modal.present();
  }
}
