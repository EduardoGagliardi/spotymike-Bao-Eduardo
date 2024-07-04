import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
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
import { Store } from '@ngrx/store';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { setCurrentUser } from 'src/store/action/user.action';
import { AppState } from 'src/store/app.state';
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

  private router = inject(Router);
  private modalCtl = inject(ModalController);
  private authentificationService = inject(AuthentificationService);
  store = inject(Store<AppState>);

  constructor() { }

  ngOnInit() {}
  async cancel() {
    await this.modalCtl.dismiss();
  }
  async logout() {
    localStorage.removeItem('jwt');
    this.authentificationService.initCurrentUser();
    this.store.dispatch(setCurrentUser({user: null}));
    await this.modalCtl.dismiss();
    this.router.navigateByUrl('/');
  }
}
