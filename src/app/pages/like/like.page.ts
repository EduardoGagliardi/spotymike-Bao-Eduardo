import { LocalStorageService } from './../../core/services/local-storage.service';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonIcon, IonRow, IonCol } from '@ionic/angular/standalone';
import { TabsPage } from 'src/app/layouts/tabs/tabs.page';
import { IUser } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-like',
  templateUrl: './like.page.html',
  styleUrls: ['./like.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonIcon, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TabsPage],
})
export class LikePage implements OnInit {

  LocalStorageService = inject(LocalStorageService);
  artists:IUser[] = []
  albums = []
  songs = []
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {

  }
}
