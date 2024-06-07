import { Component, OnInit, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonTitle,
  IonContent,
  IonInput,
  IonItem,
  ModalController,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  standalone: true,
  imports: [
    IonItem,
    IonInput,
    IonContent,
    IonTitle,
    IonButton,
    IonButtons,
    IonToolbar,
    IonHeader,
  ],
})
export class SettingComponent  implements OnInit {

  private modalCtl = inject(ModalController);

  constructor() { }

  ngOnInit() {}
  async cancel() {
    await this.modalCtl.dismiss();
  }
}
