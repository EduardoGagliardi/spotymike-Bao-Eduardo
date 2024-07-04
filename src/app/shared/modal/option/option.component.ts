import { Component, OnInit, inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonButton, IonButtons, IonContent, IonHeader, IonInput, IonItem, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss'],
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
export class OptionComponent  implements OnInit {
private modalCtl = inject(ModalController);
  constructor() { }

  ngOnInit() {}
  async cancel() {
    await this.modalCtl.dismiss();
  }
}
